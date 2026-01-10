'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  opacity: number
  targetOpacity: number
  hue: number
}

// 获取粒子的颜色（从蓝色到紫色到青色）
const getParticleColor = (hue: number, opacity: number): string => {
  // 蓝色到紫色的渐变 (210-270)
  if (hue < 240) {
    const ratio = (hue - 210) / 30
    const r = Math.floor(59 * (1 - ratio))
    const g = Math.floor(130 * (1 - ratio) + 51 * ratio)
    const b = Math.floor(246 * (1 - ratio) + 234 * ratio)
    return `rgba(${r}, ${g}, ${b}, ${opacity})`
  } else {
    // 紫色到青色的渐变 (270-300)
    const ratio = (hue - 240) / 30
    const r = Math.floor(147 * (1 - ratio))
    const g = Math.floor(51 * (1 - ratio) + 200 * ratio)
    const b = Math.floor(234)
    return `rgba(${r}, ${g}, ${b}, ${opacity})`
  }
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number>()
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const connectionDistance = 150

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // 设置画布大小
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // 初始化粒子（增加密度以增强科技感）
    const particleCount = Math.floor((canvas.width * canvas.height) / 12000)
    particlesRef.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: Math.random() * 2 + 1,
      opacity: Math.random() * 0.6 + 0.3,
      targetOpacity: Math.random() * 0.6 + 0.3,
      hue: 210 + Math.random() * 90, // 210-300 的色相范围（蓝色到紫色到青色）
    }))

    // 鼠标追踪
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
      }
    }
    window.addEventListener('mousemove', handleMouseMove)

    // 动画循环
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const particles = particlesRef.current
      const mouse = mouseRef.current

      // 更新和绘制粒子
      particles.forEach((particle, i) => {
        // 更新位置
        particle.x += particle.vx
        particle.y += particle.vy

        // 边界反弹
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        // 鼠标交互
        const dx = mouse.x - particle.x
        const dy = mouse.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 100) {
          const force = (100 - distance) / 100
          particle.x -= (dx / distance) * force * 0.5
          particle.y -= (dy / distance) * force * 0.5
          particle.targetOpacity = Math.min(1, particle.opacity + force * 0.3)
        } else {
          particle.targetOpacity = Math.random() * 0.5 + 0.2
        }

        // 平滑透明度变化
        particle.opacity += (particle.targetOpacity - particle.opacity) * 0.05

        // 绘制粒子（带发光效果）
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.radius * 2
        )
        gradient.addColorStop(0, getParticleColor(particle.hue, particle.opacity))
        gradient.addColorStop(0.5, getParticleColor(particle.hue, particle.opacity * 0.5))
        gradient.addColorStop(1, getParticleColor(particle.hue, 0))
        
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()
        
        // 外层光晕
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius * 2, 0, Math.PI * 2)
        ctx.fillStyle = getParticleColor(particle.hue, particle.opacity * 0.15)
        ctx.fill()

        // 绘制连接线（带渐变）
        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = otherParticle.x - particle.x
          const dy = otherParticle.y - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * 0.3
            const lineGradient = ctx.createLinearGradient(
              particle.x, particle.y,
              otherParticle.x, otherParticle.y
            )
            lineGradient.addColorStop(0, getParticleColor(particle.hue, opacity))
            lineGradient.addColorStop(1, getParticleColor(otherParticle.hue, opacity))
            
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.strokeStyle = lineGradient
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        })
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    // 清理
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
      style={{
        background: 'linear-gradient(to bottom, #0f172a 0%, #1e1b4b 50%, #312e81 100%)',
      }}
    />
  )
}
