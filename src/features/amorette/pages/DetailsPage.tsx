import type { PageProps } from '../types';
import { Venues, Schedule, WeddingFAQ } from '../components/WeddingSections';
export default function DetailsPage({ locale = 'zh' }: PageProps) { return <><Venues locale={locale}/><Schedule locale={locale}/><WeddingFAQ locale={locale}/></>; }
