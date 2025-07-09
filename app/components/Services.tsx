'use client'

import { motion } from 'framer-motion'
import { Users, BookOpen, Lightbulb, Target, Award, Rocket } from 'lucide-react'

const Services = () => {
  const mainServices = [
    {
      id: 'coach-training',
      title: '教練培訓營',
      subtitle: 'Scratch 專業師資培訓',
      description: '為教育工作者提供專業的 Scratch 程式設計教學培訓，讓您成為具備完整教學能力的 Scratch 認證教練。',
      icon: Users,
      color: 'from-blue-600 to-blue-700',
      features: [
        'Scratch 完整教學方法論',
        '視覺化程式設計教學',
        '互動式教學技巧訓練',
        '創意專案設計指導',
        '教材開發與應用',
        '教學評量與回饋'
      ],
      achievements: [
        '陽明高中教練培訓營',
        '台中科技大學教練培訓營',
        '累計培訓教練超過100位'
      ]
    },
    {
      id: 'commissioned-courses',
      title: '委辦課程或營隊',
      subtitle: '客製化教育解決方案',
      description: '為學校、機構量身打造的科學教育課程與營隊活動，提供完整的教學規劃與執行。',
      icon: BookOpen,
      color: 'from-green-600 to-green-700',
      features: [
        '課程內容客製化設計',
        '完整教材教具提供',
        '專業講師派遣',
        '活動規劃與執行',
        '成效評估與報告',
        '後續追蹤輔導'
      ],
      achievements: [
        '台中寒假科學營',
        '金門寒假科學營',
        '服務學校機構超過50間'
      ]
    },
    {
      id: 'innovation-consulting',
      title: '輔導創新創業',
      subtitle: '創業夢想實現夥伴',
      description: '提供創新創業全方位輔導服務，從概念發想到商業實現的完整支援體系。',
      icon: Lightbulb,
      color: 'from-purple-600 to-purple-700',
      features: [
        '創業計畫書撰寫指導',
        '商業模式設計優化',
        '市場分析與策略規劃',
        '資金募集協助',
        '團隊建構與管理',
        '產品開發與行銷'
      ],
      achievements: [
        '三天不睡覺團隊輔導',
        '蒂思科技創業支援',
        '成功輔導創業團隊10+'
      ]
    }
  ]

  const stats = [
    { icon: Target, number: '100+', label: '培訓教練數量' },
    { icon: BookOpen, number: '50+', label: '服務學校機構' },
    { icon: Award, number: '10+', label: '輔導創業團隊' },
    { icon: Users, number: '1000+', label: '受益學員' }
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 px-2"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            核心業務服務
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            專注於科技教育領域，提供專業的師資培訓、課程委辦和創業輔導服務
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {mainServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative"
            >
              {/* 錨點定位用的隱藏元素 */}
              <div id={service.id} className="absolute -top-24"></div>
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full">
                {/* Header */}
                <div className={`p-8 text-white bg-gradient-to-r ${service.color}`}>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{service.title}</h3>
                      <p className="text-white/90">{service.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-white/95">{service.description}</p>
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">服務特色</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">實績成果</h4>
                    <div className="space-y-2">
                      {service.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center text-green-600">
                          <Award className="w-4 h-4 mr-2" />
                          <span className="text-sm font-medium">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-12"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-900 mb-6 sm:mb-8">
            服務成果統計
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-white">
            <div className="flex items-center justify-center mb-4">
              <Rocket className="w-8 h-8 mr-3" />
              <h3 className="text-2xl font-bold">開始您的教育創新之旅</h3>
            </div>
            <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
              無論您是教育工作者、學校機構或創業團隊，我們都能為您提供專業的服務與支援
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector('#contact')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              立即諮詢服務
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services 