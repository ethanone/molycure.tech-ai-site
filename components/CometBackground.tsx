'use client'

import { useEffect, useRef } from 'react'

interface Comet {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  opacity: number
  hue: number
  trail: { x: number; y: number; opacity: number; size: number }[]
  maxTrailLength: number
  life: number
  maxLife: number
  glowIntensity: number
}

interface Star {
  x: number
  y: number
  radius: number
  opacity: number
  twinkleSpeed: number
  twinklePhase: number
  glowRadius: number
}

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  maxLife: number
  size: number
}

export default function CometBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number>()
  const cometsRef = useRef<Comet[]>([])
  const starsRef = useRef<Star[]>([])
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let dpr = window.devicePixelRatio || 1

    // 创建彗星 - 增强版
    const createComet = (width: number, height: number): Comet => {
      const startFromLeft = Math.random() > 0.5
      const speed = 2 + Math.random() * 3
      
      return {
        x: startFromLeft ? -50 : width + 50,
        y: Math.random() * height * 0.7,
        vx: startFromLeft ? speed : -speed,
        vy: 0.2 + Math.random() * 0.6,
        radius: 3 + Math.random() * 4,
        opacity: 0.9 + Math.random() * 0.1,
        hue: 150 + Math.random() * 30, // 绿色到青绿色 (150-180)
        trail: [],
        maxTrailLength: 40 + Math.floor(Math.random() * 50),
        life: 0,
        maxLife: 400 + Math.random() * 300,
        glowIntensity: 0.8 + Math.random() * 0.2,
      }
    }

    // 创建星星 - 增强版，更明显
    const createStar = (width: number, height: number): Star => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: 1 + Math.random() * 2,
      opacity: 0.6 + Math.random() * 0.4,
      twinkleSpeed: 0.02 + Math.random() * 0.03,
      twinklePhase: Math.random() * Math.PI * 2,
      glowRadius: 2 + Math.random() * 3,
    })

    // 创建粒子
    const createParticle = (x: number, y: number): Particle => {
      const angle = Math.random() * Math.PI * 2
      const speed = 0.5 + Math.random() * 1.5
      return {
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 0,
        maxLife: 30 + Math.random() * 40,
        size: 1 + Math.random() * 2,
      }
    }

    // 初始化
    const init = () => {
      dpr = window.devicePixelRatio || 1
      const width = window.innerWidth
      const height = window.innerHeight

      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`

      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(dpr, dpr)

      // 创建星星背景 - 增加数量
      const starCount = Math.floor((width * height) / 5000)
      starsRef.current = Array.from({ length: starCount }, () => createStar(width, height))

      // 初始彗星 - 增加数量
      cometsRef.current = Array.from({ length: 6 }, () => createComet(width, height))
      
      // 初始化粒子
      particlesRef.current = []
    }

    init()
    window.addEventListener('resize', init)

    // 鼠标追踪
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', handleMouseMove)

    let frameCount = 0

    // 动画循环
    const animate = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      frameCount++

      // 不绘制背景，使用透明背景让页面背景显示
      ctx.clearRect(0, 0, width, height)

      // 绘制星星 - 增强版，更明显
      starsRef.current.forEach((star) => {
        star.twinklePhase += star.twinkleSpeed
        const twinkle = 0.5 + 0.5 * Math.sin(star.twinklePhase)
        const currentOpacity = star.opacity * twinkle * 0.8 // 增加不透明度

        // 星星光晕 - 多层光晕效果
        const glowGradient = ctx.createRadialGradient(
          star.x, star.y, 0,
          star.x, star.y, star.glowRadius
        )
        glowGradient.addColorStop(0, `rgba(0, 224, 107, ${currentOpacity * 0.6})`)
        glowGradient.addColorStop(0.5, `rgba(0, 194, 158, ${currentOpacity * 0.3})`)
        glowGradient.addColorStop(1, 'rgba(0, 169, 176, 0)')

        ctx.beginPath()
        ctx.arc(star.x, star.y, star.glowRadius, 0, Math.PI * 2)
        ctx.fillStyle = glowGradient
        ctx.fill()

        // 星星核心
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 224, 107, ${currentOpacity})`
        ctx.fill()

        // 星星亮点
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius * 0.5, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity * 0.8})`
        ctx.fill()
      })

      // 更新和绘制彗星
      cometsRef.current.forEach((comet, index) => {
        comet.life++

        // 更新位置
        comet.x += comet.vx
        comet.y += comet.vy

        // 鼠标交互 - 彗星会被鼠标轻微吸引
        const dx = mouseRef.current.x - comet.x
        const dy = mouseRef.current.y - comet.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 200 && dist > 0) {
          const force = (200 - dist) / 200 * 0.02
          comet.vx += (dx / dist) * force
          comet.vy += (dy / dist) * force
        }

        // 添加尾迹点 - 增强版
        comet.trail.unshift({
          x: comet.x,
          y: comet.y,
          opacity: comet.opacity,
          size: comet.radius,
        })

        // 限制尾迹长度
        if (comet.trail.length > comet.maxTrailLength) {
          comet.trail.pop()
        }

        // 绘制尾迹 - 增强版，更炫酷
        comet.trail.forEach((point, i) => {
          const progress = i / comet.trail.length
          const trailOpacity = (1 - progress) * point.opacity * 0.9 // 增加不透明度
          const trailRadius = point.size * (1 - progress * 0.7)

          // 尾迹渐变色 - 绿色系，更鲜艳
          let r, g, b
          if (progress < 0.33) {
            // 前段：鲜绿色 #00E06B
            r = 0
            g = 224
            b = 107
          } else if (progress < 0.66) {
            // 中段：青绿色 #00C29E
            const t = (progress - 0.33) / 0.33
            r = 0
            g = Math.floor(224 - (224 - 194) * t)
            b = Math.floor(107 + (158 - 107) * t)
          } else {
            // 后段：蓝绿色 #00A9B0
            const t = (progress - 0.66) / 0.34
            r = 0
            g = Math.floor(194 - (194 - 169) * t)
            b = Math.floor(158 + (176 - 158) * t)
          }

          // 绘制尾迹光晕
          const trailGradient = ctx.createRadialGradient(
            point.x, point.y, 0,
            point.x, point.y, trailRadius * 2
          )
          trailGradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${trailOpacity})`)
          trailGradient.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, ${trailOpacity * 0.5})`)
          trailGradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`)

          ctx.beginPath()
          ctx.arc(point.x, point.y, trailRadius * 2, 0, Math.PI * 2)
          ctx.fillStyle = trailGradient
          ctx.fill()

          // 绘制尾迹核心
          ctx.beginPath()
          ctx.arc(point.x, point.y, trailRadius, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${trailOpacity})`
          ctx.fill()
        })

        // 绘制彗星头部（发光核心）- 增强版，更炫酷
        const glowSize = comet.radius * 6 * comet.glowIntensity
        
        // 外层大光晕
        const outerGlow = ctx.createRadialGradient(
          comet.x, comet.y, 0,
          comet.x, comet.y, glowSize
        )
        outerGlow.addColorStop(0, `rgba(0, 224, 107, ${comet.opacity * 0.3})`)
        outerGlow.addColorStop(0.3, `rgba(0, 194, 158, ${comet.opacity * 0.2})`)
        outerGlow.addColorStop(0.6, `rgba(0, 169, 176, ${comet.opacity * 0.1})`)
        outerGlow.addColorStop(1, 'rgba(0, 169, 176, 0)')

        ctx.beginPath()
        ctx.arc(comet.x, comet.y, glowSize, 0, Math.PI * 2)
        ctx.fillStyle = outerGlow
        ctx.fill()

        // 中层光晕
        const midGlow = ctx.createRadialGradient(
          comet.x, comet.y, 0,
          comet.x, comet.y, comet.radius * 4
        )
        midGlow.addColorStop(0, `rgba(255, 255, 255, ${comet.opacity})`)
        midGlow.addColorStop(0.2, `rgba(0, 224, 107, ${comet.opacity * 0.95})`)
        midGlow.addColorStop(0.5, `rgba(0, 194, 158, ${comet.opacity * 0.6})`)
        midGlow.addColorStop(1, 'rgba(0, 169, 176, 0)')

        ctx.beginPath()
        ctx.arc(comet.x, comet.y, comet.radius * 4, 0, Math.PI * 2)
        ctx.fillStyle = midGlow
        ctx.fill()

        // 核心亮点
        ctx.beginPath()
        ctx.arc(comet.x, comet.y, comet.radius * 1.5, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 224, 107, ${comet.opacity})`
        ctx.fill()

        // 最亮核心
        ctx.beginPath()
        ctx.arc(comet.x, comet.y, comet.radius * 0.6, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${comet.opacity})`
        ctx.fill()

        // 偶尔产生粒子爆炸效果
        if (Math.random() < 0.02 && comet.life % 10 === 0) {
          for (let i = 0; i < 3; i++) {
            particlesRef.current.push(createParticle(comet.x, comet.y))
          }
        }

        // 检查是否需要重置彗星
        if (comet.x < -100 || comet.x > width + 100 || 
            comet.y > height + 100 || comet.life > comet.maxLife) {
          cometsRef.current[index] = createComet(width, height)
        }
      })

      // 更新和绘制粒子
      particlesRef.current = particlesRef.current.filter((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy
        particle.life++
        particle.vx *= 0.98
        particle.vy *= 0.98

        const lifeProgress = particle.life / particle.maxLife
        const opacity = (1 - lifeProgress) * 0.8
        const size = particle.size * (1 - lifeProgress * 0.5)

        // 绘制粒子
        const particleGradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, size * 2
        )
        particleGradient.addColorStop(0, `rgba(0, 224, 107, ${opacity})`)
        particleGradient.addColorStop(1, 'rgba(0, 224, 107, 0)')

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, size * 2, 0, Math.PI * 2)
        ctx.fillStyle = particleGradient
        ctx.fill()

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 224, 107, ${opacity})`
        ctx.fill()

        return particle.life < particle.maxLife && 
               particle.x > -50 && particle.x < width + 50 &&
               particle.y > -50 && particle.y < height + 50
      })

      // 随机添加新彗星
      if (frameCount % 50 === 0 && cometsRef.current.length < 10 && Math.random() > 0.4) {
        cometsRef.current.push(createComet(width, height))
      }

      // 绘制网格连接线 - 增强版，更明显
      const gridParticles = cometsRef.current.filter(c => c.life > 10)
      gridParticles.forEach((comet, i) => {
        gridParticles.slice(i + 1).forEach((other) => {
          const dx = other.x - comet.x
          const dy = other.y - comet.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 250) {
            const opacity = (1 - dist / 250) * 0.15
            const gradient = ctx.createLinearGradient(comet.x, comet.y, other.x, other.y)
            gradient.addColorStop(0, `rgba(0, 224, 107, ${opacity})`)
            gradient.addColorStop(0.5, `rgba(0, 194, 158, ${opacity * 0.8})`)
            gradient.addColorStop(1, `rgba(0, 169, 176, ${opacity})`)
            
            ctx.beginPath()
            ctx.moveTo(comet.x, comet.y)
            ctx.lineTo(other.x, other.y)
            ctx.strokeStyle = gradient
            ctx.lineWidth = 1
            ctx.stroke()
          }
        })
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', init)
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
      style={{ pointerEvents: 'none' }}
    />
  )
}
