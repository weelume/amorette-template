'use client';
import { motion, useReducedMotion } from 'framer-motion';
import type { Locale } from '../types';
import { wedding } from '../config/brand';
import { image, venues, schedule, questions } from '../content/data';
import { LetterTitle, Reveal } from './Motion';
import { Accordion } from './Accordion';
import { DemoForm } from './DemoForm';
import { Ornament } from './Ornament';
const storyImages = [
    { file: 'JTp0WFz7UdctC8dZzp2pVZJZQ.webp', ratio: 1.5, x: -100, y: -50, rotate: -10, rotateX: 30, rotateY: -30 },
    { file: 'E5zYfkAueBi58JKCgwZ7nLqd44.webp', ratio: 1208 / 1302, x: 150, y: -50, rotate: 10, rotateX: 30, rotateY: 30 },
    { file: 'hOogA1HdEM1KiE5kkH3xJp84BFg.webp', ratio: 2 / 3, x: -150, y: 50, rotate: -20, rotateX: -30, rotateY: -30 },
    { file: 'Q9wOGVh6ZdEf3Sy0aCbRF6FsSQ.webp', ratio: 1.5, x: 150, y: 50, rotate: 20, rotateX: -30, rotateY: 30 }
];
function StoryImage({ item, locale, index }: {
    item: typeof storyImages[number];
    locale: Locale;
    index: number;
}) { const reduced = useReducedMotion(); return <motion.div className={'am-story-image am-story-image-' + index} initial={reduced ? false : { opacity: 0, x: item.x, y: item.y, scale: .8, rotate: item.rotate, rotateX: item.rotateX, rotateY: item.rotateY }} whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, rotate: 0, rotateX: 0, rotateY: 0 }} viewport={{ once: true, amount: .2 }} style={{ transformPerspective: 1200 }} transition={{ duration: reduced ? 0 : .8, ease: [.22, 1, .36, 1] }}><img src={image(item.file)} style={{ aspectRatio: item.ratio }} alt={locale === 'en' ? 'A moment from our story' : '我们故事中的一刻'}/></motion.div>; }
// 原站桌面故事区为200vh，四幅图片在粘性2×2画布中从三维倾斜进入；手机改为顺序流。
export function Story({ locale }: {
    locale: Locale;
}) { const en = locale === 'en'; return <section className="am-section am-story" id="story"><div className="am-story-copy"><p className="am-eyebrow">{en ? 'Our Story' : '我们的故事'}</p><LetterTitle text={en ? 'A beautiful beginning to our forever' : '美好的相遇 成为我们的永远'}/><Ornament /><p className="am-story-intro">{en ? 'Some stories begin with a grand gesture. Ours began with an ordinary conversation that neither of us wanted to end.' : '有些故事从盛大的举动开始。我们的故事，始于一场谁都不愿结束的普通对话。'}</p></div><div className="am-story-gallery">{storyImages.map((item, i) => <StoryImage item={item} locale={locale} index={i} key={item.file}/>)}</div></section>; }
export function Venues({ locale }: {
    locale: Locale;
}) { const en = locale === 'en'; return <section className="am-section" id="ceremony"><p className="am-eyebrow">{en ? 'The Wedding' : '婚礼'}</p><LetterTitle text={en ? 'A celebration in the heart of Rome' : '在罗马的心间 分享我们的喜悦'}/><div className="am-venues">{venues.map((item, i) => <Reveal key={item.name.en} delay={i * .15} direction={i ? 'right' : 'left'}><article><p className="am-eyebrow">{item.label[locale]}</p><h3>{item.name[locale]}</h3><p>{item.description[locale]}</p><img src={image(item.image)} alt={item.name[locale]}/><h3>{item.time}</h3><p>{item.address[locale]}</p><a className="am-text-link" href="https://www.google.com/maps" target="_blank" rel="noreferrer">{en ? 'View on map' : '查看地图'}</a></article></Reveal>)}</div><Ornament /></section>; }
export function Schedule({ locale }: {
    locale: Locale;
}) { return <section className="am-section" id="schedule"><p className="am-eyebrow">{locale === 'en' ? 'The Schedule' : '婚礼日程'}</p><LetterTitle text={locale === 'en' ? 'Our Wedding Day' : '属于我们的这一天'}/><div className="am-schedule">{schedule.map((item, i) => <Reveal key={item.time} delay={i % 3 * .08}><article><time>{item.time}</time><span aria-hidden>✧</span><div><h3>{item.title[locale]}</h3><p>{item.description[locale]}</p></div></article></Reveal>)}</div><Ornament /></section>; }
export function WeddingFAQ({ locale }: {
    locale: Locale;
}) { return <section className="am-section" id="faq"><LetterTitle text={locale === 'en' ? 'Questions' : '你想了解的问题'}/><Accordion items={questions.map(item => ({ question: item.question[locale], answer: item.answer[locale] }))}/><Ornament /></section>; }
export function RSVP({ locale }: {
    locale: Locale;
}) { return <section className="am-section am-rsvp" id="rsvp"><p className="am-eyebrow">{locale === 'en' ? 'Confirm Attendance' : '出席确认'}</p><LetterTitle text={locale === 'en' ? 'Will you be joining us?' : '期待与你相聚'}/><DemoForm locale={locale} wedding/><Ornament /><p>{wedding.names[locale]}</p><p>{wedding.displayDate[locale]} · {wedding.city[locale]}</p></section>; }
