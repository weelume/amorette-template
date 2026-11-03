'use client';
import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
export function Reveal({ children, delay = 0, className = '', direction = 'up' }: {
    children: ReactNode;
    delay?: number;
    className?: string;
    direction?: 'up' | 'left' | 'right' | 'scale';
}) { const reduced = useReducedMotion(); return <motion.div className={className} initial={reduced ? false : { opacity: 0, x: direction === 'left' ? -40 : direction === 'right' ? 40 : 0, y: direction === 'up' ? 30 : 0, scale: direction === 'scale' ? .92 : 1 }} whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }} viewport={{ once: true, amount: .1 }} transition={{ duration: reduced ? 0 : .65, delay, ease: [.22, 1, .36, 1] }}>{children}</motion.div>; }
export function LetterTitle({ text, className = '' }: {
    text: string;
    className?: string;
}) { const reduced = useReducedMotion(); return <motion.h2 className={className} aria-label={text} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .3 }} transition={{ staggerChildren: reduced ? 0 : .025 }}>{Array.from(text).map((char, i) => <motion.span aria-hidden key={i} style={{ display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : undefined }} variants={{ hidden: { opacity: 0, y: reduced ? 0 : 12, filter: reduced ? 'none' : 'blur(6px)' }, visible: { opacity: 1, y: 0, filter: 'blur(0px)' } }} transition={{ duration: .6 }}>{char}</motion.span>)}</motion.h2>; }
