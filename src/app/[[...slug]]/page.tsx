import { notFound } from 'next/navigation';
import SitePage from '../../features/amorette/SitePage';
import { pages } from '../../features/amorette/content/pages';
export default async function Page({ params }: {
    params: Promise<{
        slug?: string[];
    }>;
}) { const parts = (await params).slug ?? [], locale = parts[0] === 'en' ? 'en' : 'zh', slug = (locale === 'en' ? parts.slice(1) : parts).join('/'); if (!pages.some(p => p.slug === slug))
    notFound(); return <SitePage locale={locale} basePath="" slug={slug}/>; }
