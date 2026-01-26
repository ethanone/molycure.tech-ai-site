"use client";

import { memo, useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { BookOpen, Clock, Users, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import storiesData from "@/data/stories.json";

type Story = typeof storiesData.stories[0];

const fadeInUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  transition: { 
    duration: 0.8,
    ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
  },
  viewport: { once: true, margin: "-100px" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// Hero Section
const StoriesHero = memo(({ language }: { language: string }) => (
  <div className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-blue-50 via-cyan-50 to-slate-100 overflow-hidden">
    {/* 背景装饰 */}
    <div className="absolute inset-0 opacity-20">
      <div className="absolute top-16 left-16 text-8xl">🤖</div>
      <div className="absolute top-24 right-32 text-7xl">🌐</div>
      <div className="absolute bottom-32 left-1/4 text-7xl">📈</div>
      <div className="absolute bottom-16 right-20 text-6xl">🛡️</div>
    </div>

    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
      <motion.div {...fadeInUp}>
        <motion.div
          animate={{ 
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="text-8xl mb-8"
        >
          🚀
        </motion.div>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-700 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
          {language === 'zh' ? '魔力奇全球出海案例库' : 'Molycure Global Expansion Library'}
        </h1>
        <p className="text-xl sm:text-2xl text-gray-700 mb-8 font-medium">
          {language === 'zh' 
            ? '新加坡背景的AI智能体，为企业提供市场洞察、智能拓客、多语沟通、合规风控与运营协同的一站式出海方案。'
            : 'Singapore-based AI agents delivering market intel, smart acquisition, multilingual CX, compliance, and ops alignment for fast GTM abroad.'}
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-blue-600" />
            <span>{language === 'zh' ? '多智能体协同' : 'Multi-agent orchestration'}</span>
          </div>
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-cyan-600" />
            <span>{language === 'zh' ? '合规与风控内置' : 'Compliance built-in'}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-teal-600" />
            <span>{language === 'zh' ? '总部新加坡 · 面向全球' : 'HQ Singapore · global reach'}</span>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
));

StoriesHero.displayName = "StoriesHero";

// Story Card Component
const StoryCard = memo(({ story, language }: { story: Story; language: string }) => {
  const categoryColors: Record<string, string> = {
    "智能获客": "from-blue-600 to-cyan-600",
    "Acquisition": "from-blue-600 to-cyan-600",
    "多语沟通": "from-teal-600 to-emerald-500",
    "Multilingual": "from-teal-600 to-emerald-500",
    "运营协同": "from-indigo-600 to-blue-500",
    "Ops Sync": "from-indigo-600 to-blue-500",
  };

  const categoryColor = categoryColors[story.category[language as 'zh' | 'en']] || "from-gray-500 to-gray-600";

  return (
    <motion.div variants={fadeInUp}>
      <Card className="h-full bg-white hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-200 group">
        <CardHeader className="p-0">
          <div className={`relative h-48 bg-gradient-to-br ${categoryColor} flex items-center justify-center overflow-hidden`}>
            <div className="absolute inset-0 bg-black/10"></div>
            <motion.div
              className="text-8xl z-10"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              {story.cover}
            </motion.div>
            <div className="absolute top-4 right-4">
              <span className="bg-white/90 text-xs font-semibold px-3 py-1 rounded-full text-gray-700">
                {story.category[language as 'zh' | 'en']}
              </span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <CardTitle className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-blue-700 transition-colors">
            {story.title[language as 'zh' | 'en']}
          </CardTitle>
          <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
            {story.summary[language as 'zh' | 'en']}
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{language === 'zh' ? '场景' : 'Fit'} {story.ageRange}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{story.duration}</span>
            </div>
          </div>
          <Button 
            asChild
            className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white border-0 group/btn"
          >
            <Link href={`/stories/${story.id}`} className="flex items-center justify-center gap-2">
              <span>{language === 'zh' ? '查看案例' : 'View Case'}</span>
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
});

StoryCard.displayName = "StoryCard";

// Main Stories List Page
export default function StoriesPage() {
  const { language } = useLanguage();
  const [stories, setStories] = useState<Story[]>([]);

  useEffect(() => {
    setStories(storiesData.stories);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <StoriesHero language={language} />
      
      <section className="py-16 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-700 to-teal-600 bg-clip-text text-transparent">
              {language === 'zh' ? '核心解决方案与案例' : 'Core Solutions & Case Studies'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {language === 'zh' 
                ? '聚焦市场洞察、智能拓客、多语沟通、合规风控与运营协同，展示魔力奇智能体在全球落地的实效。' 
                : 'Focused on market intelligence, acquisition, multilingual CX, compliance, and ops sync—showcasing real outcomes from Molycure agents worldwide.'}
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
          >
            {stories.map((story) => (
              <StoryCard key={story.id} story={story} language={language} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-700 via-cyan-700 to-teal-700 text-white py-8 mt-16">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <p className="text-lg font-medium mb-2">
            {language === 'zh' ? '用AI智能体，帮助企业低成本高效率出海' : 'AI agents to help you expand globally with speed and efficiency'}
          </p>
          <p className="text-sm opacity-90">
            {language === 'zh' ? '新加坡总部 · 服务全球市场 · 欢迎联系获取定制方案' : 'HQ Singapore · Serving global markets · Contact for a tailored plan'}
          </p>
        </div>
      </footer>
    </main>
  );
}


