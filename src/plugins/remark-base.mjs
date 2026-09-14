// Prefix root-relative URLs in Markdown (/attachments/x.jpg, /products/flip_c3/) with the site base,
// so the same generated content works at vdbxio.github.io/wiki/ and at vdbx.io/.
import { visit } from 'unist-util-visit';

export default function remarkBase() {
  const base = (process.env.SITE_BASE ?? '/').replace(/\/$/, '');
  if (!base) return () => {};
  const fix = (url) => (url && url.startsWith('/') && !url.startsWith(base + '/') && !url.startsWith('//') ? base + url : url);
  return (tree) => {
    visit(tree, (node) => {
      if ((node.type === 'link' || node.type === 'image' || node.type === 'definition') && node.url) node.url = fix(node.url);
      if (node.type === 'html' && typeof node.value === 'string') node.value = node.value.replace(/(src|href)="(\/[^"/][^"]*)"/g, (m, a, u) => `${a}="${fix(u)}"`);
    });
  };
}
