"use client";

import { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Sparkles,
  Brain,
  Globe,
  TrendingUp,
  Users,
  Languages,
  ShieldCheck,
  Workflow,
  Zap,
  Target,
  Rocket,
  CheckCircle2,
} from "lucide-react";
import storiesData from "@/data/stories.json";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: {
    duration: 0.7,
    ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
  },
  viewport: { once: true, margin: "-80px" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const Section = memo(
  ({
    children,
    className = "",
    id,
  }: {
    children: React.ReactNode;
    className?: string;
    id?: string;
  }) => (
    <section
      id={id}
      className={`py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 lg:px-14 ${className}`}
    >
      <div className="container mx-auto max-w-7xl">{children}</div>
    </section>
  )
);
Section.displayName = "Section";

const LanguageToggle = memo(() => {
  const { language, toggleLanguage } = useLanguage();
  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-blue-100 shadow-sm hover:shadow-md transition-all text-xs sm:text-sm"
      aria-label="switch language"
    >
      <Globe className="w-4 h-4 text-blue-600" />
      <span className="font-semibold text-gray-700">
        {language === "zh" ? "EN" : "中文"}
      </span>
    </button>
  );
});
LanguageToggle.displayName = "LanguageToggle";

const Header = memo(() => {
  const { language } = useLanguage();
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-blue-50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-10 lg:px-14 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl bg-black/5 border border-blue-100 shadow-sm overflow-hidden flex items-center justify-center">
            <Image
              src="/molycure-logo.png"
              alt="Molycure Logo"
              width={80}
              height={80}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-semibold text-gray-900">Molycure</span>
            <span className="text-[10px] sm:text-xs text-gray-500">
              {language === "zh"
                ? "新加坡 · AI智能体出海"
                : "Singapore · AI Agents for Global Growth"}
            </span>
          </div>
        </Link>
        <nav className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm font-medium text-gray-700">
          <Link href="#features" className="hover:text-blue-600">
            {language === "zh" ? "核心服务" : "Services"}
          </Link>
          <Link href="#how" className="hover:text-blue-600">
            {language === "zh" ? "合作流程" : "Process"}
          </Link>
          <Link href="#featured" className="hover:text-blue-600">
            {language === "zh" ? "解决方案" : "Solutions"}
          </Link>
          <Link
            href="/stories"
            className="hidden sm:inline-flex hover:text-blue-600"
          >
            {language === "zh" ? "成功案例" : "Case Studies"}
          </Link>
          <LanguageToggle />
        </nav>
      </div>
    </header>
  );
});
Header.displayName = "Header";

