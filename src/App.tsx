import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Calendar, Globe, Award, BookOpen, Briefcase, GraduationCap } from 'lucide-react';

type Language = 'en' | 'zh';

export default function App() {
  const [lang, setLang] = useState<Language>('zh');
  const toggleLang = () => setLang(l => l === 'en' ? 'zh' : 'en');

  return (
    <div className="min-h-screen bg-[#EBE4DC] text-[#4A3B32] font-sans selection:bg-[#B8865C] selection:text-white p-4 md:p-8 lg:p-12">
      <div className="max-w-6xl mx-auto">
        {/* Top Bar */}
        <div className="flex justify-end mb-6">
          <button 
            onClick={toggleLang}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#D9C5B2] hover:border-[#B8865C] hover:text-[#B8865C] transition-colors duration-300 text-sm tracking-widest uppercase bg-[#F7F4F0] shadow-sm cursor-pointer"
          >
            <Globe size={16} />
            {lang === 'en' ? '中文' : 'EN'}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Profile, Summary, Skills */}
          <div className="lg:col-span-4 space-y-8">
            {/* Profile Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#F7F4F0] p-8 rounded-2xl shadow-sm border border-[#D9C5B2]/50 relative overflow-hidden"
            >
              {/* Photo Section - Landscape */}
              <div className="mb-8 flex justify-center lg:justify-start">
                <div className="w-full aspect-[16/9] rounded-t-[2rem] rounded-b-xl overflow-hidden border-4 border-[#EBE4DC] shadow-md relative group">
                  {/* Note: In a real environment, you would place your photo in the public folder as profile.jpg */}
                  <img 
                    src="/profile.jpg" 
                    alt="YAN Yihan" 
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      // Fallback to a warm-toned aesthetic placeholder if local image is not found
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop';
                    }}
                  />
                  <div className="absolute inset-0 bg-[#B8865C]/10 mix-blend-overlay pointer-events-none"></div>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-serif font-semibold tracking-tight mb-6 text-[#3E2A1D]">
                {lang === 'en' ? 'YAN Yihan' : '晏艺函'}
              </h1>
              
              <div className="space-y-3 text-sm text-[#8C7A6B] font-light">
                <div className="flex items-center gap-3"><Phone size={16} className="text-[#B8865C]" /> (+86) 153 5882 2292</div>
                <div className="flex items-center gap-3"><Mail size={16} className="text-[#B8865C]" /> yanyihan@bfsu.edu.cn</div>
                <div className="flex items-center gap-3"><Calendar size={16} className="text-[#B8865C]" /> 2002.10</div>
                <div className="flex items-center gap-3"><MapPin size={16} className="text-[#B8865C]" /> {lang === 'en' ? 'Beijing, China' : '现居北京'}</div>
              </div>
            </motion.div>

            {/* Summary Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-[#F7F4F0] p-8 rounded-2xl shadow-sm border border-[#D9C5B2]/50"
            >
              <h2 className="text-xl font-serif font-semibold mb-4 flex items-center gap-2 text-[#3E2A1D]">
                <BookOpen size={20} className="text-[#B8865C]" />
                {lang === 'en' ? 'Prologue' : '序言'}
              </h2>
              <p className="text-sm leading-relaxed font-light text-[#6B5A4E]">
                {lang === 'en' 
                  ? "A dedicated graduate student at Beijing Foreign Studies University with a strong background in international communication and foreign affairs. Demonstrated excellence in written and spoken English, diplomatic volunteering and think tank projects. Highly organized and detail-oriented."
                  : "英语流利，口笔译经验丰富，具备高水平外事翻译能力；多次参与智库国别研究，负责政策调研、文书审校及双语报告撰写；在校期间学生干部经历丰富，曾策划多项文化交流活动，熟悉外事礼仪，组织协调能力出色。"}
              </p>
            </motion.div>

            {/* Skills & Awards Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-[#4A3B32] text-[#F7F4F0] p-8 rounded-2xl shadow-md border border-[#3E2A1D]"
            >
              <h2 className="text-xl font-serif font-semibold mb-6 flex items-center gap-2">
                <Award size={20} className="text-[#D9C5B2]" />
                {lang === 'en' ? 'Core Competencies' : '核心竞争力'}
              </h2>
              
              <div className="space-y-6">
                {/* English Skills Highlight */}
                <div className="bg-[#3E2A1D] p-4 rounded-xl border border-[#5C4A3D]">
                  <h3 className="text-[#D9C5B2] font-serif italic mb-2 text-lg">
                    {lang === 'en' ? 'English Proficiency' : '英语能力'}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge text="CET-6 (653)" />
                    <Badge text="TEM-8 (87)" />
                    <Badge text="TEM-4 (93)" />
                    <Badge text={lang === 'en' ? 'CATTI Level II-Written' : 'CATTI二级笔译'} />
                    <Badge text="BEC Higher" />
                  </div>
                  <p className="text-sm font-light text-[#D9C5B2] leading-relaxed opacity-90">
                    {lang === 'en' ? 'Working proficiency. Excellence in written and spoken English, translation, and interpretation.' : '英语流利，口笔译经验丰富，具备高水平外事翻译能力。'}
                  </p>
                </div>

                <div>
                  <h3 className="text-[#D9C5B2] font-serif italic mb-2">
                    {lang === 'en' ? 'Other Languages' : '其他语言'}
                  </h3>
                  <p className="text-sm font-light text-[#EBE4DC] opacity-90">
                    {lang === 'en' ? 'Mandarin (Native), Japanese (Intermediate)' : '中文（母语），日语（二外，具备基本沟通能力）'}
                  </p>
                </div>

                <div>
                  <h3 className="text-[#D9C5B2] font-serif italic mb-2">
                    {lang === 'en' ? 'Key Awards' : '重要奖项'}
                  </h3>
                  <ul className="text-sm font-light text-[#EBE4DC] space-y-2 opacity-90">
                    <li className="flex gap-2">
                      <span className="text-[#B8865C]">✦</span>
                      <span>{lang === 'en' ? 'National Silver Award, 2023 “FLTRP Cup” National College Foreign Language Contest' : '“外研社·国才杯”理解当代中国全国大学生英语阅读国赛银奖、写作省二等奖'}</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#B8865C]">✦</span>
                      <span>{lang === 'en' ? 'First Prize, National English Competition for College Students (NECCS)' : '全国大学生英语竞赛（NECCS）一等奖'}</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-[#D9C5B2] font-serif italic mb-2">
                    {lang === 'en' ? 'Technical Skills' : '其他技能'}
                  </h3>
                  <p className="text-sm font-light text-[#EBE4DC] opacity-90">
                    {lang === 'en' ? 'Microsoft Office (Level II), Xiumi, 135 Editor, CapCut, event photography' : '计算机二级(Microsoft Office)，秀米/135编辑器，剪映，宣报摄影'}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Experience & Education */}
          <div className="lg:col-span-8 space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={lang}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                {/* Education Section */}
                <section className="bg-[#F7F4F0] p-8 md:p-10 rounded-2xl shadow-sm border border-[#D9C5B2]/50">
                  <h2 className="text-2xl font-serif font-semibold mb-8 flex items-center gap-3 text-[#3E2A1D] border-b border-[#D9C5B2] pb-4">
                    <GraduationCap size={24} className="text-[#B8865C]" />
                    {lang === 'en' ? 'Academic Foundation' : '教育经历'}
                  </h2>
                  <div className="space-y-10">
                    <EduItem 
                      degree={lang === 'en' ? 'Master of Arts in Foreign Linguistics and Applied Linguistics' : '文学硕士 — 外国语言学及应用语言学'}
                      school={lang === 'en' ? 'Beijing Foreign Studies University' : '北京外国语大学'}
                      date={lang === 'en' ? '2025.09 - Present' : '2025.09 - 至今'}
                      location={lang === 'en' ? 'Beijing, China' : '北京'}
                      details={lang === 'en' ? [
                        'Second-Class Academic Scholarship for Graduate Students',
                        'Class Committee Member, Teaching Assistant, Academic Dept. Member of Graduate Student Union',
                        'Coursework: Simultaneous Interpretation, Basic Two-way Translation, C-E Comparative Study'
                      ] : [
                        '班委、助管、校研究生会学术部部员',
                        '研究生学业奖学金（二等）',
                        '选修同声传译、基础双向笔译、汉英语言对比研究'
                      ]}
                    />
                    <EduItem 
                      degree={lang === 'en' ? 'Bachelor of Arts in English Education' : '文学学士 — 英语（师范）'}
                      school={lang === 'en' ? 'Yangzhou University' : '扬州大学'}
                      date="2021.09 - 2025.06"
                      location={lang === 'en' ? 'Jiangsu, China' : '江苏'}
                      details={lang === 'en' ? [
                        'Dean’s Scholarship, First-Class Academic Scholarship',
                        'Class Monitor, Assistant Class Teacher, Vice President of University Media Center',
                        'Coursework: Intercultural Communication, History of Western Civilization, Interpretation'
                      ] : [
                        '班长、班助、校融媒体中心副主席',
                        '院长奖学金、学业奖学金（一等）',
                        '选修跨文化交际、西方文明史、口译'
                      ]}
                    />
                    <EduItem 
                      degree={lang === 'en' ? 'Student Cultural Exchange Programme' : '交流访学'}
                      school={lang === 'en' ? 'University of Tokyo & Meiji University' : '东京大学、明治大学'}
                      date="2025.01 - 2025.02"
                      location={lang === 'en' ? 'Tokyo, Japan' : '东京'}
                      details={lang === 'en' ? [
                        'Scholarship for Overseas Cultural Exchange',
                        'Served as English simultaneous interpreter for the closing speech'
                      ] : [
                        '江苏省大学生海外文化交流奖学金',
                        '担任闭幕致辞英语同传译员'
                      ]}
                    />
                  </div>
                </section>

                {/* Experience Section */}
                <section className="bg-[#F7F4F0] p-8 md:p-10 rounded-2xl shadow-sm border border-[#D9C5B2]/50">
                  <h2 className="text-2xl font-serif font-semibold mb-8 flex items-center gap-3 text-[#3E2A1D] border-b border-[#D9C5B2] pb-4">
                    <Briefcase size={24} className="text-[#B8865C]" />
                    {lang === 'en' ? 'Practical Engagements' : '实践经历'}
                  </h2>
                  <div className="space-y-10">
                    {/* 1. 北京国际科技合作中心 */}
                    <ExpItem 
                      role={lang === 'en' ? "Staff of the Ninth Technology Diplomats' Innovation Resources Matchmaking Event" : '第九届科技外交官创新资源对接活动志愿者'}
                      org={lang === 'en' ? 'Beijing International Cooperation Center of Science and Technology' : '北京国际科技合作中心'}
                      date="2025.11 - 2025.12"
                      location={lang === 'en' ? 'Beijing, China' : '北京'}
                      details={lang === 'en' ? [
                        { label: 'Interpretation', text: 'Served as an interpreter (EN/CN) for attendees of the matchmaking event.' },
                        { label: 'Guest Reception', text: 'Coordinated international guest reception, agenda briefings, and venue logistics to ensure smooth event operation.' }
                      ] : [
                        { label: '翻译接待', text: '在中心主办的科技外交官创新资源对接活动中担任随行中英翻译；' },
                        { label: '活动协调', text: '协助外宾接待引导、议程沟通和会场准备工作，确保活动有序开展。' }
                      ]}
                    />

                    {/* 2. 北京市教育科学研究院高等教育研究所 */}
                    <ExpItem 
                      role={lang === 'en' ? 'Research Assistant' : '科研助理'}
                      org={lang === 'en' ? 'Beijing Academy of Educational Sciences' : '北京市教育科学研究院高等教育研究所'}
                      date="2025.09 - 2025.12"
                      location={lang === 'en' ? 'Beijing, China' : '北京'}
                      details={lang === 'en' ? [
                        { label: 'Policy Research', text: 'Conducted case studies on Canada’s policies and practices in cultivating innovative talents.' },
                        { label: 'Document Compiling', text: 'Contributed 1 investigation report and relevant research materials to a project supported by the National Social Science Fund of China and the Beijing Municipal Education Commission.' }
                      ] : [
                        { label: '国别研究', text: '围绕加拿大拔尖创新人才培养相关政策和实践开展案例研究，形成专题分析报告；' },
                        { label: '报告撰写', text: '为2025年国家社会科学基金项目、北京市教委委托课题撰写课题支撑材料，为后续北京市推进青少年拔尖创新人才培养相关政策研制提供有效参考。' }
                      ]}
                    />

                    {/* 3. 新浪·微博校园 */}
                    <ExpItem 
                      role={lang === 'en' ? 'Campus Ambassador' : '江苏渠道 · 校园大使'}
                      org={lang === 'en' ? 'Sina Weibo Campus' : '新浪·微博校园'}
                      date="2023.06 - 2024.08"
                      location={lang === 'en' ? 'Jiangsu, China' : '江苏'}
                      details={lang === 'en' ? [
                        { label: 'Event Management', text: 'Led the university team in conceptualizing and executing large-scale brand campaigns, managing full-cycle project delivery.' },
                        { label: 'Promotion & Engagement', text: 'Orchestrated online and offline marketing for 2+ cultural events with 500+ participants each, significantly enhancing brand reputation on campus.' }
                      ] : [
                        { label: '创意策划', text: '作为负责人带领本校微博学生团队策划微博校园品牌系列活动，将创意落地执行；' },
                        { label: '活动推广', text: '收集制作物料并开展线上+线下校园双渠道推广，组织过“我为母校赢西瓜”等2场超500人参加的校园公益文化活动，提升了微博校园在学生群体中的口碑和知名度。' }
                      ]}
                    />

                    {/* 4. 扬州大学苏丹研究中心 */}
                    <ExpItem 
                      role={lang === 'en' ? 'Research Assistant Intern' : '实习科研助理'}
                      org={lang === 'en' ? 'Sudan Research Center, Yangzhou University' : '扬州大学苏丹研究中心'}
                      date="2023.04 - 2023.05"
                      location={lang === 'en' ? 'Jiangsu, China' : '江苏'}
                      details={lang === 'en' ? [
                        { label: 'Country Study', text: 'Assisted the center in collecting data on the development of basic education in Chad to better understand children\'s education in the Sudan region.' },
                        { label: 'Report Writing', text: 'Assisted in compiling the report on the current status of national education in Sudan and surrounding areas, providing supporting materials for key projects of the Jiangsu Provincial Department of Education.' }
                      ] : [
                        { label: '国别研究', text: '为更好地了解苏丹地区儿童教育情况，协助中心搜集乍得基础教育发展情况及相关数据；' },
                        { label: '报告撰写', text: '协助编写苏丹及周边地区国别教育现状报告，为江苏省教育厅重点课题提供支撑材料。' }
                      ]}
                    />

                    {/* 5. 上海译国译民翻译服务有限公司 */}
                    <ExpItem 
                      role={lang === 'en' ? 'Translation Intern' : '翻译实习生'}
                      org={lang === 'en' ? 'Shanghai YGYM Translation Services Co., Ltd.' : '上海译国译民翻译服务有限公司'}
                      date="2025.01 - 2025.02"
                      location={lang === 'en' ? 'Shanghai, China' : '上海'}
                      details={lang === 'en' ? [
                        { label: 'Translation Training', text: 'Participated in systematic translation skills training, learning professional translation processes, bilingual conversion techniques, and common stylistics translation norms.' },
                        { label: 'Practical Operation', text: 'Completed multiple Chinese-English translation tasks under the guidance of corporate mentors, enhancing translation efficiency and quality in real work scenarios.' }
                      ] : [
                        { label: '翻译培训', text: '参与翻译技能系统培训，学习专业翻译流程、双语转换技巧及常见文体翻译规范；' },
                        { label: '技能实操', text: '跟随企业导师完成多项中英互译实践任务，增强了真实工作场景下的翻译效率与质量。' }
                      ]}
                    />

                    {/* 6. 美国大学生大运河文化交流活动 */}
                    <ExpItem 
                      role={lang === 'en' ? 'Cultural Volunteer' : '文化志愿者'}
                      org={lang === 'en' ? 'American College Students Grand Canal Cultural Exchange Event' : '美国大学生大运河文化交流活动'}
                      date="2024.12"
                      location={lang === 'en' ? 'Jiangsu, China' : '江苏'}
                      details={lang === 'en' ? [
                        { label: 'Event Planning', text: 'Formulated the schedule for cultural exchange activities with leading teachers and planned intangible cultural heritage activities with Chinese characteristics.' },
                        { label: 'Cultural Exchange', text: 'Communicated closely with American college students, explained the differences between Chinese and Western cultural thoughts, and took photos of the event.' }
                      ] : [
                        { label: '活动策划', text: '与带队老师制定文化交流活动日程安排，策划中国特色非遗文化活动；' },
                        { label: '文化交流', text: '与美国大学生近距离交流，讲述中西文化思想差异，并负责拍摄活动现场照片。' }
                      ]}
                    />
                  </div>
                </section>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Footer with Quote */}
        <footer className="mt-24 mb-12 text-center">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="inline-block"
          >
            <p className="font-serif italic text-[#8C7A6B] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              {lang === 'en' 
                ? "“There were little daily miracles, illuminations, matches struck unexpectedly in the dark.”"
                : "“生活中总有那些微小的日常奇迹，那些启明时刻，那些在黑暗中意外划出的火柴光。”"}
            </p>
            <p className="text-sm text-[#B8865C] mt-4 font-serif tracking-wide">
              {lang === 'en' ? '— Virginia Woolf, To the Lighthouse' : '—— 弗吉尼亚·伍尔夫《到灯塔去》'}
            </p>
          </motion.div>
        </footer>
      </div>
    </div>
  );
}

