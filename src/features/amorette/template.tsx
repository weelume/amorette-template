import type { ComponentType } from 'react';
import type { PageProps } from './types';
import { pages } from './content/pages';
type Screenshot = {
    src: string;
    alt: string;
    device: 'desktop' | 'tablet' | 'mobile';
    width: number;
    height: number;
};
const screenshots: [
    Screenshot,
    ...Screenshot[]
] = [
    {
        "src": "/templates/amorette/screenshots/desktop-home.webp",
        "alt": "Amorette · 婚礼邀请 · home · desktop",
        "device": "desktop",
        "width": 1430,
        "height": 993
    },
    {
        "src": "/templates/amorette/screenshots/desktop-features.webp",
        "alt": "Amorette · 婚礼邀请 · features · desktop",
        "device": "desktop",
        "width": 1430,
        "height": 993
    },
    {
        "src": "/templates/amorette/screenshots/desktop-blog.webp",
        "alt": "Amorette · 婚礼邀请 · blog · desktop",
        "device": "desktop",
        "width": 1430,
        "height": 993
    },
    {
        "src": "/templates/amorette/screenshots/desktop-contact.webp",
        "alt": "Amorette · 婚礼邀请 · contact · desktop",
        "device": "desktop",
        "width": 1430,
        "height": 993
    },
    {
        "src": "/templates/amorette/screenshots/tablet-home.webp",
        "alt": "Amorette · 婚礼邀请 · home · tablet",
        "device": "tablet",
        "width": 824,
        "height": 1166
    },
    {
        "src": "/templates/amorette/screenshots/tablet-features.webp",
        "alt": "Amorette · 婚礼邀请 · features · tablet",
        "device": "tablet",
        "width": 824,
        "height": 1166
    },
    {
        "src": "/templates/amorette/screenshots/tablet-blog.webp",
        "alt": "Amorette · 婚礼邀请 · blog · tablet",
        "device": "tablet",
        "width": 824,
        "height": 1166
    },
    {
        "src": "/templates/amorette/screenshots/tablet-contact.webp",
        "alt": "Amorette · 婚礼邀请 · contact · tablet",
        "device": "tablet",
        "width": 824,
        "height": 1166
    },
    {
        "src": "/templates/amorette/screenshots/mobile-home.webp",
        "alt": "Amorette · 婚礼邀请 · home · mobile",
        "device": "mobile",
        "width": 380,
        "height": 822
    },
    {
        "src": "/templates/amorette/screenshots/mobile-features.webp",
        "alt": "Amorette · 婚礼邀请 · features · mobile",
        "device": "mobile",
        "width": 380,
        "height": 822
    },
    {
        "src": "/templates/amorette/screenshots/mobile-blog.webp",
        "alt": "Amorette · 婚礼邀请 · blog · mobile",
        "device": "mobile",
        "width": 380,
        "height": 822
    },
    {
        "src": "/templates/amorette/screenshots/mobile-contact.webp",
        "alt": "Amorette · 婚礼邀请 · contact · mobile",
        "device": "mobile",
        "width": 380,
        "height": 822
    }
];
export const amoretteTemplate = { id: 'amorette', gitUrl: "https://github.com/weelume/amorette-template", name: "Amorette · 婚礼邀请", localizedNames: { en: "Amorette · Wedding Invitation" }, sceneId: 'landing-page', listed: false, tags: ["amorette", "中英文", "响应式", "动效"], summary: "纸张纹理与手绘人物构成的婚礼邀请网站，包含飘落花瓣、故事、仪式、日程、问答与本地 RSVP 演示。", accentColor: '#998d7e', cover: '/templates/amorette/screenshots/desktop-home.webp', screenshots, surfaces: [{ id: 'site', name: '官网', platform: 'pc' as const, locales: ['zh', 'en'] as const, pages: pages.map(page => ({ ...page, load: async (): Promise<{
                    default: ComponentType<PageProps>;
                }> => { const { default: Page } = await import('./SitePage'); return { default: function TemplatePage(props: PageProps) { return <Page {...props} slug={page.slug}/>; } }; } })) }] };
