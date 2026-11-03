import Link from 'next/link';
import type { PageProps } from '../types';
import { articles, journalTitle } from '../content/articles';
import { href } from '../routing';
import { Reveal } from '../components/Motion';
export default function JournalPage({ locale = 'zh', basePath, articleSlug }: PageProps & {
    articleSlug?: string;
}) { const article = articles.find(p => p.slug === articleSlug), en = locale === 'en'; return <section className="tpl-editorial">{article ? <article className="tpl-article"><Link href={href(basePath, locale, 'blog')}>{journalTitle[locale]}</Link><h1>{article.title[locale]}</h1><p>{en ? 'Editorial · 4 min read' : '编辑手记 · 阅读约 4 分钟'}</p>{article.paragraphs[locale].map((p, i) => <Reveal key={p} delay={i * .08}><h2>{(en ? ['A starting point', 'What matters', 'The next step'] : ['一个起点', '值得关注的事', '下一步'])[i]}</h2><p>{p}</p></Reveal>)}<Link className="tpl-button" href={href(basePath, locale, 'contact')}>{en ? 'Get in touch' : '联系我们'}</Link></article> : <><p>{en ? 'Notes & perspectives' : '记录与思考'}</p><h1>{journalTitle[locale]}</h1><div className="tpl-journal-grid">{articles.map((p, i) => <Reveal key={p.slug} delay={i * .12}><Link className="tpl-journal-card" href={href(basePath, locale, 'blog/' + p.slug)}><small>0{i + 1} · {en ? 'Journal' : '手记'}</small><h2>{p.title[locale]}</h2><p>{p.paragraphs[locale][0]}</p><span>{en ? 'Read story' : '阅读全文'}</span></Link></Reveal>)}</div></>}</section>; }
