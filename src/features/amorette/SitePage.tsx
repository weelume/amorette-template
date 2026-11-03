import type { PageProps } from './types';
import { Shell } from './components/Shell';
import HomePage from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';
import ContactPage from './pages/ContactPage';
import JournalPage from './pages/JournalPage';
import PolicyPage from './pages/PolicyPage';
import './theme.css';
export default function SitePage({ locale = 'zh', basePath, slug = '' }: PageProps & {
    slug?: string;
}) { const props = { locale, basePath }; return <Shell {...props} slug={slug}>{!slug ? <HomePage {...props}/> : slug === 'features' ? <DetailsPage {...props}/> : slug === 'contact' ? <ContactPage {...props}/> : slug.startsWith('blog') ? <JournalPage {...props} articleSlug={slug.split('/')[1]}/> : <PolicyPage {...props} kind={slug.includes('privacy') ? 'privacy' : 'terms'}/>}</Shell>; }
