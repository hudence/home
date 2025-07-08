'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

// 導航數據結構
const navigationData = {
  main: [
    {
      name: '首頁',
      href: '/',
      type: 'link',
      hasDropdown: false
    },
    {
      name: '業務',
      href: '#services',
      type: 'scroll',
      hasDropdown: true,
      submenu: [
        { name: '服務項目', href: '#services', type: 'scroll', description: '核心業務服務與專業領域' },
        { name: '精選課程', href: '#courses', type: 'scroll', description: '分齡分級課程內容介紹' },
        { name: '新聞動態', href: '#news', type: 'scroll', description: '最新消息與活動資訊' }
      ]
    },
    {
      name: '關於',
      href: '/about',
      type: 'link',
      hasDropdown: true,
      submenu: [
        { name: '團隊簡介', href: '/about#team-intro', type: 'link', description: '團隊理念與願景' },
        { name: '團隊成員', href: '/about#team-members', type: 'link', description: '核心團隊介紹' },
        { name: '獲獎記事', href: '/about#awards', type: 'link', description: '重要獲獎與肯定' }
      ]
    },
    {
      name: '與我們聯絡',
      href: '/contact',
      type: 'link',
      hasDropdown: false
    }
  ]
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const router = useRouter()
  
  // 檢查是否在首頁
  const isHomePage = typeof window !== 'undefined' && window.location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavigation = (href: string, type: string) => {
    if (type === 'link') {
      router.push(href)
    } else if (type === 'scroll') {
      const element = document.querySelector(href)
      if (element) {
        const offset = 100 // Header高度加上額外間距
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - offset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }
    setIsMobileMenuOpen(false)
    setActiveDropdown(null)
  }

  const handleMouseEnter = (itemName: string) => {
    setActiveDropdown(itemName)
  }

  const handleMouseLeave = () => {
    setActiveDropdown(null)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/98 backdrop-blur-md shadow-lg border-b border-gray-100' 
          : isHomePage 
            ? 'bg-transparent' 
            : 'bg-gradient-to-r from-blue-600/90 to-purple-600/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Brand */}
          <motion.div 
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => handleNavigation('/', 'link')}
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative w-12 h-12">
              <Image
                src="/hudence_single_logo.png"
                alt="艾登星科技教育"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <h1 className={`text-xl font-bold transition-colors duration-300 ${
                isScrolled 
                  ? 'text-gray-900' 
                  : isHomePage 
                    ? 'text-white' 
                    : 'text-white drop-shadow-lg'
              }`}>
                艾登星科技教育有限公司
              </h1>
              <p className={`text-sm transition-colors duration-300 ${
                isScrolled 
                  ? 'text-blue-700' 
                  : isHomePage 
                    ? 'text-blue-200' 
                    : 'text-blue-100 drop-shadow-md'
              }`}>
                教創心，育恆心
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationData.main.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={() => handleNavigation(item.href, item.type)}
                  className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    isScrolled 
                      ? 'text-gray-900 hover:text-blue-600 hover:bg-blue-50' 
                      : isHomePage
                        ? 'text-white hover:text-blue-200 hover:bg-blue-500/10'
                        : 'text-white drop-shadow-md hover:text-blue-200 hover:bg-white/20'
                  }`}
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown 
                      className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} 
                    />
                  )}
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.hasDropdown && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className={`absolute top-full left-0 mt-2 w-72 rounded-xl shadow-xl overflow-hidden ${
                        isScrolled 
                          ? 'bg-white border border-gray-100' 
                          : isHomePage
                            ? 'bg-white border border-gray-100'
                            : 'bg-white/98 backdrop-blur-md border border-gray-200'
                      }`}
                    >
                      {item.submenu?.map((subItem, index) => (
                        <motion.button
                          key={subItem.name}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: index * 0.05 }}
                          onClick={() => handleNavigation(subItem.href, subItem.type)}
                          className="w-full text-left px-6 py-4 hover:bg-gray-50 transition-colors duration-200 border-b border-gray-50 last:border-b-0"
                        >
                          <div className="font-medium text-gray-900 mb-1">{subItem.name}</div>
                          <div className="text-sm text-gray-500">{subItem.description}</div>
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled 
                ? 'text-gray-900 hover:bg-gray-100' 
                : isHomePage
                  ? 'text-white hover:bg-white/10'
                  : 'text-white drop-shadow-md hover:bg-white/20'
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`lg:hidden ${
              isScrolled 
                ? 'bg-white border-t border-gray-200' 
                : isHomePage
                  ? 'bg-white border-t border-gray-200'
                  : 'bg-white/98 backdrop-blur-md border-t border-gray-200'
            }`}
          >
            <div className="max-w-7xl mx-auto px-4 py-4">
              {navigationData.main.map((item) => (
                <div key={item.name} className="py-2">
                  <button
                    onClick={() => {
                      if (!item.hasDropdown) {
                        handleNavigation(item.href, item.type)
                      } else {
                        setActiveDropdown(
                          activeDropdown === item.name ? null : item.name
                        )
                      }
                    }}
                    className={`flex items-center justify-between w-full text-left font-medium py-2 ${
                      isScrolled 
                        ? 'text-gray-900' 
                        : isHomePage 
                          ? 'text-gray-900' 
                          : 'text-gray-800'
                    }`}
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <ChevronDown 
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} 
                      />
                    )}
                  </button>

                  {/* Mobile Submenu */}
                  <AnimatePresence>
                    {item.hasDropdown && activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="ml-4 mt-2 space-y-2"
                      >
                        {item.submenu?.map((subItem) => (
                          <button
                            key={subItem.name}
                            onClick={() => handleNavigation(subItem.href, subItem.type)}
                            className={`block w-full text-left py-2 hover:text-blue-600 transition-colors duration-200 ${
                              isScrolled 
                                ? 'text-gray-600' 
                                : isHomePage 
                                  ? 'text-gray-600' 
                                  : 'text-gray-700'
                            }`}
                          >
                            <div className="font-medium">{subItem.name}</div>
                            <div className={`text-sm ${
                              isScrolled 
                                ? 'text-gray-500' 
                                : isHomePage 
                                  ? 'text-gray-500' 
                                  : 'text-gray-600'
                            }`}>{subItem.description}</div>
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
} 