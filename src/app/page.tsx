"use client";

import { memo } from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Sparkles,
  Stars,
  BookOpen,
  Volume2,
  Laugh,
  Heart,
  Wand2,
  Music,
  Baby,
  Rainbow,
  ShieldCheck,
  Sun,
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
    <div className="fixed top-5 right-5 z-50 flex items-center gap-3">
      <Link
        href="/stories"
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all"
      >
        <BookOpen className="w-4 h-4" />
        <span className="text-sm font-semibold">
          {language === "zh" ? "故事合集" : "Story Room"}
        </span>
      </Link>
      <button
        onClick={toggleLanguage}
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-pink-100 shadow-md hover:shadow-lg transition-all"
        aria-label="switch language"
      >
        <Stars className="w-4 h-4 text-pink-500" />
        <span className="text-sm font-semibold text-gray-700">
          {language === "zh" ? "EN" : "中文"}
        </span>
      </button>
    </div>
  );
});
LanguageToggle.displayName = "LanguageToggle";

const Hero = memo(() => {
  const { language } = useLanguage();
  return (
    <Section className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 min-h-[80vh] flex items-center">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-10 top-10 w-64 h-64 bg-pink-200/50 rounded-full blur-3xl" />
        <div className="absolute right-0 bottom-0 w-72 h-72 bg-blue-200/60 rounded-full blur-3xl" />
        <div className="absolute left-1/4 bottom-10 text-8xl opacity-30">🌈</div>
        <div className="absolute right-16 top-16 text-7xl opacity-30">⭐</div>
      </div>
      <div className="relative grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.div
            {...fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-md border border-pink-100 mb-6"
          >
            <Sparkles className="w-4 h-4 text-pink-500" />
            <span className="text-sm font-semibold text-gray-700">
              {language === "zh" ? "儿童故事屋 · 温暖陪伴" : "Kids Story House · Cozy & Kind"}
            </span>
          </motion.div>
          <motion.h1
            {...fadeInUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 mb-6"
          >
            {language === "zh"
              ? "给孩子的温暖故事，陪伴每一次睡前时光"
              : "Warm stories for kids, with you every bedtime"}
          </motion.h1>
          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.1 }}
            className="text-lg sm:text-xl text-gray-700 max-w-2xl mb-8 leading-relaxed"
          >
            {language === "zh"
              ? "精选双语故事、语音朗读和趣味插画，让孩子在快乐中学会勇敢、友爱与分享。"
              : "Curated bilingual stories with voice reading and playful visuals to help kids learn courage, kindness, and sharing while having fun."}
          </motion.p>
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              asChild
              size="lg"
              className="px-8 py-6 text-base bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white shadow-lg"
            >
              <Link href="/stories">
                {language === "zh" ? "开始讲故事" : "Start Reading"}
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="px-8 py-6 text-base border-pink-200 text-pink-600 hover:bg-pink-50"
            >
              <Link href="#features">
                {language === "zh" ? "看看亮点" : "See Features"}
              </Link>
            </Button>
          </motion.div>
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4 text-sm text-gray-600"
          >
            <span className="inline-flex items-center gap-2 px-3 py-2 bg-white border border-pink-100 rounded-full shadow-sm">
              <Heart className="w-4 h-4 text-pink-500" />
              {language === "zh" ? "适合 3-8 岁" : "Ages 3-8"}
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-2 bg-white border border-purple-100 rounded-full shadow-sm">
              <Volume2 className="w-4 h-4 text-purple-500" />
              {language === "zh" ? "支持朗读" : "Voice Ready"}
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-2 bg-white border border-blue-100 rounded-full shadow-sm">
              <ShieldCheck className="w-4 h-4 text-blue-500" />
              {language === "zh" ? "安全无广告" : "Safe & Ad-free"}
            </span>
          </motion.div>
        </div>
        <motion.div
          {...fadeInUp}
          className="relative bg-white border border-pink-100 shadow-xl rounded-3xl p-8"
        >
          <div className="absolute -top-6 -left-6 text-5xl">📚</div>
          <div className="absolute -bottom-6 -right-6 text-5xl">🧸</div>
          <div className="grid grid-cols-2 gap-4">
            {storiesData.stories.slice(0, 4).map((story) => (
              <Card
                key={story.id}
                className="border-0 bg-gradient-to-br from-white to-pink-50 shadow-md hover:shadow-lg transition-all"
              >
                <CardContent className="p-4">
                  <div className="text-3xl mb-3">{story.cover}</div>
                  <div className="text-sm text-pink-500 font-semibold">
                    {story.category.zh}
                  </div>
                  <div className="text-base font-bold text-gray-800 mt-1">
                    {story.title.zh}
                  </div>
                  <p className="text-xs text-gray-600 mt-2 line-clamp-2">
                    {story.summary.zh}
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
  const categories = Array.from(
    new Set(storiesData.stories.map((s) => s.category[language as "zh" | "en"]))
  );
  const icons = [Rainbow, Heart, Laugh, Baby, Sun, Music];

  return (
    <Section id="categories" className="bg-white">
      <motion.div {...fadeInUp} className="text-center mb-12">
        <p className="text-sm font-semibold text-pink-500 mb-2">
          {language === "zh" ? "主题分类" : "Story Themes"}
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          {language === "zh" ? "孩子最爱的故事类型" : "Stories Kids Love"}
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          {language === "zh"
            ? "按主题挑选故事，勇气、友谊、梦想、承诺……陪伴孩子的成长瞬间"
            : "Pick by themes—courage, friendship, dreams, promises—to fit every bedtime mood."}
        </p>
      </motion.div>
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-40px" }}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
      >
        {categories.map((cat, idx) => {
          const Icon = icons[idx % icons.length];
          return (
            <motion.div key={cat} variants={fadeInUp}>
              <Card className="border-pink-100 bg-gradient-to-br from-white to-pink-50 hover:shadow-lg transition-all h-full">
                <CardContent className="p-4 text-center flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-pink-100 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-pink-500" />
                  </div>
                  <div className="text-sm font-semibold text-gray-800">{cat}</div>
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
  const featured = storiesData.stories.slice(0, 3);

  return (
    <Section id="featured" className="bg-gradient-to-br from-purple-50 via-pink-50 to-white">
      <motion.div {...fadeInUp} className="text-center mb-12">
        <p className="text-sm font-semibold text-purple-500 mb-2">
          {language === "zh" ? "精选故事" : "Featured"}
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          {language === "zh" ? "今晚读这几篇" : "Tonight's Picks"}
        </h2>
      </motion.div>
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-40px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {featured.map((story) => (
          <motion.div key={story.id} variants={fadeInUp}>
            <Card className="h-full border-purple-100 bg-white shadow-md hover:shadow-xl transition-all">
              <CardHeader className="p-6 pb-3 flex items-center gap-3">
                <div className="text-4xl">{story.cover}</div>
                <div>
                  <CardTitle className="text-xl text-gray-900">
                    {story.title[language as "zh" | "en"]}
                  </CardTitle>
                  <p className="text-sm text-purple-500 font-semibold">
                    {story.category[language as "zh" | "en"]}
                  </p>
                </div>
              </CardHeader>
              <CardContent className="px-6 pb-6">
                <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                  {story.summary[language as "zh" | "en"]}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>
                    {language === "zh" ? "适合" : "Ages"} {story.ageRange}
                  </span>
                  <span>{story.duration}</span>
                </div>
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                >
                  <Link href={`/stories/${story.id}`}>
                    {language === "zh" ? "开始阅读" : "Read Now"}
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
      icon: Wand2,
      title: language === "zh" ? "语音朗读" : "Voice Reading",
      desc:
        language === "zh"
          ? "点击即可朗读，爸妈可以解放双手，孩子也能自己听故事。"
          : "Tap to listen—hands free for parents, fun for kids.",
    },
    {
      icon: Heart,
      title: language === "zh" ? "温暖价值观" : "Warm Values",
      desc:
        language === "zh"
          ? "勇气、友爱、分享、承诺，用故事播下善良的种子。"
          : "Courage, kindness, sharing, promise—seeds of good values.",
    },
    {
      icon: Music,
      title: language === "zh" ? "轻松氛围" : "Cozy Vibes",
      desc:
        language === "zh"
          ? "柔和色彩和动画，营造安全的阅读小天地。"
          : "Soft colors and playful motions for a safe cozy space.",
    },
  ];

  return (
    <Section id="features" className="bg-white">
      <motion.div {...fadeInUp} className="text-center mb-12">
        <p className="text-sm font-semibold text-blue-500 mb-2">
          {language === "zh" ? "为家长设计" : "Made for Parents"}
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          {language === "zh" ? "简单、安全、好用" : "Simple, Safe, Delightful"}
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
              <Card className="h-full border-blue-100 bg-gradient-to-br from-white to-blue-50/60 shadow-sm hover:shadow-lg transition-all">
                <CardContent className="p-6 flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-blue-600" />
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
      title: language === "zh" ? "挑选故事" : "Pick a story",
      desc:
        language === "zh"
          ? "在故事列表选择主题或直接点击首页推荐"
          : "Choose a theme or tap a featured story.",
      icon: BookOpen,
    },
    {
      title: language === "zh" ? "点击朗读" : "Tap to play",
      desc:
        language === "zh"
          ? "进入故事页后点击播放，自动分段朗读"
          : "Hit play to listen, auto page-by-page.",
      icon: Volume2,
    },
    {
      title: language === "zh" ? "陪伴互动" : "Cozy together",
      desc:
        language === "zh"
          ? "跟孩子聊聊故事里的勇气、友谊和分享"
          : "Chat with your kid about courage and kindness.",
      icon: Heart,
    },
  ];

  return (
    <Section id="how" className="bg-gradient-to-br from-yellow-50 via-pink-50 to-white">
      <motion.div {...fadeInUp} className="text-center mb-12">
        <p className="text-sm font-semibold text-amber-500 mb-2">
          {language === "zh" ? "3 步开始" : "3 Easy Steps"}
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          {language === "zh" ? "今晚就讲一个暖心故事" : "Tell a warm story tonight"}
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
              <Card className="h-full border-amber-100 bg-white shadow-md hover:shadow-xl transition-all">
                <CardContent className="p-6 flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-amber-600" />
                    </div>
                    <div className="text-3xl font-extrabold text-amber-500">
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
    <Section className="bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-none">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-3xl sm:text-4xl font-extrabold mb-2">
            {language === "zh"
              ? "一起开启故事时间吧！"
              : "Start your story time now!"}
          </h3>
          <p className="text-lg text-white/90">
            {language === "zh"
              ? "点击进入故事列表，挑一篇最合适今晚的故事。"
              : "Jump into the story list and pick tonight's tale."}
          </p>
        </div>
        <Button
          asChild
          size="lg"
          className="px-8 py-6 text-base bg-white text-pink-600 hover:bg-gray-100 font-bold shadow-lg"
        >
          <Link href="/stories">
            {language === "zh" ? "前往故事列表" : "Go to Stories"}
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
      <LanguageToggle />
      <Hero />
      <Categories />
      <FeaturedStories />
      <Features />
      <HowTo />
      <CTA />
    </main>
  );
}
