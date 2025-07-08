'use client'

import Header from '../components/Header'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            與我們聯絡
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            歡迎與我們聯絡，我們將竭誠為您提供最優質的科技教育服務
          </p>
        </div>
      </section>
      <Contact />
      <Footer />
    </main>
  )
} 