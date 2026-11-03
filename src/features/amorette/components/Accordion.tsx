'use client';
import { useId, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
export function Accordion({ items }: {
    items: {
        question: string;
        answer: string;
    }[];
}) { const [open, setOpen] = useState<number | null>(0), id = useId(), reduced = useReducedMotion(); return <div className="tpl-faq">{items.map((item, i) => <div className="tpl-faq-item" key={item.question}><h3><button type="button" aria-expanded={open === i} aria-controls={id + i} onClick={() => setOpen(open === i ? null : i)}>{item.question}<motion.span aria-hidden animate={{ rotate: open === i ? 45 : 0 }}>+</motion.span></button></h3><AnimatePresence initial={false}>{open === i && <motion.div id={id + i} role="region" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: reduced ? 0 : .32 }} style={{ overflow: 'hidden' }}><p>{item.answer}</p></motion.div>}</AnimatePresence></div>)}</div>; }
