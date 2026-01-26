"use client";

import { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Sparkles, Brain, Globe, Users, Zap } from "lucide-react";

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
    <Section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-cyan-50 to-white min-h-[80vh] flex items-center">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-10 top-10 w-64 h-64 bg-blue-200/40 rounded-full blur-3xl" />
        <div className="absolute right-0 bottom-0 w-72 h-72 bg-cyan-200/50 rounded-full blur-3xl" />
        <div className="absolute left-1/4 bottom-10 text-8xl opacity-15">🤖</div>
        <div className="absolute right-16 top-16 text-7xl opacity-15">🌍</div>
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
              : "Molycure is an AI-powered agent platform based in Singapore, dedicated to helping businesses expand globally. Leveraging large models and intelligent agents, we offer one-stop solutions from market insights and customer acquisition to multilingual communication, compliance, and coordinated operations."}
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
          <div className="space-y-4">
            <p className="text-sm font-semibold text-gray-500">
              {language === "zh"
                ? "我们关注每一次出海尝试的实际结果，用数据说话。"
                : "We focus on measurable outcomes for every expansion attempt."}
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
              <div>
                <div className="text-2xl font-extrabold text-blue-700">2.1x</div>
                <p className="mt-1">
                  {language === "zh" ? "线索转化效率提升" : "Lead conversion lift"}
                </p>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-teal-700">
                  {language === "zh" ? "4-8 周" : "4-8 weeks"}
                </div>
                <p className="mt-1">
                  {language === "zh" ? "典型方案落地周期" : "Typical go-live cycle"}
                </p>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-blue-700">30-40%</div>
                <p className="mt-1">
                  {language === "zh" ? "节省一线人力成本" : "Reduction in front-line costs"}
                </p>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-teal-700">100+</div>
                <p className="mt-1">
                  {language === "zh" ? "支持多语种沟通" : "Supported languages"}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
});
Hero.displayName = "Hero";

const SolutionSection = memo(() => {
  const { language } = useLanguage();
  return (
    <Section
      id="features"
      className="bg-gradient-to-b from-white via-blue-50/40 to-white border-t border-blue-50"
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div {...fadeInUp} className="space-y-6">
          <p className="text-sm font-semibold text-blue-600">
            {language === "zh" ? "一站式出海服务" : "One-stop Expansion"}
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-snug">
            {language === "zh"
              ? "从市场洞察到运营协同，\n用一套智能体系统跑通出海全流程"
              : "From market intelligence to operations,\nrun your entire expansion with one agent system."}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {language === "zh"
              ? "像农夫山泉强调“水源地”，魔力奇强调的是“数据与智能体”。我们以真实数据驱动决策，用可解释的智能体编排替代零散工具，帮助团队看清每一次投放、每一封邮件、每一通外呼背后的效果。"
              : "Just as a water brand focuses on its source, Molycure focuses on data and agents. We replace fragmented tools with explainable agent orchestration so every campaign, email, and call is traceable and optimizable."}
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <Card className="border-blue-100 shadow-sm">
              <CardContent className="p-5 space-y-2">
                <div className="flex items-center gap-2 text-sm font-semibold text-blue-700">
                  <Sparkles className="w-4 h-4" />
                  {language === "zh" ? "品牌与市场" : "Brand & Market"}
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {language === "zh"
                    ? "基于公开数据、社交声量与行业报告，快速建立目标区域的机会图谱和品牌定位建议。"
                    : "Use open data, social signals, and industry reports to map opportunities and craft positioning for target regions."}
                </p>
              </CardContent>
            </Card>
            <Card className="border-blue-100 shadow-sm">
              <CardContent className="p-5 space-y-2">
                <div className="flex items-center gap-2 text-sm font-semibold text-blue-700">
                  <Globe className="w-4 h-4" />
                  {language === "zh" ? "获客与沟通" : "Acquisition & CX"}
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {language === "zh"
                    ? "多语种外联、站内外客服与社媒私信统一由智能体协同处理，保证语气统一、合规可控。"
                    : "Multilingual outreach, support, and DMs handled by agents so tone and compliance stay consistent."}
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Button
              asChild
              size="lg"
              className="px-8 py-6 text-base bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white shadow-lg"
            >
              <Link href="/stories">
                {language === "zh" ? "查看典型出海方案" : "View Typical Playbooks"}
              </Link>
            </Button>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Users className="w-4 h-4 text-blue-600" />
              <span>
                {language === "zh"
                  ? "适用于 B2B SaaS、跨境电商与高客单制造企业"
                  : "Designed for B2B SaaS, cross-border brands, and industrial vendors"}
              </span>
            </div>
          </div>
        </motion.div>
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.15 }}
          className="relative h-full flex items-center justify-center"
        >
          <div className="relative w-full max-w-md">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-blue-100 shadow-lg bg-black">
              <Image
                src="/molycure-logo.png"
                alt="Molycure AI agents"
                width={800}
                height={600}
                className="h-full w-full object-contain bg-black"
              />
            </div>
            <div className="absolute -bottom-6 left-6 right-6">
              <Card className="border-blue-100 shadow-md bg-white/95 backdrop-blur">
                <CardContent className="p-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      {language === "zh" ? "实时看板" : "Live Board"}
                    </p>
                    <p className="text-sm text-gray-800">
                      {language === "zh"
                        ? "一眼看到每个市场的线索、转化与风险提示"
                        : "See leads, conversions, and risk alerts per market at a glance."}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-extrabold text-blue-700">24/7</div>
                    <p className="text-xs text-gray-500">
                      {language === "zh" ? "智能体在线" : "Agents online"}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
});
SolutionSection.displayName = "SolutionSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <SolutionSection />
    </main>
  );
}
