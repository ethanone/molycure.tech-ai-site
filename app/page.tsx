'use client'

import { useState, useEffect } from 'react'
import { 
  Menu, 
  X, 
  ChevronRight,
  Server,
  Cpu,
  Network,
  GraduationCap,
  Stethoscope,
  Zap,
  Users,
  Sparkles,
  Target,
  Rocket,
  Mail,
  Phone,
  MapPin
} from 'lucide-react'
import CometBackground from '@/components/CometBackground'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 核心产品与方案 - 6个
  const products = [
    {
      icon: Server,
      title: 'AI服务器',
      description: '支持国产CPU及Intel、AMD多架构，DDR5/DDR4全规格存储适配，满足信创与高性能计算需求',
      color: 'bg-blue-500',
      category: '硬件产品'
    },
    {
      icon: Cpu,
      title: 'GPU服务器',
      description: '专为AI训练与推理优化，支持算力密集型应用，提供强劲的深度学习计算能力',
      color: 'bg-purple-500',
      category: '硬件产品'
    },
    {
      icon: Network,
      title: '智能交换机',
      description: '高性能网络设备，构建稳定可靠的数据中心网络基础设施',
      color: 'bg-cyan-500',
      category: '硬件产品'
    },
    {
      icon: GraduationCap,
      title: '智慧教育',
      description: '融合AI技术打造智慧校园、智能教学解决方案，助力教育数字化转型',
      color: 'bg-green-500',
      category: '行业方案'
    },
    {
      icon: Stethoscope,
      title: '智能医疗',
      description: '智能诊断、数据分析等医疗AI应用，赋能医疗行业智能化升级',
      color: 'bg-red-500',
      category: '行业方案'
    },
    {
      icon: Zap,
      title: '电力通信智能化',
      description: '电力运维智能化、通信网络优化，精准匹配行业应用场景',
      color: 'bg-orange-500',
      category: '行业方案'
    }
  ]

  const stats = [
    { number: '2017', label: '成立年份', icon: Target },
    { number: '500+', label: '服务客户', icon: Rocket },
    { number: '4+', label: '行业深耕', icon: Users },
    { number: '24/7', label: '技术支持', icon: Sparkles }
  ]

  return (
    <div className="min-h-screen relative">
      {/* 彗星动态背景 */}
      <CometBackground />
      
      {/* 内容层 */}
      <div className="relative z-10 min-h-screen">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-gray-900/95 backdrop-blur-md shadow-lg shadow-blue-500/10' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/30">
                <span className="text-white font-bold text-xl">科</span>
              </div>
              <div className="hidden sm:block">
                <div className="text-lg font-bold text-white">Coray Tech</div>
                <div className="text-xs text-blue-300">科瑞时代科技</div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-200 hover:text-blue-400 transition-colors font-medium">
                首页
              </a>
              <a href="#products" className="text-gray-200 hover:text-blue-400 transition-colors font-medium">
                产品方案
              </a>
              <a href="#about" className="text-gray-200 hover:text-blue-400 transition-colors font-medium">
                关于我们
              </a>
              <a href="#contact" className="text-gray-200 hover:text-blue-400 transition-colors font-medium">
                联系我们
              </a>
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105">
                商务合作
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-700 animate-slide-up">
            <div className="px-4 py-4 space-y-3">
              <a href="#home" className="block py-2 text-gray-200 hover:text-blue-400 transition-colors">
                首页
              </a>
              <a href="#products" className="block py-2 text-gray-200 hover:text-blue-400 transition-colors">
                产品方案
              </a>
              <a href="#about" className="block py-2 text-gray-200 hover:text-blue-400 transition-colors">
                关于我们
              </a>
              <a href="#contact" className="block py-2 text-gray-200 hover:text-blue-400 transition-colors">
                联系我们
              </a>
              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all">
                商务合作
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto text-center w-full">
          <div className="animate-fade-in">
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30">
              <span className="text-blue-300 text-sm font-medium">🚀 硬件筑基 · 智能赋能 · 让AI落地每一个行业场景</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              AI+硬件集成
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                创新科技企业
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              以计算机硬件与网络设备为核心根基，深度赋能教育、医疗、电力、通信等行业数字化转型
              <br className="hidden md:block" />
              提供"硬件选型-软件适配-方案设计-部署实施"全链条智能应用解决方案
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="mailto:info@coray.tech" className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                项目咨询
                <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a href="#products" className="px-8 py-4 rounded-xl text-lg font-semibold border-2 border-gray-500 text-gray-200 hover:border-blue-500 hover:text-blue-400 transition-all duration-300">
                了解产品
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-20 animate-slide-up">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-gray-900/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-blue-400" />
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-gray-900/80 to-gray-900/90">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              核心产品与方案
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              全场景硬件矩阵 + 行业AI落地，为您提供端到端的智能化解决方案
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 cursor-pointer hover:shadow-xl hover:shadow-blue-500/10"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`${product.color} w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <product.icon className="text-white" size={28} />
                  </div>
                  <span className="text-xs text-gray-500 bg-gray-700/50 px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {product.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {product.description}
                </p>
                <div className="mt-4 flex items-center text-blue-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  了解详情
                  <ChevronRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

          {/* 服务流程 */}
          <div className="mt-20 bg-gray-800/30 rounded-3xl p-8 md:p-12 border border-gray-700/50">
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">
              全链条服务流程
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['硬件选型', '软件适配', '方案设计', '部署实施'].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {index + 1}
                  </div>
                  <div className="text-white font-semibold">{step}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/90">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                关于科瑞时代
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                成都科瑞时代科技有限公司（2017年成立），是专注于<span className="text-blue-400 font-semibold">AI+硬件集成</span>的创新科技企业。以计算机硬件与网络设备为核心根基，深度赋能教育、医疗、电力、通信等行业数字化转型。
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                <span className="text-purple-400 font-semibold">专业团队支撑：</span>核心成员具备多年硬件架构设计与行业AI方案落地经验，精通多架构硬件优化、智能系统协同调试，深度理解本地行业需求，提供全流程闭环服务。
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                <span className="text-cyan-400 font-semibold">立足本地，服务西南。</span>科瑞时代以可靠品质与高效响应赢得行业认可，未来将持续深耕AI与数字化转型融合创新，成为区域行业智能化升级的可靠伙伴。
              </p>
              <a href="mailto:dennis.y@coray.tech" className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105">
                商务合作
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all">
                <div className="text-blue-400 font-bold text-3xl mb-2">8年+</div>
                <div className="text-gray-400">行业深耕</div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all">
                <div className="text-purple-400 font-bold text-3xl mb-2">多架构</div>
                <div className="text-gray-400">硬件支持</div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-green-500/50 transition-all">
                <div className="text-green-400 font-bold text-3xl mb-2">4+行业</div>
                <div className="text-gray-400">深度覆盖</div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-orange-500/50 transition-all">
                <div className="text-orange-400 font-bold text-3xl mb-2">西南</div>
                <div className="text-gray-400">区域服务</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/95">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            开启合作之旅
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            让我们一起探讨如何通过AI+硬件集成推动您的业务智能化升级
          </p>
          <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl p-8 md:p-12 text-white shadow-2xl shadow-blue-500/20">
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                  <Mail className="w-5 h-5" />
                  <h3 className="text-lg font-bold">售后服务</h3>
                </div>
                <a href="mailto:service@coray.tech" className="text-blue-200 hover:text-white transition-colors">
                  service@coray.tech
                </a>
              </div>
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                  <Phone className="w-5 h-5" />
                  <h3 className="text-lg font-bold">项目咨询</h3>
                </div>
                <a href="mailto:info@coray.tech" className="text-blue-200 hover:text-white transition-colors">
                  info@coray.tech
                </a>
              </div>
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                  <MapPin className="w-5 h-5" />
                  <h3 className="text-lg font-bold">商务合作</h3>
                </div>
                <a href="mailto:dennis.y@coray.tech" className="text-blue-200 hover:text-white transition-colors">
                  dennis.y@coray.tech
                </a>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-white/20 text-center">
              <p className="text-blue-100">📍 成都市高新区 · 立足本地，服务西南</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">科</span>
                </div>
                <div>
                  <div className="text-white font-bold">Coray Tech</div>
                  <div className="text-xs text-gray-500">科瑞时代科技</div>
                </div>
              </div>
              <p className="text-sm text-gray-500">
                硬件筑基 · 智能赋能
                <br />
                让AI落地每一个行业场景
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">硬件产品</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#products" className="hover:text-blue-400 transition-colors">AI服务器</a></li>
                <li><a href="#products" className="hover:text-blue-400 transition-colors">GPU服务器</a></li>
                <li><a href="#products" className="hover:text-blue-400 transition-colors">智能交换机</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">行业方案</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#products" className="hover:text-blue-400 transition-colors">智慧教育</a></li>
                <li><a href="#products" className="hover:text-blue-400 transition-colors">智能医疗</a></li>
                <li><a href="#products" className="hover:text-blue-400 transition-colors">电力通信智能化</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">联系我们</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="mailto:service@coray.tech" className="hover:text-blue-400 transition-colors">售后服务</a></li>
                <li><a href="mailto:info@coray.tech" className="hover:text-blue-400 transition-colors">项目咨询</a></li>
                <li><a href="mailto:dennis.y@coray.tech" className="hover:text-blue-400 transition-colors">商务合作</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p className="text-gray-500">© 2017-2026 Chengdu Coray Times Tech Co.,Ltd. All rights reserved.</p>
            <p className="text-gray-600 mt-2">成都科瑞时代科技有限公司</p>
          </div>
        </div>
      </footer>
      </div>
    </div>
  )
}
