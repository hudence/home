'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Calendar, Clock } from 'lucide-react'
import Link from 'next/link'

// 新聞數據 - 根據 Google Sites 真實內容更新
const newsData = [
  {
    id: 1,
    title: '艾登星打造偏鄉科技教育新標杆 榮獲U-start創新創業計畫補助',
    summary: '艾登星科技教育有限公司憑借其在偏鄉科技教育的創新理念和實踐成果，成功獲得教育部青年發展署U-start創新創業計畫補助，將進一步擴大偏鄉科技教育的影響力。',
    date: '2024年7月3日',
    category: '獲獎消息',
    link: 'https://twnewshub.com/archives/71015',
    tags: ['U-start', '創新創業', '教育部', '偏鄉教育']
  },
  {
    id: 2,
    title: '艾登星攜手臺中科大啟動科技教練培訓 推動中台灣暑期科技教育',
    summary: '為推動中台灣暑期科技教育發展，艾登星科技教育與國立臺中科技大學合作，啟動科技教練培訓計畫，培養專業師資團隊，提升科技教育品質。',
    date: '2024年6月22日',
    category: '合作計畫',
    link: 'https://www.tcust.edu.tw/p/406-1000-26783,r217.php',
    tags: ['臺中科大', '師資培訓', '產學合作', '科技教育']
  },
  {
    id: 3,
    title: '艾登星與手把手攜手彰化家扶中心玩轉科學',
    summary: '艾登星科技教育與手把手科學實驗室共同參與彰化家扶中心「玩轉科學」計畫，透過生動有趣的科學實驗課程，讓弱勢家庭的孩子也能享受科學學習的樂趣。',
    date: '2023年12月9日',
    category: '社會公益',
    link: 'https://www.ccf.org.tw/news/detail/3826',
    tags: ['家扶中心', '科學教育', '社會責任', '弱勢關懷']
  },
  {
    id: 4,
    title: '學生創業家艾登星、手把手、7JM&S鼓勵學子勇敢追夢',
    summary: '艾登星科技教育創辦人作為學生創業家代表，與其他年輕創業家一同分享創業歷程，鼓勵更多學子勇敢追求創業夢想，發揮創新創業精神。',
    date: '2023年12月18日',
    category: '創業分享',
    link: 'https://www.yda.gov.tw/news/detail/34928',
    tags: ['學生創業', '青年創業', '創業分享', '追夢']
  },
  {
    id: 5,
    title: '艾登星《森林嚮導》結合程式邏輯探索新學習境界',
    summary: '艾登星研發創新教具《森林嚮導》，這是一款以森林探險為主題的程式設計桌遊，透過實體物件和積木，讓孩童模擬程式設計流程，培養邏輯思維和創造性程式設計能力。',
    date: '2023年11月22日',
    category: '產品創新',
    link: 'https://www.edu.tw/News_Detail.aspx?n=9E7AC85F1954DDA8&sms=169B8E91BB75571F&s=8C9A2F2E8B4CC1B2',
    tags: ['森林嚮導', '程式設計', '創新教具', '桌遊']
  },
  {
    id: 6,
    title: '艾登星與台北青角攜手六象立體智慧推動3D列印',
    summary: '艾登星科技教育與台北青角及六象立體智慧合作，共同推動3D列印技術在教育領域的應用，讓學生透過實作體驗未來科技的無限可能。',
    date: '2023年11月3日',
    category: '技術合作',
    link: 'https://www.taipeimaker.org/news/detail/1247',
    tags: ['3D列印', '青角', '技術合作', 'Maker教育']
  }
]

const News = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="news" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-primary-200 rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 border border-secondary-200 rounded-full"></div>
      </div>

      <div className="container-max relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-medium">
              🏆 最新消息
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
          >
            新聞 <span className="text-primary-600">動態</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            掌握艾登星科技教育的最新發展動態，了解我們在科技教育領域的創新成果與社會影響力
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {newsData.map((news, index) => (
            <motion.article
              key={news.id}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div className="p-6">
                {/* Category and Date */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-xs font-medium">
                    {news.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {news.date}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors duration-200">
                  {news.title}
                </h3>

                {/* Summary */}
                <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                  {news.summary}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {news.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Read More Link */}
                <Link
                  href={news.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium group/link transition-colors duration-200"
                >
                  <span>閱讀全文</span>
                  <ArrowUpRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-200" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <span>聯絡我們了解更多</span>
              <ArrowUpRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default News 