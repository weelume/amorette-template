'use client';
import { useState, type CSSProperties } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { Locale } from '../types';
import { image } from '../content/data';
// 花瓣独立下落、左右摆动与旋转；捕捉后短暂上浮，再恢复原循环。
export function Petals({ locale }: {
    locale: Locale;
}) { const [caught, setCaught] = useState<number | null>(null), reduced = useReducedMotion(); return <div className="am-petals">{Array.from({ length: 7 }, (_, i) => <motion.button key={i} type="button" className="am-petal" aria-label={locale === 'en' ? 'Catch bouquet' : '接住花瓣'} style={{ '--petal-x': (8 + i * 13) + 'vw', '--petal-delay': (-i * 1.13) + 's', '--petal-rotate': (i % 2 ? -1 : 1) * 360 + 'deg', animationPlayState: reduced || caught === i ? 'paused' : 'running' } as CSSProperties} onClick={() => { setCaught(i); console.debug('[amorette:petal]', { index: i, caught: true }); }} animate={caught === i ? { scale: [1, 1.3, .8, 1], y: [0, -70, -40, 0], opacity: [1, 1, .3, 1] } : {}} transition={{ duration: reduced ? 0 : 1.1 }} onAnimationComplete={() => setCaught(null)}><img src={image(['9FZDKeCZRCwlIHKdg03Gm1bpmXM.png', 'hSteancJZOw8jCmlH79QSad7o4.png', 'O94NcjMPEMPIX0TS9vYNTIBuqYM.png'][i % 3])} alt=""/></motion.button>)}</div>; }
