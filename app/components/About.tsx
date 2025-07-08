'use client'

import { motion } from 'framer-motion'
import { Users, Award, Target, Heart, Trophy, Calendar, User, Mail, Phone, Lightbulb } from 'lucide-react'

const About = () => {
  const teamMembers = [
    {
      name: '雷沂臻',
      position: '執行長',
      description: '國立台北科技大學資訊與財經管理系畢業，負責教練之教育訓練、參與各項活動、課程並溝通協調各項工作推展',
      expertise: ['教育科技', '課程設計', '團隊領導'],
      avatar: '👩‍💼'
    },
    {
      name: '陳其傑',
      position: '營運長',
      description: '國立台中科技大學保險金融學系畢業，負責課程設計、招生以及，主要為輔導參加競賽、考取證照',
      expertise: ['營運管理', '業務拓展', '客戶關係'],
      avatar: '👨‍💼',
      contact: {
        phone: '0979-251-229',
        email: 'peterchen223@gmail.com',
        line: '19558335896'
      }
    },
    {
      name: '楊上賢',
      position: '技術長',
      description: '國立彰化師範大學資訊工程系碩士，負責洽談課程，開發教具內容及設計相關課程',
      expertise: ['程式開發', '教具設計', '技術研發'],
      avatar: '👨‍💻'
    },
    {
      name: '吳承恩',
      position: '資深教練',
      description: '專精於程式設計教學，致力於培養學生的邏輯思維與創造力',
      expertise: ['程式教學', '邏輯思維', '創意發想'],
      avatar: '👨‍🏫'
    },
    {
      name: '吳承愛',
      position: '資深教練',
      description: '擁有豐富的教學經驗，專注於啟發學生對科技的興趣與熱忱',
      expertise: ['科技教育', '學習引導', '課程規劃'],
      avatar: '👩‍🏫'
    }
  ]

  const awards = [
    {
      year: '2024',
      title: '教育部青年署 U-Start第一階段入選團隊',
      description: '艾登星致力於推廣科技教育，專注於提供優質的科技教育為核心目標，並榮獲113年度「U-start創新創業計畫文創教育類第一階段」的創業補助',
      category: '創業獎項',
      icon: Trophy
    },
    {
      year: '2022',
      title: '宜蘭新創力競賽科技應用類學生組冠軍',
      description: '宜蘭縣政府與國立宜蘭大學聯手舉辦的「宜！蘭新創力競賽」，經過產官學各界激烈評選之後，艾登星科技教育有限公司榮獲科技應用類學生組冠軍',
      category: '競賽獎項',
      icon: Trophy
    }
  ]

  const achievements = [
    {
      icon: Users,
      number: '100+',
      label: '培訓教練',
      description: '專業師資培訓'
    },
    {
      icon: Award,
      number: '50+',
      label: '合作機構',
      description: '學校與教育單位'
    },
    {
      icon: Target,
      number: '1000+',
      label: '受益學員',
      description: '累計服務人數'
    },
    {
      icon: Heart,
      number: '5',
      label: '服務年資',
      description: '專業教育經驗'
    }
  ]

  const companyValues = [
    {
      title: '教創心',
      description: '以創新的教學方法，激發學習者的潛能與熱情',
      icon: '🎯'
    },
    {
      title: '育恆心',
      description: '堅持教育理念，培育學員持續學習的恆心',
      icon: '💪'
    }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            關於艾登星
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            艾登星科技教育有限公司致力於推動科技教育創新，培養未來人才
          </p>
        </motion.div>

        {/* Company Values */}
        <div id="team-intro" className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">團隊簡介</h3>
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                在108課綱改革的浪潮中，科技教育被正式納入核心課程。城鄉之間的資源落差極大，尤其在偏鄉地區，科技師資嚴重不足，讓許多孩子無法獲得應有的學習機會。
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                艾登星科技教育有限公司因此而生，秉持著<strong className="text-blue-600">「讓每個孩子都能平等接觸科技教育」</strong>的初心，致力於縮短資訊落差與教育不平等的距離。
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                我們是充滿教育熱忱與創新創意的科技教育團隊，致力於科技師資培訓及創業輔導，並開發程式設計、創客、AI應用等多元學習體驗活動。我們不僅帶領大小朋友一起探索科技奇妙旅程，並激發他們的科技潛力，發掘潛藏的新星，培育他們成長為引領世界的超新星。
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                我們專注於培育在地科技人才，與大專院校、教育機構合作開辦師資培訓營，培養有熱忱的青年成為科技講師，並透過科技課程與科學營隊將知識實際應用。
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {companyValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-6xl mb-4 text-center">{value.icon}</div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  {value.title}
                </h4>
                <p className="text-gray-600 text-center leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Members */}
        <div id="team-members" className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">團隊成員</h3>
            <p className="text-lg text-gray-600">
              我們的核心團隊擁有豐富的教育與科技背景
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-6">
                  <div className="text-6xl">{member.avatar}</div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">
                      {member.name}
                    </h4>
                    <p className="text-lg text-blue-600 font-semibold mb-3">
                      {member.position}
                    </p>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {member.description}
                    </p>
                    
                    {/* Expertise */}
                    <div className="mb-4">
                      <h5 className="text-sm font-semibold text-gray-900 mb-2">專業領域</h5>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Contact Info */}
                    {member.contact && (
                      <div className="space-y-2">
                        <h5 className="text-sm font-semibold text-gray-900">聯絡方式</h5>
                        <div className="space-y-1 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Phone className="w-4 h-4 mr-2" />
                            {member.contact.phone}
                          </div>
                          <div className="flex items-center">
                            <Mail className="w-4 h-4 mr-2" />
                            {member.contact.email}
                          </div>
                          <div className="flex items-center">
                            <User className="w-4 h-4 mr-2" />
                            Line ID: {member.contact.line}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Awards */}
        <div id="awards" className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">獲獎記事</h3>
            <p className="text-lg text-gray-600">
              我們的努力獲得各界肯定與支持
            </p>
          </motion.div>

          <div className="space-y-6">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center">
                    <award.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-3">
                      <span className="text-lg font-bold text-blue-600">{award.year}</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                        {award.category}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      {award.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {award.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-8 lg:p-12"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            我們的成就
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-900 font-medium mb-1">
                  {achievement.label}
                </div>
                <div className="text-sm text-gray-600">
                  {achievement.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 委辦課程營隊與輔導團隊詳細說明 */}
        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">委辦課程營隊與輔導團隊</h3>
            <p className="text-lg text-gray-600">
              深入校園與社區，將科技教育資源帶至每一個角落
            </p>
          </motion.div>

          {/* 委辦課程營隊 */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg mb-8"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900">委辦課程營隊</h4>
              </div>

              {/* 重點合作項目 */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
                  <h5 className="text-lg font-bold text-gray-900 mb-3">台中寒假科學營</h5>
                  <p className="text-gray-700 mb-3">
                    台中市教育局主辦，科丁聯盟協會及文雅國小、吉峰國小、瑞井國小、樹義國小協辦，
                    為期五個半天的冬令營活動，由艾登星的科丁教練擔任三校的授課教練。
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">台中市教育局</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">科丁聯盟</span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6">
                  <h5 className="text-lg font-bold text-gray-900 mb-3">金門寒假科學營</h5>
                  <p className="text-gray-700 mb-3">
                    科學營內容包含程式設計Scratch、不插電程式邏輯、3D列印理論與實作以及生活魔法等課程，
                    課程進行當中更穿插邏輯遊戲、大地遊戲，讓金門家扶中心的小朋友收穫滿滿。
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">金門家扶</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">3D列印</span>
                  </div>
                </div>
              </div>

              {/* 營隊課程類型 */}
              <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
                <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl">
                  <div className="text-3xl mb-2">🧩</div>
                  <h6 className="font-bold text-gray-900 mb-1">ScratchJr</h6>
                  <p className="text-sm text-gray-600">幼兒程式設計</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
                  <div className="text-3xl mb-2">🎮</div>
                  <h6 className="font-bold text-gray-900 mb-1">Scratch</h6>
                  <p className="text-sm text-gray-600">積木程式設計</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
                  <div className="text-3xl mb-2">🌲</div>
                  <h6 className="font-bold text-gray-900 mb-1">森林嚮導</h6>
                  <p className="text-sm text-gray-600">邏輯思維訓練</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                  <div className="text-3xl mb-2">🏠</div>
                  <h6 className="font-bold text-gray-900 mb-1">智慧家庭</h6>
                  <p className="text-sm text-gray-600">IoT應用實作</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl">
                  <div className="text-3xl mb-2">🎨</div>
                  <h6 className="font-bold text-gray-900 mb-1">客製化設計</h6>
                  <p className="text-sm text-gray-600">多元主題營隊</p>
                </div>
              </div>

              {/* 客製化營隊詳情 */}
              <div className="mt-8 space-y-6">
                <div className="p-6 bg-gray-50 rounded-xl">
                  <h5 className="text-lg font-bold text-gray-900 mb-4">客製化設計營隊</h5>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <h6 className="font-semibold text-blue-600 mb-2">參賽、取證營隊</h6>
                      <p className="text-gray-700">開設假日資訊證照班，教授中打、英打及Scratch，輔導學童考取TQC證照並設計打字遊戲</p>
                    </div>
                    <div>
                      <h6 className="font-semibold text-purple-600 mb-2">創課營隊</h6>
                      <p className="text-gray-700">針對具備初階程式基礎的學員，推出彈珠台、智慧鞋墊、AIOT、Arduino、Python等跨域實作課程</p>
                    </div>
                    <div>
                      <h6 className="font-semibold text-green-600 mb-2">跨領域多元科學營</h6>
                      <p className="text-gray-700">結合Scratch、創客、科學實驗，開設多日型科學營，深受學童喜愛</p>
                    </div>
                  </div>
                </div>

                {/* 更多營隊實績 */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-4">
                    <h6 className="font-bold text-cyan-900 mb-2">🎯 2024南台中家扶中心科學營</h6>
                    <p className="text-cyan-800 text-sm mb-2">在台中科技大學舉辦，結合Microbit編程機器人</p>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-cyan-100 text-cyan-700 text-xs rounded-full">Scratch</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">機器人</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-4">
                    <h6 className="font-bold text-emerald-900 mb-2">🏔️ 蘇澳假日科學營</h6>
                    <p className="text-emerald-800 text-sm mb-2">在蘇澳芥菜種愛鄰協會舉辦公益科學營</p>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-full">3D列印</span>
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">姓名鑰匙圈</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl p-4">
                    <h6 className="font-bold text-violet-900 mb-2">🎨 員林假日科學營</h6>
                    <p className="text-violet-800 text-sm mb-2">與手把手科技合作，多元課程設計</p>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-violet-100 text-violet-700 text-xs rounded-full">森林嚮導</span>
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">解碼專家</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-4">
                    <h6 className="font-bold text-amber-900 mb-2">🔥 田中3D列印科學營</h6>
                    <p className="text-amber-800 text-sm mb-2">彰化家扶中心田中服務處，雷雕技術體驗</p>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-amber-100 text-amber-700 text-xs rounded-full">雷雕設計</span>
                      <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-full">手作體驗</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-4">
                    <h6 className="font-bold text-rose-900 mb-2">🌟 台北青角3D列印科學營</h6>
                    <p className="text-rose-800 text-sm mb-2">自走車專案，分組競賽培養團隊精神</p>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-rose-100 text-rose-700 text-xs rounded-full">自走車</span>
                      <span className="px-2 py-1 bg-pink-100 text-pink-700 text-xs rounded-full">團隊合作</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-4">
                    <h6 className="font-bold text-teal-900 mb-2">🎮 桃園家扶中心暑假科學營</h6>
                    <p className="text-teal-800 text-sm mb-2">與科丁聯盟、聯成電腦三方合作</p>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-teal-100 text-teal-700 text-xs rounded-full">3D模組</span>
                      <span className="px-2 py-1 bg-cyan-100 text-cyan-700 text-xs rounded-full">程式設計</span>
                    </div>
                  </div>
                </div>

                {/* 學校合作課程 */}
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6">
                  <h5 className="text-lg font-bold text-indigo-900 mb-4">🏫 學校合作社團課程</h5>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h6 className="font-semibold text-indigo-800 mb-2">常態性社團課程</h6>
                      <ul className="text-indigo-700 text-sm space-y-1">
                        <li>• 篤行國小程式設計社團課</li>
                        <li>• 旭光國小暑期社團課</li>
                        <li>• 宜蘭家扶中心暑期班</li>
                      </ul>
                    </div>
                    <div>
                      <h6 className="font-semibold text-purple-800 mb-2">特色專案課程</h6>
                      <ul className="text-purple-700 text-sm space-y-1">
                        <li>• GMCC世界數學科丁大賽輔導</li>
                        <li>• Webduino遙控自走車課程</li>
                        <li>• AI生活應用課程</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 服務統計 */}
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl p-6">
                  <h5 className="text-lg font-bold mb-4 text-center">📊 委辦營隊服務成果</h5>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-400 mb-1">19+</div>
                      <div className="text-sm text-gray-300">營隊類型</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-400 mb-1">50+</div>
                      <div className="text-sm text-gray-300">合作機構</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-400 mb-1">1000+</div>
                      <div className="text-sm text-gray-300">受益學童</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-orange-400 mb-1">5年+</div>
                      <div className="text-sm text-gray-300">服務經驗</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 輔導創新創業團隊 */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900">輔導創新創業團隊</h4>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* 三天不睡覺 */}
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center text-white text-lg font-bold">
                      三天
                    </div>
                    <div>
                      <h5 className="text-lg font-bold text-gray-900 mb-1">
                        「三天不睡覺」創新團隊
                      </h5>
                      <p className="text-sm text-gray-600">AI情緒管理與永續消費</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-3 text-sm leading-relaxed">
                    跨校跨域青年組成的創新團隊，專注情緒管理與永續消費的連動關係，
                    透過繪畫測驗AI辨識技術協助人們管理情緒，改變非理性消費行為。
                  </p>

                  <div className="mb-3">
                    <h6 className="font-semibold text-gray-900 mb-2 text-sm">專業領域</h6>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">AI演算法</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">心理健康</span>
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">大數據分析</span>
                    </div>
                  </div>

                  <div>
                    <h6 className="font-semibold text-gray-900 mb-2 text-sm">獲獎成果</h6>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full">資訊創新競賽</span>
                      <span className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded-full">創業競賽</span>
                      <span className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full">數位人文提案</span>
                    </div>
                  </div>
                </div>

                {/* 蒂思科技 */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white text-lg font-bold">
                      Di
                    </div>
                    <div>
                      <h5 className="text-lg font-bold text-gray-900 mb-1">
                        蒂思科技 (Di-Shoes)
                      </h5>
                      <p className="text-sm text-gray-600">遊戲智慧鞋墊開發團隊</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-3 text-sm leading-relaxed">
                    由全國跨校系大學生組成的科技團隊，將簡單的踩踏動作結合遊戲，
                    以 Double i 的方式，製作兼具有趣（Interesting）和智慧（Intelligent）的遊戲智慧鞋墊。
                  </p>

                  <div className="mb-3">
                    <h6 className="font-semibold text-gray-900 mb-2 text-sm">核心技術</h6>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">智慧鞋墊</span>
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">3D列印</span>
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">創客技術</span>
                    </div>
                  </div>

                  <div>
                    <h6 className="font-semibold text-gray-900 mb-2 text-sm">應用領域</h6>
                    <p className="text-gray-600 text-xs">
                      協助全國科技教育推廣，結合創客機台及3D列印技術，獲獎無數
                    </p>
                  </div>
                </div>

                {/* 7JM&S */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl flex items-center justify-center text-white text-lg font-bold">
                      7JM
                    </div>
                    <div>
                      <h5 className="text-lg font-bold text-gray-900 mb-1">
                        7JM&S 科技教育團隊
                      </h5>
                      <p className="text-sm text-gray-600">數學思維與程式邏輯培訓</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-3 text-sm leading-relaxed">
                    新創科技教育團隊，由一群對於科技教育充滿熱忱與創意的全國跨校系大學生組合。
                    教練兼具數學與程式設計的專業，訓練國小孩童的數學思維能力和程式設計邏輯能力。
                  </p>

                  <div className="mb-3">
                    <h6 className="font-semibold text-gray-900 mb-2 text-sm">教學專長</h6>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">數學思維</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">程式邏輯</span>
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">科技教育</span>
                    </div>
                  </div>

                  <div>
                    <h6 className="font-semibold text-gray-900 mb-2 text-sm">教育目標</h6>
                    <p className="text-gray-600 text-xs">
                      拓寬學童視野，增強競爭力，培養未來科技人才
                    </p>
                  </div>
                </div>

                {/* 惢咖啡 */}
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-amber-600 rounded-xl flex items-center justify-center text-white text-lg font-bold">
                      惢
                    </div>
                    <div>
                      <h5 className="text-lg font-bold text-gray-900 mb-1">
                        惢咖啡 (RuìCafé)
                      </h5>
                      <p className="text-sm text-gray-600">飲調教育與情感療癒</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-3 text-sm leading-relaxed">
                    由跨校系的大學生所組成的飲調教育團隊，秉持著「用心、細心、暖心」
                    將咖啡創新延伸到飲調，讓飲調的創意持續擴大影響力。
                  </p>

                  <div className="mb-3">
                    <h6 className="font-semibold text-gray-900 mb-2 text-sm">服務理念</h6>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-full">用心</span>
                      <span className="px-2 py-1 bg-amber-100 text-amber-700 text-xs rounded-full">細心</span>
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full">暖心</span>
                    </div>
                  </div>

                  <div>
                    <h6 className="font-semibold text-gray-900 mb-2 text-sm">課程內容</h6>
                    <p className="text-gray-600 text-xs">
                      創意飲調及製作咖啡，培養默契增進感情，為每個人製作專屬手沖咖啡
                    </p>
                  </div>
                </div>
              </div>

              {/* 團隊成果統計 */}
              <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                <h5 className="text-lg font-bold text-gray-900 mb-4 text-center">團隊輔導成果</h5>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600 mb-1">4+</div>
                    <div className="text-sm text-gray-600">輔導團隊</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">50+</div>
                    <div className="text-sm text-gray-600">參與成員</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 mb-1">10+</div>
                    <div className="text-sm text-gray-600">獲獎項目</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600 mb-1">3</div>
                    <div className="text-sm text-gray-600">專利申請</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 師資培訓營 */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900">師資培訓營</h4>
              </div>

              <div className="space-y-8">
                {/* 培訓理念 */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
                  <div className="text-center mb-6">
                    <h5 className="text-xl font-bold mb-3">培養有熱忱的青年成為科技講師，建立在地化師資網絡</h5>
                    <p className="text-white/90">
                      與大專院校、教育機構合作開辦師資培訓營，推動中台灣暑期科技教育
                    </p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Award className="w-8 h-8 text-white" />
                      </div>
                      <h6 className="text-lg font-bold mb-2">程式設計培訓</h6>
                      <p className="text-white/80">結合創客與AI應用，協助設計教材教具</p>
                    </div>
                    <div>
                      <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <h6 className="text-lg font-bold mb-2">在地化教學</h6>
                      <p className="text-white/80">以創新概念啟發孩童，使科技教育在地化</p>
                    </div>
                    <div>
                      <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Target className="w-8 h-8 text-white" />
                      </div>
                      <h6 className="text-lg font-bold mb-2">無限延伸</h6>
                      <p className="text-white/80">將科技影響力帶入校園與社區</p>
                    </div>
                  </div>
                </div>

                {/* 具體培訓營實績 */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-violet-600 rounded-xl flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-sm">陽明</span>
                      </div>
                      <div>
                        <h6 className="font-bold text-purple-900 text-lg">陽明高中教練培訓營</h6>
                        <p className="text-purple-700 text-sm">桃園市立陽明高中</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="bg-purple-100 rounded-lg p-3">
                        <h6 className="font-bold text-purple-800 text-sm mb-2">培訓內容</h6>
                        <ul className="text-purple-700 text-xs space-y-1">
                          <li>• Scratch程式設計課程</li>
                          <li>• 不插電程式課程</li>
                          <li>• 教學方法指導</li>
                          <li>• 課程設計實作</li>
                        </ul>
                      </div>
                      <div className="text-purple-700 text-xs">
                        <strong>成果：</strong>學員在培訓最後一天發表自己設計的課程，展現教學能力
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-sm">中科</span>
                      </div>
                      <div>
                        <h6 className="font-bold text-blue-900 text-lg">台中科技大學教練培訓營</h6>
                        <p className="text-blue-700 text-sm">國立臺中科技大學資管系</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="bg-blue-100 rounded-lg p-3">
                        <h6 className="font-bold text-blue-800 text-sm mb-2">專業培訓</h6>
                        <ul className="text-blue-700 text-xs space-y-1">
                          <li>• 專業Scratch教學技巧</li>
                          <li>• micro:bit與編程機器人</li>
                          <li>• 科技與生活應用整合</li>
                          <li>• 實作導向教學法</li>
                        </ul>
                      </div>
                      <div className="text-blue-700 text-xs">
                        <strong>特色：</strong>讓Scratch走出電腦，感受科技生活應用
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-sm">員林</span>
                      </div>
                      <div>
                        <h6 className="font-bold text-emerald-900 text-lg">員林教練培訓營</h6>
                        <p className="text-emerald-700 text-sm">彰化家扶中心員林服務處</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="bg-emerald-100 rounded-lg p-3">
                        <h6 className="font-bold text-emerald-800 text-sm mb-2">完整培訓</h6>
                        <ul className="text-emerald-700 text-xs space-y-1">
                          <li>• 24小時專業培訓課程</li>
                          <li>• 培訓期：110/09/25至12/25</li>
                          <li>• 實際授課實習機會</li>
                          <li>• 科丁教練顧問指導</li>
                        </ul>
                      </div>
                      <div className="text-emerald-700 text-xs">
                        <strong>實踐：</strong>培訓完成後實際為國小生授課
                      </div>
                    </div>
                  </div>
                </div>

                {/* 培訓課程內容與成果 */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-xl p-6">
                    <h6 className="text-lg font-bold text-slate-900 mb-4">📚 培訓課程內容</h6>
                    <div className="space-y-3">
                      <div className="flex items-center text-sm">
                        <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                        <span className="text-slate-700">Scratch視覺化程式設計教學</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                        <span className="text-slate-700">不插電程式邏輯思維訓練</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                        <span className="text-slate-700">教學方法論與課程設計</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                        <span className="text-slate-700">硬體整合：micro:bit、編程機器人</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                        <span className="text-slate-700">分齡教學與差異化指導</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <div className="w-3 h-3 bg-teal-500 rounded-full mr-3"></div>
                        <span className="text-slate-700">評量設計與教學回饋</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-6">
                    <h6 className="text-lg font-bold text-amber-900 mb-4">🏆 培訓成果與影響</h6>
                    <div className="space-y-3">
                      <div className="flex items-center text-sm">
                        <div className="w-3 h-3 bg-cyan-500 rounded-full mr-3"></div>
                        <span className="text-amber-800">培育超過100位認證教練</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <div className="w-3 h-3 bg-indigo-500 rounded-full mr-3"></div>
                        <span className="text-amber-800">合作大專院校資管系培訓</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <div className="w-3 h-3 bg-pink-500 rounded-full mr-3"></div>
                        <span className="text-amber-800">高中職少年教練培訓</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                        <span className="text-amber-800">家扶中心青少年培訓</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <div className="w-3 h-3 bg-lime-500 rounded-full mr-3"></div>
                        <span className="text-amber-800">推動中台灣暑期科技教育</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <div className="w-3 h-3 bg-emerald-500 rounded-full mr-3"></div>
                        <span className="text-amber-800">建立持續性師資網絡</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 培訓統計數據 */}
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl p-6">
                  <h6 className="text-lg font-bold mb-4 text-center">📊 師資培訓成果統計</h6>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-400 mb-1">3+</div>
                      <div className="text-sm text-gray-300">培訓營類型</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-400 mb-1">100+</div>
                      <div className="text-sm text-gray-300">培訓教練</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-400 mb-1">5+</div>
                      <div className="text-sm text-gray-300">合作院校</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-orange-400 mb-1">24hrs</div>
                      <div className="text-sm text-gray-300">專業培訓</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl font-bold mb-4">加入我們的教育革新之旅</h3>
            <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
              與艾登星一起，創造更美好的教育未來
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
              聯絡我們
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 