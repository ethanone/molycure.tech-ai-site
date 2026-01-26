import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
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
  title: "魔力奇 Molycure | AI智能体全球出海解决方案",
  description:
    "魔力奇是一家新加坡背景的AI智能体公司，专注帮助企业高效出海。依托大模型与智能体技术，我们提供市场洞察、智能拓客、多语种沟通、合规风控与运营协同等一站式出海方案，助力企业低成本进入全球市场，提升获客效率与转化效果。",
  keywords: [
    "魔力奇",
    "Molycure",
    "AI智能体",
    "全球出海",
    "企业出海",
    "市场洞察",
    "智能拓客",
    "多语种沟通",
    "合规风控",
    "新加坡AI公司",
    "海外市场拓展",
  ],
  authors: [{ name: "魔力奇 Molycure" }],
  icons: {
    icon: "/molycure-logo.png",
    shortcut: "/molycure-logo.png",
    apple: "/molycure-logo.png",
  },
  openGraph: {
    title: "魔力奇 Molycure | AI智能体全球出海解决方案",
    description:
      "基于AI智能体技术，助力企业高效出海。提供市场洞察、智能拓客、多语种沟通、合规风控等一站式解决方案。",
    url: "https://www.molycure.tech",
    siteName: "魔力奇 Molycure",
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
        <meta name="theme-color" content="#2563EB" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        {/* DNS 预连接 - 性能优化 */}
        <link rel="dns-prefetch" href="https://www.molycure.tech" />
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
        {/* Dify Chatbot */}
        <Script
          id="dify-chat-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.difyChatbotConfig = {
                token: 'tErbxwrLDlIeBMMR',
                inputs: {},
                systemVariables: {},
                userVariables: {},
              };
            `,
          }}
        />
        <Script
          id="dify-chatbot-loader"
          src="https://udify.app/embed.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
