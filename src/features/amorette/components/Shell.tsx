'use client';
import Link from 'next/link';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useTemplateHost } from '../host';
import { brand, nav } from '../config/brand';
import type { Locale } from '../types';
import { DemoForm } from './DemoForm';
import { Petals } from './Petals';
import { Corners } from './Ornament';
import { href } from '../routing';
export function Shell({ children, locale, basePath, slug = '' }: {
    children: ReactNode;
    locale: Locale;
    basePath: string;
    slug?: string;
}) {
    const router = useRouter(), host = useTemplateHost(), [menu, setMenu] = useState(false), pathname = usePathname(), reduced = useReducedMotion(), menuButton = useRef<HTMLButtonElement>(null), en = locale === 'en', name = host.brandName?.[locale] ?? brand.name[locale];
    useEffect(() => { const html = document.documentElement; html.classList.add('amorette-document'); console.debug('[amorette:route]', { pathname, locale }); return () => html.classList.remove('amorette-document'); }, [pathname, locale]);
    useEffect(() => { if (!menu)
        return; const previous = document.body.style.overflow; document.body.style.overflow = 'hidden'; const close = (event: KeyboardEvent) => { if (event.key === 'Escape') {
        setMenu(false);
        menuButton.current?.focus();
    } if (event.key === 'Tab') {
        const links = Array.from(document.querySelectorAll<HTMLAnchorElement>('#amorette-menu a'));
        const first = menuButton.current, last = links.at(-1);
        if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last?.focus();
        }
        else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first?.focus();
        }
    } }; document.addEventListener('keydown', close); return () => { document.body.style.overflow = previous; document.removeEventListener('keydown', close); }; }, [menu]);
    const changeLanguage = () => { const target = href(basePath, en ? 'zh' : 'en', slug); return target; };
    return <div className="amorette-site"><Corners /><Petals locale={locale}/><a className="tpl-skip" href="#main">{en ? 'Skip to content' : '跳转正文'}</a><header className="tpl-header"><Link className="tpl-brand" href={href(basePath, locale)}>{host.logo ? <img src={host.logo} alt=""/> : <span aria-hidden>{brand.mark}</span>}{name}</Link><nav aria-label={en ? 'Main navigation' : '主导航'}>{nav.map(item => <Link key={item.slug} href={href(basePath, locale, item.slug)} aria-current={slug === item.slug ? 'page' : undefined}>{item.title[locale]}</Link>)}</nav><div className="tpl-header-actions"><Link className="tpl-language" href={changeLanguage()} onClick={event => { event.preventDefault(); const target = changeLanguage() + window.location.search + window.location.hash; router.push(target); }}>{en ? '中文' : 'EN'}</Link><Link className="tpl-button header-cta" href={href(basePath, locale, brand.ctaSlug)}>{brand.cta[locale]}</Link><button ref={menuButton} className="tpl-menu-button" type="button" aria-expanded={menu} aria-controls="amorette-menu" aria-label={en ? 'Toggle navigation' : '切换导航菜单'} onClick={() => setMenu(!menu)}>{menu ? '×' : '☰'}</button></div></header><AnimatePresence>{menu && <motion.nav id="amorette-menu" className="tpl-mobile-menu" aria-label={en ? 'Mobile navigation' : '移动导航'} initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: reduced ? 0 : .25 }}>{nav.map(item => <Link key={item.slug} href={href(basePath, locale, item.slug)} onClick={() => setMenu(false)}>{item.title[locale]}</Link>)}</motion.nav>}</AnimatePresence><main id="main"><motion.div key={slug + locale} initial={reduced ? false : { opacity: .2 }} animate={{ opacity: 1 }} transition={{ duration: .22 }}>{children}</motion.div></main><footer className="tpl-footer"><div><Link className="tpl-brand" href={href(basePath, locale)}>{name}</Link><p>{brand.tagline[locale]}</p><p>{brand.email}</p></div><nav aria-label={en ? 'Footer navigation' : '页脚导航'}>{nav.map(item => <Link key={item.slug} href={href(basePath, locale, item.slug)}>{item.title[locale]}</Link>)}<Link href={href(basePath, locale, 'blog')}>{en ? 'Journal' : '阅读专栏'}</Link><Link href={href(basePath, locale, 'legal-pages/privacy-policy')}>{en ? 'Privacy' : '隐私政策'}</Link><Link href={href(basePath, locale, 'legal-pages/terms-conditions')}>{en ? 'Terms' : '服务条款'}</Link></nav><div><p>{en ? 'Stay connected' : '保持联系'}</p><DemoForm locale={locale} newsletter/></div><div className="tpl-footer-bottom">© {brand.year} {name}{host.filing}</div></footer>{host.marketplaceHref && <Link className="tpl-marketplace" href={host.marketplaceHref} aria-label={host.marketplaceAriaLabel?.[locale] ?? (en ? 'Open template marketplace' : '打开模板市场')}>{host.lightLogo && <img src={host.lightLogo} alt=""/>}<span>{name}</span></Link>}</div>;
}
