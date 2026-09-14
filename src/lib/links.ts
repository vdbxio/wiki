// Turns a bare URL or a filename into { kind, label, icon } for the LinkButton component.
export type Kind = 'shop' | 'repo' | 'source' | 'cad' | 'doc' | 'archive' | 'video' | 'chat' | 'image' | 'firmware' | 'link';

const SITES: { test: RegExp; name: string; kind: Kind }[] = [
  { test: /(^|\.)amazon\.[a-z.]+$|(^|\.)amzn\.to$/, name: 'Amazon', kind: 'shop' },
  { test: /(^|\.)crowdsupply\.com$/, name: 'Crowd Supply', kind: 'shop' },
  { test: /(^|\.)tindie\.com$/, name: 'Tindie', kind: 'shop' },
  { test: /(^|\.)etsy\.com$/, name: 'Etsy', kind: 'shop' },
  { test: /(^|\.)github\.com$/, name: 'GitHub', kind: 'repo' },
  { test: /(^|\.)oshwlab\.com$/, name: 'OSHWLab', kind: 'source' },
  { test: /(^|\.)onshape\.com$/, name: 'Onshape', kind: 'cad' },
  { test: /(^|\.)printables\.com$/, name: 'Printables', kind: 'cad' },
  { test: /(^|\.)thingiverse\.com$/, name: 'Thingiverse', kind: 'cad' },
  { test: /(^|\.)youtube\.com$|(^|\.)youtu\.be$/, name: 'YouTube', kind: 'video' },
  { test: /(^|\.)discord\.(gg|com)$/, name: 'Discord', kind: 'chat' },
  { test: /(^|\.)home-assistant\.io$/, name: 'Home Assistant', kind: 'link' },
];

export function classifyLink(url: string, label?: string) {
  let host = '', pathname = '';
  try { const u = new URL(url); host = u.hostname.replace(/^www\./, ''); pathname = u.pathname; } catch { return { kind: 'link' as Kind, label: label ?? url }; }
  const site = SITES.find((s) => s.test.test(host));
  if (!site) return { kind: 'link' as Kind, label: label ?? host };
  if (site.kind === 'repo') {
    const [owner, repo] = pathname.split('/').filter(Boolean);
    return { kind: 'repo' as Kind, label: label ?? (owner && repo ? `${owner}/${repo}` : 'GitHub') };
  }
  return { kind: site.kind, label: label ?? site.name };
}

const EXT: Record<string, Kind> = {
  pdf: 'doc', md: 'doc', txt: 'doc',
  step: 'cad', stp: 'cad', f3d: 'cad', f3z: 'cad', '3mf': 'cad', stl: 'cad', obj: 'cad', dxf: 'cad', glb: 'cad',
  epro: 'source', kicad_pro: 'source', kicad_pcb: 'source', kicad_sch: 'source', json: 'source', csv: 'source',
  zip: 'archive', tar: 'archive', gz: 'archive', '7z': 'archive',
  bin: 'firmware', yaml: 'firmware', yml: 'firmware',
  png: 'image', jpg: 'image', jpeg: 'image', svg: 'image', webp: 'image',
};
export function classifyFile(name: string, label?: string) {
  const ext = (name.split('.').pop() ?? '').toLowerCase();
  const stem = name.replace(/\.[^.]+$/, '');
  return { kind: EXT[ext] ?? ('link' as Kind), label: label ?? stem, ext: label ? '' : ext };
}
