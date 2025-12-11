import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { LanguageProvider } from "@/contexts/LanguageContext";

// 配置 Inter 字体 - 优化加载
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
});

export const metadata: Metadata = {
  title: "儿童故事屋 | 双语睡前故事与语音朗读",
  description: "儿童故事屋提供双语睡前故事、语音朗读与安全无广告的阅读体验，陪伴孩子快乐成长，学习勇气、友爱与分享。",
  keywords: ["儿童故事", "睡前故事", "双语故事", "亲子阅读", "语音朗读", "儿童寓言", "儿童教育"],
  authors: [{ name: "Kids Story House" }],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "儿童故事屋 | 双语睡前故事",
    description: "双语睡前故事 · 语音朗读 · 安全无广告 · 适合3-8岁儿童",
    url: "https://demo-ai-site.vercel.app",
    siteName: "儿童故事屋",
    locale: "zh-CN",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        {/* 移动端视口优化 - 防止缩放和布局问题 */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes, viewport-fit=cover" />
        <meta name="theme-color" content="#8B2F2F" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        {/* DNS 预连接 - 性能优化 */}
        <link rel="dns-prefetch" href="https://www.zhixiang-data.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.variable
      )}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
