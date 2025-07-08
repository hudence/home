'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MessageCircle, MapPin, Clock, User, Send, Building } from 'lucide-react'

const Contact = () => {
  const contactInfo = {
    company: '艾登星科技教育有限公司',
    slogan: '教創心，育恆心',
    coo: {
      name: '陳其傑',
      title: '營運長 (COO)',
      phone: '0979-251-229',
      email: 'peterchen223@gmail.com',
      line: '19558335896'
    },
    services: [
      '教練培訓營',
      '委辦課程或營隊',
      '輔導創新創業'
    ]
  }

  const contactMethods = [
    {
      icon: Phone,
      title: '電話聯絡',
      value: contactInfo.coo.phone,
      description: '營業時間內直接通話諮詢',
      action: `tel:${contactInfo.coo.phone}`,
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Mail,
      title: 'Email',
      value: contactInfo.coo.email,
      description: '詳細需求請來信說明',
      action: `mailto:${contactInfo.coo.email}`,
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: MessageCircle,
      title: 'Line',
      value: `ID: ${contactInfo.coo.line}`,
      description: '即時訊息快速回覆',
      action: `https://line.me/ti/p/${contactInfo.coo.line}`,
      color: 'from-emerald-500 to-emerald-600'
    }
  ]

  const businessHours = [
    { day: '週一至週五', time: '09:00 - 18:00' },
    { day: '週六', time: '09:00 - 12:00' },
    { day: '週日', time: '休息' }
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            與我們聯絡
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            歡迎聯絡我們討論您的教育需求，我們將為您提供專業的諮詢服務
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8"
            >
              <div className="flex items-center mb-6">
                <Building className="w-8 h-8 text-blue-400 mr-3" />
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {contactInfo.company}
                  </h3>
                  <p className="text-blue-300">{contactInfo.slogan}</p>
                </div>
              </div>
              
              <div className="bg-white/5 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <User className="w-6 h-6 text-blue-400 mr-3" />
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      {contactInfo.coo.name}
                    </h4>
                    <p className="text-gray-300">{contactInfo.coo.title}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center text-gray-300">
                    <Phone className="w-4 h-4 mr-3" />
                    <span>{contactInfo.coo.phone}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Mail className="w-4 h-4 mr-3" />
                    <span>{contactInfo.coo.email}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MessageCircle className="w-4 h-4 mr-3" />
                    <span>Line ID: {contactInfo.coo.line}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.action}
                  target={method.title === 'Line' ? '_blank' : '_self'}
                  rel={method.title === 'Line' ? 'noopener noreferrer' : ''}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className={`block bg-gradient-to-r ${method.color} rounded-xl p-6 text-white hover:shadow-lg transition-all duration-300`}
                >
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                      <method.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold mb-1">{method.title}</h4>
                      <p className="text-white/90 text-sm mb-1">{method.value}</p>
                      <p className="text-white/70 text-xs">{method.description}</p>
                    </div>
                    <Send className="w-5 h-5 opacity-70" />
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8"
            >
              <div className="flex items-center mb-6">
                <Clock className="w-6 h-6 text-blue-400 mr-3" />
                <h3 className="text-xl font-bold text-white">營業時間</h3>
              </div>
              <div className="space-y-3">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-300">{schedule.day}</span>
                    <span className={`font-medium ${
                      schedule.day === '週日' ? 'text-red-400' : 'text-green-400'
                    }`}>
                      {schedule.time}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              諮詢表單
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    姓名 *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="請輸入您的姓名"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    聯絡電話 *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="請輸入聯絡電話"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="請輸入Email地址"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  感興趣的服務
                </label>
                <div className="space-y-2">
                  {contactInfo.services.map((service, index) => (
                    <label key={index} className="flex items-center">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="ml-2 text-gray-700">{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  詳細需求 *
                </label>
                <textarea
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="請詳細描述您的需求，我們會盡快回覆您..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                送出諮詢
              </motion.button>
            </form>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-600 text-center">
                ✨ 提交表單後，我們會在 24 小時內回覆您
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-white mb-4">
              立即開始您的教育創新計畫
            </h3>
            <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
              無論是師資培訓、課程委辦或創業輔導，我們都能為您提供專業服務
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href={`tel:${contactInfo.coo.phone}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                立即致電
              </motion.a>
              <motion.a
                href={`mailto:${contactInfo.coo.email}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200 flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                發送郵件
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact 