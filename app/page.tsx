'use client'

import { useState, useEffect } from 'react'
import { 
  Menu, 
  X, 
  ChevronRight,
  Brain,
  Cloud,
  Database,
  Shield,
  Zap,
  Users,
  Cpu,
  BarChart,
  Globe,
  Sparkles,
  Target,
  Rocket
} from 'lucide-react'
import ParticleBackground from '@/components/ParticleBackground'

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

  const services = [
    {
      icon: Brain,
      title: '人工智能解决方案',
      description: '提供先进的AI算法和深度学习模型，助力企业智能化转型',
      color: 'bg-blue-500'
    },
    {
      icon: Cloud,
      title: '云计算服务',
      description: '弹性可扩展的云基础设施，安全可靠的云端部署方案',
      color: 'bg-purple-500'
    },
    {
      icon: Database,
      title: '大数据分析',
      description: '海量数据处理与分析，挖掘数据价值，驱动业务决策',
      color: 'bg-green-500'
    },
    {
      icon: Shield,
      title: '信息安全防护',
      description: '全方位的网络安全解决方案，保护企业数据资产安全',
      color: 'bg-red-500'
    },
    {
      icon: Zap,
      title: '智能自动化',
      description: '流程自动化与智能优化，提升运营效率降低成本',
      color: 'bg-yellow-500'
    },
    {
      icon: Users,
      title: '企业数字化转型',
      description: '端到端的数字化解决方案，重塑企业竞争力',
      color: 'bg-indigo-500'
    },
    {
      icon: Cpu,
      title: '物联网平台',
      description: '智能设备连接与管理，构建万物互联的智慧生态',
      color: 'bg-pink-500'
    },
    {
      icon: BarChart,
      title: '商业智能分析',
      description: '可视化数据分析平台，实时洞察业务运营状况',
      color: 'bg-orange-500'
    },
    {
      icon: Globe,
      title: '跨境技术服务',
      description: '全球化技术支持，助力企业拓展国际市场',
      color: 'bg-teal-500'
    }
  ]

  const stats = [
    { number: '500+', label: '服务客户', icon: Target },
    { number: '1000+', label: '成功案例', icon: Rocket },
    { number: '50+', label: '技术专家', icon: Users },
    { number: '99.9%', label: '客户满意度', icon: Sparkles }
  ]

  return (
    <div className="min-h-screen relative">
      {/* 动态粒子背景 */}
      <ParticleBackground />
      
      {/* 内容层 */}
      <div className="relative z-10 min-h-screen bg-gradient-to-b from-transparent via-transparent to-gray-50/95">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-md' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">科</span>
              </div>
              <div className="hidden sm:block">
                <div className={`text-lg font-bold transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`}>科瑞时代</div>
                <div className={`text-xs transition-colors ${isScrolled ? 'text-gray-500' : 'text-gray-200'}`}>CDKRSD Technology</div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-blue-400 transition-colors font-medium`}>
                首页
              </a>
              <a href="#services" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-blue-400 transition-colors font-medium`}>
                服务
              </a>
              <a href="#about" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-blue-400 transition-colors font-medium`}>
                关于我们
              </a>
              <a href="#contact" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-blue-400 transition-colors font-medium`}>
                联系我们
              </a>
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
                开始合作
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 animate-slide-up">
            <div className="px-4 py-4 space-y-3">
              <a href="#home" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">
                首页
              </a>
              <a href="#services" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">
                服务
              </a>
              <a href="#about" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">
                关于我们
              </a>
              <a href="#contact" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">
                联系我们
              </a>
              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all">
                开始合作
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              智能科技，创新未来
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto drop-shadow-md">
              专业的技术团队，前沿的AI解决方案，助力企业数字化转型
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-2">
                立即咨询
                <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button className="px-8 py-4 rounded-xl text-lg font-semibold border-2 border-gray-300 hover:border-blue-500 hover:text-blue-600 transition-all duration-300">
                了解更多
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-20 animate-slide-up">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-blue-500" />
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              我们的服务
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              为您提供全方位的智能科技解决方案
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-gray-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`${service.color} w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  了解详情
                  <ChevronRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                关于科瑞时代
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                成都科瑞时代科技有限公司成立于2020年，是一家专注于人工智能、大数据、云计算等前沿科技领域的创新型企业。
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                我们拥有一支由资深技术专家组成的研发团队，致力于为企业提供最前沿的技术解决方案，帮助客户实现数字化转型，提升核心竞争力。
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                公司秉承"科技创新，服务至上"的理念，已为500多家企业提供了专业的技术服务，涵盖金融、医疗、教育、制造等多个行业。
              </p>
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105">
                加入我们
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-blue-600 font-bold text-3xl mb-2">4年+</div>
                <div className="text-gray-600">行业经验</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-purple-600 font-bold text-3xl mb-2">20+</div>
                <div className="text-gray-600">技术专利</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-green-600 font-bold text-3xl mb-2">100+</div>
                <div className="text-gray-600">合作伙伴</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-orange-600 font-bold text-3xl mb-2">24/7</div>
                <div className="text-gray-600">技术支持</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            开启合作之旅
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            让我们一起探讨如何通过科技创新推动您的业务发展
          </p>
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-12 text-white shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-2xl font-bold mb-4">联系方式</h3>
                <div className="space-y-3">
                  <p>📧 邮箱: contact@cdkrsd.com</p>
                  <p>📞 电话: 028-8888-8888</p>
                  <p>📍 地址: 成都市高新区天府软件园</p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">工作时间</h3>
                <div className="space-y-3">
                  <p>周一至周五: 9:00 - 18:00</p>
                  <p>周六至周日: 预约服务</p>
                  <p>24小时在线技术支持</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">科</span>
                </div>
                <div>
                  <div className="text-white font-bold">科瑞时代</div>
                  <div className="text-xs text-gray-400">CDKRSD Tech</div>
                </div>
              </div>
              <p className="text-sm text-gray-400">
                智能科技，创新未来
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">服务</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">人工智能</a></li>
                <li><a href="#" className="hover:text-white transition-colors">云计算</a></li>
                <li><a href="#" className="hover:text-white transition-colors">大数据</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">公司</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">关于我们</a></li>
                <li><a href="#" className="hover:text-white transition-colors">新闻动态</a></li>
                <li><a href="#" className="hover:text-white transition-colors">招贤纳士</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">法律</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">隐私政策</a></li>
                <li><a href="#" className="hover:text-white transition-colors">服务条款</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie政策</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>© 2026 成都科瑞时代科技有限公司. 保留所有权利.</p>
          </div>
        </div>
      </footer>
      </div>
    </div>
  )
}
