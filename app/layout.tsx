import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '魔力奇 Molycure | AI智能体全球出海解决方案',
  description: '魔力奇是一家基于人工智能的智能体项目，专注帮助企业高效出海。依托大模型与智能体技术，提供一站式出海解决方案，包括市场洞察、智能拓客、多语种沟通、合规风控与运营协同。',
  keywords: 'Molycure,魔力奇,AI智能体,全球出海,B2B SaaS,跨境电商,市场洞察,智能拓客,多语种沟通',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">{children}</body>
    </html>
  )
}