function Badge({ text }: { text: string }) {
  return (
    <span className="px-2.5 py-1 bg-[#5C4A3D] text-[#EBE4DC] text-xs font-medium rounded-md border border-[#8C7A6B]">
      {text}
    </span>
  );
}

function EduItem({ degree, school, date, location, details }: { degree: string, school: string, date: string, location: string, details: string[] }) {
  return (
    <div className="relative pl-6 border-l-2 border-[#D9C5B2] hover:border-[#B8865C] transition-colors duration-300">
      <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#F7F4F0] border-2 border-[#B8865C]" />
      <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-1">
        <h3 className="text-xl font-serif font-semibold text-[#3E2A1D]">{school}</h3>
        <span className="text-sm font-mono text-[#8C7A6B] mt-1 md:mt-0 bg-[#EBE4DC] px-2 py-0.5 rounded">{date}</span>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-3">
        <div className="text-[15px] font-medium text-[#6B5A4E]">{degree}</div>
        <div className="text-sm text-[#8C7A6B] italic">{location}</div>
      </div>
      <ul className="space-y-1.5">
        {details.map((detail, i) => (
          <li key={i} className="text-[14px] font-light text-[#6B5A4E] flex gap-2">
            <span className="text-[#B8865C] select-none">•</span>
            <span>{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ExpItem({ role, org, date, location, details }: { role: string, org: string, date: string, location: string, details: {label: string, text: string}[] }) {
  return (
    <div className="relative pl-6 border-l-2 border-[#D9C5B2] hover:border-[#B8865C] transition-colors duration-300">
      <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#F7F4F0] border-2 border-[#B8865C]" />
      <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-1">
        <h3 className="text-xl font-serif font-semibold text-[#3E2A1D]">{org}</h3>
        <span className="text-sm font-mono text-[#8C7A6B] mt-1 md:mt-0 bg-[#EBE4DC] px-2 py-0.5 rounded">{date}</span>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-3">
        <div className="text-[15px] font-medium text-[#6B5A4E]">{role}</div>
        <div className="text-sm text-[#8C7A6B] italic">{location}</div>
      </div>
      <ul className="space-y-2.5">
        {details.map((detail, i) => (
          <li key={i} className="text-[14px] font-light text-[#6B5A4E] flex gap-2 leading-relaxed">
            <span className="text-[#B8865C] select-none mt-0.5">•</span>
            <div>
              <strong className="font-medium text-[#4A3B32]">{detail.label}: </strong>
              {detail.text}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
