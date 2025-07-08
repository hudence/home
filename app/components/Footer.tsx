'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Mail, Phone, MessageCircle, ExternalLink, ArrowUp } from 'lucide-react'


const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickLinks = [
    { name: '關於我們', href: '#about' },
    { name: '服務項目', href: '#services' },
    { name: '課程介紹', href: '#courses' },
    { name: '學生作品', href: '#portfolio' },
    { name: '最新消息', href: '#news' },
    { name: '聯絡我們', href: '#contact' },
  ]

  const newsLinks = [
    {
      title: 'U-start創新創業計畫補助',
      url: 'https://twnewshub.com/archives/71015',
      date: '2024.07.03'
    },
    {
      title: '攜手臺中科大科技教練培訓',
      url: 'https://twnewshub.com/archives/71019',
      date: '2024.06.22'
    },
    {
      title: '與手把手攜手彰化家扶中心',
      url: 'https://twnewshub.com/archives/60895',
      date: '2023.12.09'
    }
  ]

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: '聯絡電話',
      value: '0979-251-229',
      link: 'tel:0979251229'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: '電子信箱',
      value: 'peterchen223@gmail.com',
      link: 'mailto:peterchen223@gmail.com'
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      label: 'Line ID',
      value: '19558335896',
      link: 'https://line.me/ti/p/19558335896'
    }
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-secondary-500"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container-max py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative w-12 h-12">
                  <img
                    src="https://hudence.site/home/hudence_single_logo.png"
                    alt="Hudence 艾登星"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">艾登星</h3>
                  <p className="text-gray-400 text-sm">教創心，育恆心</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                艾登星科技教育有限公司致力於推動科技教育創新，
                為偏鄉地區帶來更多科技教育資源，培養學生的創新思維和恆心毅力。
              </p>

              <div className="text-sm text-gray-400">
                <p className="mb-1">營運長：陳其傑</p>
                <p>© 2024 艾登星科技教育有限公司</p>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6 text-white">快速連結</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-200 flex items-center group"
                    >
                      <span className="transform group-hover:translate-x-1 transition-transform duration-200">
                        {link.name}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6 text-white">聯絡資訊</h4>
              <ul className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <li key={index}>
                    <a
                      href={contact.link}
                      className="flex items-center space-x-3 text-gray-300 hover:text-primary-400 transition-colors duration-200 group"
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-primary-600 transition-colors duration-200">
                        {contact.icon}
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">{contact.label}</p>
                        <p className="font-medium">{contact.value}</p>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Recent News */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6 text-white">最新報導</h4>
              <ul className="space-y-4">
                {newsLinks.map((news, index) => (
                  <li key={index}>
                    <a
                      href={news.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group"
                    >
                      <div className="flex items-start space-x-2">
                        <ExternalLink className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-gray-300 group-hover:text-primary-400 transition-colors duration-200 line-clamp-2 leading-snug">
                            {news.title}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">{news.date}</p>
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="container-max py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center space-x-2 text-gray-400 text-sm mb-4 md:mb-0"
              >
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500" />
                <span>by 艾登星團隊</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-6"
              >
                <span className="text-gray-400 text-sm">
                  教育部 U-start 創新創業計畫補助
                </span>
                
                <motion.button
                  onClick={scrollToTop}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary-600 hover:bg-primary-700 text-white p-2 rounded-lg transition-colors duration-200"
                >
                  <ArrowUp className="w-5 h-5" />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 