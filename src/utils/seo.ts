import { site } from '../data/site';

const setMetaContent = (selector: string, content: string): void => {
  const tag = document.querySelector<HTMLMetaElement>(selector);
  if (tag) {
    tag.content = content;
  }
};

export const updateDocumentMeta = (title: string, description: string, path = '/'): void => {
  const canonicalUrl = `${site.baseUrl}${path === '/' ? '/' : path}`;
  document.title = title;

  setMetaContent('meta[name="description"]', description);
  setMetaContent('meta[property="og:title"]', title);
  setMetaContent('meta[property="og:description"]', description);
  setMetaContent('meta[property="og:url"]', canonicalUrl);

  const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (canonical) {
    canonical.href = canonicalUrl;
  }
};
