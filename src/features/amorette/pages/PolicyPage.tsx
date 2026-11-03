import type { PageProps } from '../types';
import { policies } from '../content/policies';
export default function PolicyPage({ locale = 'zh', kind }: PageProps & {
    kind: 'privacy' | 'terms';
}) { const en = locale === 'en'; return <section className="tpl-editorial"><article className="tpl-article"><p>{en ? 'Demonstration policy · Updated November 3, 2026' : '演示政策 · 更新于 2026 年 11 月 3 日'}</p><h1>{kind === 'privacy' ? (en ? 'Privacy policy' : '隐私政策') : (en ? 'Terms & conditions' : '服务条款')}</h1>{policies[kind].map(row => <section key={row[0]}><h2>{row[en ? 0 : 1]}</h2><p>{row[en ? 2 : 3]}</p></section>)}</article></section>; }
