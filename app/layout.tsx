import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '艾登星科技教育有限公司 | 教創心，育恆心',
  description: '艾登星致力於推動科技教育創新，培養學生的創新思維和恆心毅力，為偏鄉地區帶來更多科技教育資源。',
  keywords: '艾登星, 科技教育, 程式設計, 機器人, AI教育, 創新教育',
  authors: [{ name: '艾登星科技教育有限公司' }],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW">
      <body className="antialiased">{children}</body>
    </html>
  )
}
