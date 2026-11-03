/** 纯路径拼接可被服务端与客户端共用，不依赖浏览器状态。 */
export function href(basePath: string, locale: 'zh' | 'en', slug = ''): string { const base = basePath.replace(/\/+$/, ''); return base + (locale === 'en' ? '/en' : '') + (slug ? '/' + slug : '/'); }
