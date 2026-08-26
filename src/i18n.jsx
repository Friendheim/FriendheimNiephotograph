import { createContext, useContext, useEffect, useState } from 'react'

const LanguageContext = createContext(null)

// UI chrome strings (nav, buttons, headings, labels)
const UI = {
  en: {
    skip: 'Skip to content',
    navHome: 'Home',
    navWork: 'Work',
    navMap: 'Map',
    navEssay: 'Essay',
    navAbout: 'About',
    navContact: 'Contact',
    viewWork: 'View the work',
    contact: 'Contact',
    selectedFrames: 'Selected frames',
    allFrames: 'All frames →',
    noteFrom: 'A note from the photographer',
    moreAboutMe: 'More about me',
    portfolioEyebrow: 'Portfolio',
    selectedWork: 'Selected work',
    portfolioIntro: 'Frames from eight quiet series — click any image to read its story.',
    filterBy: 'Filter by category',
    viewSeries: 'View the series →',
    all: 'All',
    aboutEyebrow: 'About',
    aboutMe: 'About me',
    quietSeeing: 'A quiet way of seeing',
    alongTheWay: 'Along the way',
    inTheBag: 'In the bag',
    avatarNote: 'Portrait placeholder — swap in public/images/avatar.jpg',
    contactEyebrow: 'Contact',
    contactH1: 'Let’s make something together.',
    emailMe: 'Email me',
    closeDetails: 'Close details',
    prevWork: 'Previous work',
    nextWork: 'Next work',
    browseHint: '← → to browse · Esc to close',
    copyLink: 'Copy link',
    linkCopied: 'Link copied',
    mapEyebrow: 'Map',
    mapH1: 'Where these frames were made',
    mapIntro: 'China → Nanchang → Dresden → Riga → the white cliffs → the end of the world. Tap a pin to open the work.',
    mapFootnote: 'Pins show works with known locations — more will join as the collection grows.',
    essayEyebrow: 'Essay',
    essayH1: 'The Long Walk',
    essayIntro: 'Photographs from three years of walking — from Nanchang to the end of the world.',
    seriesEyebrow: 'Series',
    allWork: '← All work',
    emptyHint:
      'Nothing here yet — drop photos into src/assets/works/creative/ and they will appear automatically.',
    menu: 'Menu',
    footerContact: 'Contact',
    backToTop: 'Back to top',
    viewDetails: 'View details',
    switchDark: 'Switch to dark mode',
    switchLight: 'Switch to light mode',
    switchToZh: '切换到中文',
    switchToEn: 'Switch to English',
  },
  zh: {
    skip: '跳到主要内容',
    navHome: '首页',
    navWork: '作品',
    navMap: '地图',
    navEssay: '随笔',
    navAbout: '关于',
    navContact: '联系',
    viewWork: '查看作品',
    contact: '联系我',
    selectedFrames: '精选帧',
    allFrames: '全部帧 →',
    noteFrom: '摄影师手记',
    moreAboutMe: '关于我',
    portfolioEyebrow: '作品',
    selectedWork: '精选作品',
    portfolioIntro: '来自八个安静系列的帧——点击任意照片阅读它的故事。',
    filterBy: '按系列筛选',
    viewSeries: '查看系列 →',
    all: '全部',
    aboutEyebrow: '关于',
    aboutMe: '关于我',
    quietSeeing: '安静的观看方式',
    alongTheWay: '一路走来',
    inTheBag: '随身器材',
    avatarNote: '头像占位图——替换 public/images/avatar.jpg',
    contactEyebrow: '联系',
    contactH1: '让我们一起创作。',
    emailMe: '发送邮件',
    closeDetails: '关闭详情',
    prevWork: '上一张',
    nextWork: '下一张',
    browseHint: '← → 浏览 · Esc 关闭',
    copyLink: '复制链接',
    linkCopied: '链接已复制',
    mapEyebrow: '地图',
    mapH1: '这些帧拍摄的地方',
    mapIntro: '中国 → 南昌 → 德累斯顿 → 里加 → 白崖 → 世界的尽头。点击图钉打开作品。',
    mapFootnote: '图钉显示已知拍摄地点的作品——随着收藏增长会有更多。',
    essayEyebrow: '随笔',
    essayH1: '漫长的散步',
    essayIntro: '三年散步拍下的照片——从南昌到世界的尽头。',
    seriesEyebrow: '系列',
    allWork: '← 全部作品',
    emptyHint: '这里还没有作品——把照片放进 src/assets/works/creative/ 后会自动出现。',
    menu: '导航',
    footerContact: '联系',
    backToTop: '返回顶部',
    viewDetails: '查看详情',
    switchDark: '切换到深色模式',
    switchLight: '切换到浅色模式',
    switchToZh: '切换到中文',
    switchToEn: 'Switch to English',
  },
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      const s = localStorage.getItem('fhn-lang')
      if (s === 'zh' || s === 'en') return s
    } catch (e) {
      /* ignore */
    }
    return 'en'
  })

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      localStorage.setItem('fhn-lang', lang)
    } catch (e) {
      /* ignore */
    }
  }, [lang])

  const t = (key) => UI[lang][key] ?? UI.en[key] ?? key

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>
  )
}

export function useLang() {
  return useContext(LanguageContext)
}

// Return a work object whose display fields match the active language
export function workInLang(w, lang) {
  if (lang !== 'zh') return w
  return {
    ...w,
    title: w.titleZh || w.title,
    description: w.descriptionZh || w.description,
    category: w.categoryZh || w.category,
  }
}
