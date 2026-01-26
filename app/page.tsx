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
  Briefcase
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

  // 核心服务 - 4个
  const products = [
    {
      icon: Target,
      title: '品牌与市场',
      description: '基于公开数据、社交声量与行业报告，快速建立目标区域的机会图谱和品牌定位建议',
      color: 'bg-[#00E06B]',
      category: '市场洞察'
    },
    {
      icon: Users,
      title: '获客与沟通',
      description: '多语种外联、站内外客服与社媒私信统一由智能体协同处理，保证语气统一、合规可控',
      color: 'bg-[#00C29E]',
      category: '智能拓客'
    },
    {
      icon: Sparkles,
      title: '实时看板',
      description: '一眼看到每个市场的线索、转化与风险提示，24/7智能体在线',
      color: 'bg-[#00A9B0]',
      category: '数据协同'
    },
    {
      icon: Rocket,
      title: '适用场景',
      description: '适用于 B2B SaaS、跨境电商与高客单制造企业的全球化拓展',
      color: 'bg-[#00E06B]',
      category: '行业应用'
    }
  ]

  const stats = [
    { number: '2.1x', label: '线索转化效率提升', icon: Target },
    { number: '4-8周', label: '典型方案落地周期', icon: Rocket },
    { number: '30-40%', label: '节省一线人力成本', icon: Users },
    { number: '100+', label: '支持多语种沟通', icon: Sparkles }
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
            ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-[#00E06B]/10' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img src="/logo.png" alt="Molycure Logo" className="w-10 h-10 rounded-lg" />
              <div className="hidden sm:block">
                <div className="text-lg font-bold text-black">Molycure</div>
                <div className="text-xs text-[#00C29E]">魔力奇</div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-[#555555] hover:text-[#00E06B] transition-colors font-medium">
                首页
              </a>
              <a href="#products" className="text-[#555555] hover:text-[#00E06B] transition-colors font-medium">
                产品方案
              </a>
              <a href="#about" className="text-[#555555] hover:text-[#00E06B] transition-colors font-medium">
                关于我们
              </a>
              <a href="#contact" className="text-[#555555] hover:text-[#00E06B] transition-colors font-medium">
                联系我们
              </a>
              <a href="#contact" className="bg-gradient-to-r from-[#00E06B] to-[#00C29E] text-white px-6 py-2 rounded-lg hover:shadow-lg hover:shadow-[#00E06B]/30 transition-all duration-300 hover:scale-105">
                联系我们
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg text-black hover:bg-[#00E06B]/10 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-[#E0E0E0] animate-slide-up">
            <div className="px-4 py-4 space-y-3">
              <a href="#home" className="block py-2 text-[#555555] hover:text-[#00E06B] transition-colors">
                首页
              </a>
              <a href="#products" className="block py-2 text-[#555555] hover:text-[#00E06B] transition-colors">
                产品方案
              </a>
              <a href="#about" className="block py-2 text-[#555555] hover:text-[#00E06B] transition-colors">
                关于我们
              </a>
              <a href="#contact" className="block py-2 text-[#555555] hover:text-[#00E06B] transition-colors">
                联系我们
              </a>
              <a href="#contact" className="block w-full text-center bg-gradient-to-r from-[#00E06B] to-[#00C29E] text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all">
                联系我们
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto text-center w-full">
          <div className="animate-fade-in">
            <div className="mb-8">
              {/* 中文标语 - 流光效果 */}
              <div className="text-xl md:text-2xl font-medium tracking-wide mb-3">
                <span className="bg-gradient-to-r from-[#555555] via-[#00E06B] to-[#555555] bg-[length:200%_auto] animate-shimmer bg-clip-text text-transparent">
                  新加坡 · AI智能体出海
                </span>
              </div>
              {/* 英文标语 - 流光效果 */}
              <div className="text-sm md:text-base tracking-wider">
                <span className="bg-gradient-to-r from-[#555555] via-[#00C29E] to-[#555555] bg-[length:200%_auto] animate-shimmer bg-clip-text text-transparent font-medium" style={{ animationDelay: '1.5s' }}>
                  AI Agents for Global Expansion
                </span>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black mb-6 leading-tight">
              魔力奇 · AI智能体
              <span className="bg-gradient-to-r from-[#00E06B] via-[#00C29E] to-[#00A9B0] bg-clip-text text-transparent">
                × 全球出海
              </span>
            </h1>
            <p className="text-lg md:text-xl text-[#555555] mb-12 max-w-4xl mx-auto leading-relaxed">
              基于AI智能体，助力企业高效出海
              <br className="hidden md:block" />
              依托大模型与智能体技术，提供市场洞察、智能拓客、多语种沟通、合规风控与运营协同一站式解决方案
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#contact" className="group bg-gradient-to-r from-[#00E06B] to-[#00C29E] text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl hover:shadow-[#00E06B]/30 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                了解解决方案
                <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a href="#products" className="px-8 py-4 rounded-xl text-lg font-semibold border-2 border-[#E0E0E0] text-[#555555] hover:border-[#00E06B] hover:text-[#00E06B] transition-all duration-300">
                核心服务
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-20 animate-slide-up">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#E0E0E0] hover:border-[#00E06B]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#00E06B]/10"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-[#00E06B]" />
                <div className="text-3xl md:text-4xl font-bold text-black mb-2">
                  {stat.number}
                </div>
                <div className="text-[#555555] text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-white/50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              一站式出海服务
            </h2>
            <p className="text-xl text-[#555555] max-w-3xl mx-auto">
              从市场洞察到运营协同，用一套智能体系统跑通出海全流程
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[#E0E0E0] hover:border-[#00E06B]/50 transition-all duration-300 hover:-translate-y-2 cursor-pointer hover:shadow-xl hover:shadow-[#00E06B]/10"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`${product.color} w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <product.icon className="text-white" size={28} />
                  </div>
                  <span className="text-xs text-[#555555] bg-[#E9E9E9] px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-[#00E06B] transition-colors">
                  {product.title}
                </h3>
                <p className="text-[#555555] leading-relaxed mb-4">
                  {product.description}
                </p>
                
                <div className="mt-4 flex items-center text-[#00E06B] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  了解详情
                  <ChevronRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

          {/* 核心优势 */}
          <div className="mt-20 bg-white/80 rounded-3xl p-8 md:p-12 border border-[#E0E0E0]">
            <h3 className="text-2xl md:text-3xl font-bold text-black text-center mb-10">
              我们关注每一次出海尝试的实际结果，用数据说话
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: '🤖', label: 'AI智能体技术' },
                { icon: '🌍', label: '全球市场覆盖' },
                { icon: '🚀', label: '高效低成本' },
                { icon: '💼', label: '数据驱动决策' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <div className="text-black font-semibold">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                关于魔力奇
              </h2>
              <p className="text-lg text-[#555555] mb-6 leading-relaxed">
                魔力奇是一家基于人工智能的智能体项目，专注帮助企业高效出海。我们相信，像农夫山泉强调"水源地"，魔力奇强调的是"数据与智能体"。
              </p>
              <p className="text-lg text-[#555555] mb-6 leading-relaxed">
                <span className="text-black font-medium">数据驱动决策：</span>我们以真实数据驱动决策，用可解释的智能体编排替代零散工具，帮助团队看清每一次投放、每一封邮件、每一通外呼背后的效果。
              </p>
              <p className="text-lg text-[#555555] mb-8 leading-relaxed">
                <span className="text-black font-medium">全球化视野：</span>依托大模型与智能体技术，为企业提供市场洞察、智能拓客、多语种沟通、合规风控与运营协同，助力企业低成本进入全球市场，提升获客效率与转化效果。
              </p>
              <a href="#contact" className="inline-block bg-gradient-to-r from-[#00E06B] to-[#00C29E] text-white px-8 py-3 rounded-xl font-semibold hover:shadow-xl hover:shadow-[#00E06B]/30 transition-all duration-300 hover:scale-105">
                了解更多
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#E0E0E0] hover:border-[#00E06B] transition-all">
                <div className="text-black font-bold text-3xl mb-2">2.1x</div>
                <div className="text-[#555555]">转化效率提升</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#E0E0E0] hover:border-[#00E06B] transition-all">
                <div className="text-black font-bold text-3xl mb-2">4-8周</div>
                <div className="text-[#555555]">方案落地周期</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#E0E0E0] hover:border-[#00E06B] transition-all">
                <div className="text-black font-bold text-3xl mb-2">30-40%</div>
                <div className="text-[#555555]">节省人力成本</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#E0E0E0] hover:border-[#00E06B] transition-all">
                <div className="text-black font-bold text-3xl mb-2">100+</div>
                <div className="text-[#555555]">多语种支持</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            开启全球化之旅
          </h2>
          <p className="text-xl text-[#555555] mb-12">
            让我们一起探讨如何通过AI智能体助力您的企业高效出海
          </p>
          <div className="bg-gradient-to-br from-[#00E06B] to-[#00A9B0] rounded-3xl p-8 md:p-12 text-white shadow-2xl shadow-[#00E06B]/20">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">查看典型出海方案</h3>
              <p className="text-white/90 text-lg mb-6">适用于 B2B SaaS、跨境电商与高客单制造企业</p>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Target className="w-5 h-5" />
                    <h4 className="text-lg font-bold">市场洞察</h4>
                  </div>
                  <p className="text-white/90 text-sm">基于数据分析快速建立目标区域机会图谱</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Users className="w-5 h-5" />
                    <h4 className="text-lg font-bold">智能拓客</h4>
                  </div>
                  <p className="text-white/90 text-sm">多语种智能体协同处理客户沟通</p>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-white/20 text-center">
              <p className="text-white/90 mb-4">📍 新加坡 · AI智能体出海解决方案</p>
              <p className="text-sm text-white/80">24/7 智能体在线 · 实时看板监控</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-[#555555] py-12 px-4 sm:px-6 lg:px-8 border-t border-[#E0E0E0]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src="/logo.png" alt="Molycure Logo" className="w-10 h-10 rounded-lg" />
                <div>
                  <div className="text-black font-bold">Molycure</div>
                  <div className="text-xs text-[#555555]">魔力奇</div>
                </div>
              </div>
              <p className="text-sm text-[#555555]">
                AI智能体全球出海解决方案
                <br />
                助力企业高效拓展全球市场
              </p>
            </div>
            <div>
              <h4 className="text-black font-semibold mb-4">核心服务</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#products" className="hover:text-[#00E06B] transition-colors">品牌与市场</a></li>
                <li><a href="#products" className="hover:text-[#00E06B] transition-colors">获客与沟通</a></li>
                <li><a href="#products" className="hover:text-[#00E06B] transition-colors">实时看板</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-black font-semibold mb-4">适用场景</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#products" className="hover:text-[#00E06B] transition-colors">B2B SaaS</a></li>
                <li><a href="#products" className="hover:text-[#00E06B] transition-colors">跨境电商</a></li>
                <li><a href="#products" className="hover:text-[#00E06B] transition-colors">高客单制造</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-black font-semibold mb-4">关于我们</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="hover:text-[#00E06B] transition-colors">公司介绍</a></li>
                <li><a href="#contact" className="hover:text-[#00E06B] transition-colors">联系我们</a></li>
                <li><a href="https://github.com/htzlai/molycure.tech-ai-site" target="_blank" rel="noopener noreferrer" className="hover:text-[#00E06B] transition-colors">GitHub</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#E0E0E0] pt-8 text-center text-sm">
            <p className="text-[#555555]">© 2026 Molycure. All rights reserved. 新加坡 · AI智能体出海</p>
          </div>
        </div>
      </footer>
      </div>
    </div>
  )
}
