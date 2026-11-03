import type { PageProps } from '../types';
import { RSVP } from '../components/WeddingSections';
export default function ContactPage({ locale = 'zh' }: PageProps) { return <RSVP locale={locale}/>; }
