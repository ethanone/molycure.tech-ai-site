"use client";

import { memo, useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX,
  BookOpen,
  Home,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import Link from "next/link";
import storiesData from "@/data/stories.json";

type Story = typeof storiesData.stories[0];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5 }
};

// Story Reader Component
export default function StoryReaderPage() {
  const params = useParams();
  const router = useRouter();
  const { language } = useLanguage();
  const [story, setStory] = useState<Story | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [speechRate, setSpeechRate] = useState(1);

  useEffect(() => {
    const foundStory = storiesData.stories.find(s => s.id === params.id);
    if (foundStory) {
      setStory(foundStory);
    }
  }, [params.id]);

  useEffect(() => {
    if (isPlaying && story) {
      const content = story.content[language as 'zh' | 'en'];
      if (currentPage < content.length) {
        speakText(content[currentPage], speechRate);
      }
    }
  }, [isPlaying, currentPage, story, language, speechRate]);

  const speakText = (text: string, rate: number = 1) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = language === 'zh' ? 'zh-CN' : 'en-US';
      utterance.rate = rate;
      utterance.volume = isMuted ? 0 : 1;
      utterance.onend = () => {
        if (currentPage < (story?.content[language as 'zh' | 'en'].length || 0) - 1) {
          setTimeout(() => {
            setCurrentPage(prev => prev + 1);
          }, 500);
        } else {
          setIsPlaying(false);
        }
      };
      window.speechSynthesis.speak(utterance);
    }
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      if (story) {
        speakText(story.content[language as 'zh' | 'en'][currentPage], speechRate);
      }
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    }
  };

  const handleNext = () => {
    if (story && currentPage < story.content[language as 'zh' | 'en'].length - 1) {
      setCurrentPage(prev => prev + 1);
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    }
  };

  const handleMute = () => {
    setIsMuted(prev => !prev);
    window.speechSynthesis.cancel();
    setIsPlaying(false);
  };

  if (!story) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-100">
        <div className="text-center">
          <p className="text-xl text-gray-600 mb-4">
            {language === 'zh' ? '未找到对应案例' : 'Case not found'}
          </p>
          <Button asChild>
            <Link href="/stories">
              {language === 'zh' ? '返回案例库' : 'Back to Cases'}
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  const content = story.content[language as 'zh' | 'en'];
  const currentText = content[currentPage];
  const totalPages = content.length;

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-blue-200 shadow-sm">
        <div className="container mx-auto max-w-4xl px-4 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => router.push('/stories')}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>{language === 'zh' ? '返回案例' : 'Back'}</span>
            </Button>
            <Link href="/">
              <Button variant="ghost" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                <Home className="w-5 h-5" />
                <span>{language === 'zh' ? '首页' : 'Home'}</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto max-w-4xl px-4 py-8">
        {/* Story Title */}
        <motion.div {...fadeIn} className="text-center mb-8">
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="text-8xl mb-4"
          >
            {story.cover}
          </motion.div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-700 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
            {story.title[language as 'zh' | 'en']}
          </h1>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
              {story.category[language as 'zh' | 'en']}
            </span>
            <span>•</span>
            <span>{language === 'zh' ? '场景' : 'Fit'} {story.ageRange}</span>
            <span>•</span>
            <span>{story.duration}</span>
          </div>
        </motion.div>

        {/* Story Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            {...fadeIn}
            className="mb-8"
          >
            <Card className="bg-white/90 backdrop-blur-sm border-2 border-blue-200 shadow-xl">
              <CardContent className="p-8 md:p-12">
                <div className="text-center mb-6">
                  <span className="text-sm text-blue-600 font-medium">
                    {language === 'zh' ? '阶段' : 'Step'} {currentPage + 1} / {totalPages}
                  </span>
                </div>
                <motion.p
                  key={currentText}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl sm:text-3xl md:text-4xl text-gray-800 leading-relaxed text-center font-medium"
                  style={{ 
                    fontFamily: language === 'zh' ? 'serif' : 'sans-serif',
                    lineHeight: '1.8'
                  }}
                >
                  {currentText}
                </motion.p>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border-2 border-blue-200">
          {/* Navigation */}
          <div className="flex items-center justify-between mb-6">
            <Button
              onClick={handlePrevious}
              disabled={currentPage === 0}
              variant="outline"
              className="flex items-center gap-2"
            >
              <ChevronLeft className="w-5 h-5" />
              <span>{language === 'zh' ? '上一页' : 'Previous'}</span>
            </Button>
            
            <div className="flex items-center gap-4">
              <Button
                onClick={handleMute}
                variant="ghost"
                size="icon"
                className="rounded-full"
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5 text-gray-600" />
                ) : (
                  <Volume2 className="w-5 h-5 text-blue-600" />
                )}
              </Button>
              
              <Button
                onClick={handlePlayPause}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-lg"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-6 h-6 mr-2" />
                    <span>{language === 'zh' ? '暂停' : 'Pause'}</span>
                  </>
                ) : (
                  <>
                    <Play className="w-6 h-6 mr-2" />
                    <span>{language === 'zh' ? '播放' : 'Play'}</span>
                  </>
                )}
              </Button>
            </div>

            <Button
              onClick={handleNext}
              disabled={currentPage === totalPages - 1}
              variant="outline"
              className="flex items-center gap-2"
            >
              <span>{language === 'zh' ? '下一页' : 'Next'}</span>
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-3 mb-4 overflow-hidden">
            <motion.div
            className="bg-gradient-to-r from-blue-600 to-teal-600 h-full rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${((currentPage + 1) / totalPages) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="text-center text-sm text-gray-600">
            {currentPage + 1} / {totalPages}
          </div>
        </div>

        {/* Story Summary */}
        <motion.div {...fadeIn} className="mt-8">
          <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <BookOpen className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-2">
                    {language === 'zh' ? '方案要点' : 'Solution Snapshot'}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {story.summary[language as 'zh' | 'en']}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </main>
  );
}