const Hero = memo(() => {
  const { language } = useLanguage();
  return (
    <Section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-teal-50 to-cyan-50 min-h-[80vh] flex items-center">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-10 top-10 w-64 h-64 bg-blue-200/50 rounded-full blur-3xl" />
        <div className="absolute right-0 bottom-0 w-72 h-72 bg-teal-200/60 rounded-full blur-3xl" />
        <div className="absolute left-1/4 bottom-10 text-8xl opacity-20">🤖</div>
        <div className="absolute right-16 top-16 text-7xl opacity-20">🌍</div>
      </div>
      <div className="relative grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.div
            {...fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-md border border-blue-100 mb-6"
          >
            <Brain className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-gray-700">
              {language === "zh" ? "魔力奇 · AI智能体 x 全球出海" : "Molycure · AI Agents x Global Expansion"}
            </span>
          </motion.div>
          <motion.h1
            {...fadeInUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 mb-6"
          >
            {language === "zh"
              ? "基于AI智能体，助力企业高效出海"
              : "AI-Powered Agents for Global Business Expansion"}
          </motion.h1>
          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.1 }}
            className="text-lg sm:text-xl text-gray-700 max-w-2xl mb-8 leading-relaxed"
          >
            {language === "zh"
              ? "魔力奇是一家基于人工智能的智能体项目，专注帮助企业高效出海。依托大模型与智能体技术，我们为企业提供一站式出海解决方案，包括市场洞察、智能拓客、多语种沟通、合规风控与运营协同，助力企业低成本进入全球市场，提升获客效率与转化效果。"
              : "Molycure is an AI-powered agent platform based in Singapore, dedicated to helping businesses expand globally. Leveraging large language models and intelligent agents, we provide comprehensive global expansion solutions including market insights, intelligent customer acquisition, multilingual communication, compliance & risk control, and operational collaboration."}
          </motion.p>
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              asChild
              size="lg"
              className="px-8 py-6 text-base bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white shadow-lg"
            >
              <Link href="/stories">
                {language === "zh" ? "了解解决方案" : "Explore Solutions"}
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="px-8 py-6 text-base border-blue-200 text-blue-600 hover:bg-blue-50"
            >
              <Link href="#features">
                {language === "zh" ? "核心服务" : "Core Services"}
              </Link>
            </Button>
          </motion.div>
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4 text-sm text-gray-600"
          >
            <span className="inline-flex items-center gap-2 px-3 py-2 bg-white border border-blue-100 rounded-full shadow-sm">
              <Brain className="w-4 h-4 text-blue-600" />
              {language === "zh" ? "AI智能体技术" : "AI Agent Technology"}
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-2 bg-white border border-teal-100 rounded-full shadow-sm">
              <Globe className="w-4 h-4 text-teal-600" />
              {language === "zh" ? "全球市场覆盖" : "Global Market Reach"}
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-2 bg-white border border-cyan-100 rounded-full shadow-sm">
              <Zap className="w-4 h-4 text-cyan-600" />
              {language === "zh" ? "高效低成本" : "Efficient & Cost-Effective"}
            </span>
          </motion.div>
        </div>
        <motion.div
          {...fadeInUp}
          className="relative bg-white border border-blue-100 shadow-xl rounded-3xl p-8"
        >
          <div className="absolute -top-6 -left-6 text-5xl">🚀</div>
          <div className="absolute -bottom-6 -right-6 text-5xl">💼</div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "📊", title: language === "zh" ? "市场洞察" : "Market Insights", desc: language === "zh" ? "深度分析全球市场趋势" : "Deep market analysis" },
              { icon: "🎯", title: language === "zh" ? "智能拓客" : "Smart Acquisition", desc: language === "zh" ? "AI驱动的客户获取" : "AI-driven customer acquisition" },
              { icon: "🌐", title: language === "zh" ? "多语种沟通" : "Multilingual", desc: language === "zh" ? "支持全球语言交流" : "Global language support" },
              { icon: "🛡️", title: language === "zh" ? "合规风控" : "Compliance", desc: language === "zh" ? "确保合规运营" : "Ensure compliance" },
            ].map((item, idx) => (
              <Card
                key={idx}
                className="border-0 bg-gradient-to-br from-white to-blue-50 shadow-md hover:shadow-lg transition-all"
              >
                <CardContent className="p-4">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <div className="text-sm text-blue-600 font-semibold">
                    {item.title}
                  </div>
                  <p className="text-xs text-gray-600 mt-2 line-clamp-2">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
});
Hero.displayName = "Hero";

const Categories = memo(() => {
  const { language } = useLanguage();
  const services = [
    { name: language === "zh" ? "市场洞察" : "Market Insights", icon: TrendingUp, border: "border-blue-100", bg: "bg-blue-50", iconBg: "bg-blue-100", iconColor: "text-blue-600" },
    { name: language === "zh" ? "智能拓客" : "Smart Acquisition", icon: Target, border: "border-teal-100", bg: "bg-teal-50", iconBg: "bg-teal-100", iconColor: "text-teal-600" },
    { name: language === "zh" ? "多语种沟通" : "Multilingual", icon: Languages, border: "border-cyan-100", bg: "bg-cyan-50", iconBg: "bg-cyan-100", iconColor: "text-cyan-600" },
    { name: language === "zh" ? "合规风控" : "Compliance", icon: ShieldCheck, border: "border-indigo-100", bg: "bg-indigo-50", iconBg: "bg-indigo-100", iconColor: "text-indigo-600" },
    { name: language === "zh" ? "运营协同" : "Operations", icon: Workflow, border: "border-sky-100", bg: "bg-sky-50", iconBg: "bg-sky-100", iconColor: "text-sky-600" },
    { name: language === "zh" ? "AI智能体" : "AI Agents", icon: Brain, border: "border-blue-100", bg: "bg-blue-50", iconBg: "bg-blue-100", iconColor: "text-blue-600" },
  ];

  return (
    <Section id="categories" className="bg-white">
      <motion.div {...fadeInUp} className="text-center mb-12">
        <p className="text-sm font-semibold text-blue-600 mb-2">
          {language === "zh" ? "核心服务" : "Core Services"}
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          {language === "zh" ? "一站式全球出海解决方案" : "Comprehensive Global Expansion Solutions"}
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          {language === "zh"
            ? "从市场分析到客户获取，从多语言沟通到合规运营，我们提供全方位的智能出海服务。"
            : "From market analysis to customer acquisition, multilingual communication to compliance operations, we provide comprehensive intelligent global expansion services."}
        </p>
      </motion.div>
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-40px" }}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
      >
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <motion.div key={service.name} variants={fadeInUp}>
              <Card className={`${service.border} bg-gradient-to-br from-white ${service.bg} hover:shadow-lg transition-all h-full`}>
                <CardContent className="p-4 text-center flex flex-col items-center gap-3">
                  <div className={`w-12 h-12 rounded-2xl ${service.iconBg} flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${service.iconColor}`} />
                  </div>
                  <div className="text-sm font-semibold text-gray-800">{service.name}</div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
});
Categories.displayName = "Categories";

const FeaturedStories = memo(() => {
  const { language } = useLanguage();
  const solutions = [
    {
      id: "1",
      icon: "📊",
      title: language === "zh" ? "市场洞察分析" : "Market Intelligence",
      category: language === "zh" ? "数据分析" : "Data Analytics",
      summary: language === "zh" 
        ? "基于大模型深度分析全球市场趋势，识别商机与风险，为企业出海决策提供数据支撑。"
        : "Deep analysis of global market trends using large language models, identifying opportunities and risks to support global expansion decisions.",
    },
    {
      id: "2",
      icon: "🎯",
      title: language === "zh" ? "智能客户获取" : "Intelligent Customer Acquisition",
      category: language === "zh" ? "智能拓客" : "Smart Outreach",
      summary: language === "zh"
        ? "AI智能体自动识别潜在客户，个性化沟通策略，大幅提升获客效率与转化率。"
        : "AI agents automatically identify potential customers with personalized communication strategies, significantly improving acquisition efficiency and conversion rates.",
    },
    {
      id: "3",
      icon: "🌐",
      title: language === "zh" ? "多语种智能沟通" : "Multilingual Communication",
      category: language === "zh" ? "语言服务" : "Language Services",
      summary: language === "zh"
        ? "支持100+语言实时翻译与本地化沟通，打破语言壁垒，实现全球无障碍交流。"
        : "Support for 100+ languages with real-time translation and localized communication, breaking language barriers for seamless global interaction.",
    },
  ];

  return (
    <Section id="featured" className="bg-gradient-to-br from-blue-50 via-teal-50 to-white">
      <motion.div {...fadeInUp} className="text-center mb-12">
        <p className="text-sm font-semibold text-blue-600 mb-2">
          {language === "zh" ? "核心解决方案" : "Core Solutions"}
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          {language === "zh" ? "AI驱动的智能出海服务" : "AI-Powered Global Expansion Services"}
        </h2>
      </motion.div>
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-40px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {solutions.map((solution) => (
          <motion.div key={solution.id} variants={fadeInUp}>
            <Card className="h-full border-blue-100 bg-white shadow-md hover:shadow-xl transition-all">
              <CardHeader className="p-6 pb-3 flex items-center gap-3">
                <div className="text-4xl">{solution.icon}</div>
                <div>
                  <CardTitle className="text-xl text-gray-900">
                    {solution.title}
                  </CardTitle>
                  <p className="text-sm text-blue-600 font-semibold">
                    {solution.category}
                  </p>
                </div>
              </CardHeader>
              <CardContent className="px-6 pb-6">
                <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                  {solution.summary}
                </p>
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white"
                >
                  <Link href={`/stories/${solution.id}`}>
                    {language === "zh" ? "了解更多" : "Learn More"}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
});
FeaturedStories.displayName = "FeaturedStories";

const Features = memo(() => {
  const { language } = useLanguage();
  const list = [
    {
      icon: Brain,
      title: language === "zh" ? "AI智能体技术" : "AI Agent Technology",
      desc:
        language === "zh"
          ? "基于先进的大语言模型，构建智能体系统，实现自动化、智能化的业务处理与决策支持。"
          : "Built on advanced large language models, our agent system enables automated, intelligent business processing and decision support.",
    },
    {
      icon: Globe,
      title: language === "zh" ? "全球市场覆盖" : "Global Market Reach",
      desc:
        language === "zh"
          ? "支持全球200+国家和地区，深度理解不同市场的文化、法规与商业环境，助力企业精准出海。"
          : "Supporting 200+ countries and regions, with deep understanding of diverse market cultures, regulations, and business environments for precise global expansion.",
    },
    {
      icon: Zap,
      title: language === "zh" ? "高效低成本" : "Efficient & Cost-Effective",
      desc:
        language === "zh"
          ? "通过AI自动化大幅降低人力成本，提升运营效率，让中小企业也能轻松实现全球化布局。"
          : "Significantly reduce labor costs through AI automation, improving operational efficiency, enabling SMEs to easily achieve global expansion.",
    },
  ];

  return (
    <Section id="features" className="bg-white">
      <motion.div {...fadeInUp} className="text-center mb-12">
        <p className="text-sm font-semibold text-teal-600 mb-2">
          {language === "zh" ? "核心优势" : "Core Advantages"}
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          {language === "zh" ? "为什么选择魔力奇" : "Why Choose Molycure"}
        </h2>
      </motion.div>
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-40px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {list.map((item) => {
          const Icon = item.icon;
          return (
            <motion.div key={item.title} variants={fadeInUp}>
              <Card className="h-full border-teal-100 bg-gradient-to-br from-white to-teal-50/60 shadow-sm hover:shadow-lg transition-all">
                <CardContent className="p-6 flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-teal-100 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-teal-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">
                    {item.title}
                  </CardTitle>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
});
Features.displayName = "Features";

const HowTo = memo(() => {
  const { language } = useLanguage();
  const steps = [
    {
      title: language === "zh" ? "需求分析" : "Needs Analysis",
      desc:
        language === "zh"
          ? "深入了解您的业务目标、目标市场与出海需求，制定个性化的出海策略。"
          : "Deep understanding of your business goals, target markets, and expansion needs to develop personalized global expansion strategies.",
      icon: Target,
    },
    {
      title: language === "zh" ? "方案部署" : "Solution Deployment",
      desc:
        language === "zh"
          ? "快速部署AI智能体系统，配置市场洞察、拓客、沟通等核心功能模块。"
          : "Rapid deployment of AI agent systems, configuring core modules including market insights, customer acquisition, and communication.",
      icon: Rocket,
    },
    {
      title: language === "zh" ? "持续优化" : "Continuous Optimization",
      desc:
        language === "zh"
          ? "实时监控运营数据，AI智能体持续学习优化，不断提升获客效率与转化效果。"
          : "Real-time monitoring of operational data, with AI agents continuously learning and optimizing to improve acquisition efficiency and conversion rates.",
      icon: TrendingUp,
    },
  ];

  return (
    <Section id="how" className="bg-gradient-to-br from-cyan-50 via-blue-50 to-white">
      <motion.div {...fadeInUp} className="text-center mb-12">
        <p className="text-sm font-semibold text-cyan-600 mb-2">
          {language === "zh" ? "三步开启" : "3 Simple Steps"}
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          {language === "zh" ? "快速开启全球出海之旅" : "Start Your Global Expansion Journey"}
        </h2>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.title}
              {...fadeInUp}
              transition={{ delay: idx * 0.05 }}
            >
              <Card className="h-full border-cyan-100 bg-white shadow-md hover:shadow-xl transition-all">
                <CardContent className="p-6 flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-100 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-cyan-600" />
                    </div>
                    <div className="text-3xl font-extrabold text-cyan-600">
                      {idx + 1}
                    </div>
                  </div>
                  <CardTitle className="text-xl text-gray-900">
                    {step.title}
                  </CardTitle>
                  <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
});
HowTo.displayName = "HowTo";

const CTA = memo(() => {
  const { language } = useLanguage();
  return (
    <Section className="bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-none">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-3xl sm:text-4xl font-extrabold mb-2">
            {language === "zh"
              ? "开启您的全球出海之旅"
              : "Start Your Global Expansion Journey"}
          </h3>
          <p className="text-lg text-white/90">
            {language === "zh"
              ? "联系我们的专业团队，获取定制化的AI智能体出海解决方案，助力企业低成本高效进入全球市场。"
              : "Contact our professional team for customized AI agent solutions to help your business efficiently enter global markets at low cost."}
          </p>
        </div>
        <Button
          asChild
          size="lg"
          className="px-8 py-6 text-base bg-white text-blue-600 hover:bg-gray-100 font-bold shadow-lg"
        >
          <Link href="/stories">
            {language === "zh" ? "立即咨询" : "Contact Us"}
          </Link>
        </Button>
      </div>
    </Section>
  );
});
CTA.displayName = "CTA";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Categories />
      <FeaturedStories />
      <Features />
      <HowTo />
      <CTA />
    </main>
  );
}
