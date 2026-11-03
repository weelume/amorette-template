import type { ReactNode } from 'react';
export type Locale = 'zh' | 'en';
export type Bilingual = {
    zh: string;
    en: string;
};
export interface PageProps {
    locale?: Locale;
    basePath: string;
}
export interface HostConfig {
    brandName?: Bilingual;
    logo?: string;
    lightLogo?: string;
    marketplaceHref?: string;
    marketplaceAriaLabel?: Bilingual;
    filing?: ReactNode;
}
export const t = (text: Bilingual, locale: Locale) => text[locale];
export const bi = (zh: string, en: string): Bilingual => ({ zh, en });
