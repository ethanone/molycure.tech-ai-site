import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '成都科瑞时代科技有限公司 - 智能科技，创新未来',
  description: '成都科瑞时代科技有限公司是一家专注于人工智能、大数据、云计算等前沿科技的创新型企业',
  keywords: '成都科瑞时代,AI技术,人工智能,大数据,云计算,智能解决方案',
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
