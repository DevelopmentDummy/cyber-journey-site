export const SITE_TITLE = '이세계 여행가';
export const SITE_DESC = '원작 시점에서 한참 흐른 뒤의 픽션 세계를, 이방인 여행자로 걸어 다닌 기록.';

const BASE = import.meta.env.BASE_URL; // e.g. '/cyber-journey-site/'

/** Prefix an internal path (link or public asset) with the site base. */
export function url(path = ''): string {
  const b = BASE.replace(/\/$/, '');
  return b + '/' + String(path).replace(/^\//, '');
}

/** Resolve a public asset path (e.g. 'travel/x.png'). Passes through absolute URLs. */
export function asset(path = ''): string {
  if (!path) return '';
  if (/^https?:\/\//.test(path)) return path;
  return url(path);
}

export const TYPES: Record<string, { kr: string; en: string }> = {
  arrival: { kr: '도착', en: 'ARRIVAL' },
  historic_site: { kr: '사적지', en: 'HISTORIC SITE' },
  prices: { kr: '물가', en: 'PRICES' },
  food: { kr: '음식', en: 'FOOD' },
  local: { kr: '로컬', en: 'LOCAL' },
  awe: { kr: '압도', en: 'AWE' },
  mishap: { kr: '해프닝', en: 'MISHAP' },
};

export const SENSES: { k: 'sight' | 'sound' | 'smell' | 'touch' | 'taste_mood'; l: string }[] = [
  { k: 'sight', l: '시각' },
  { k: 'sound', l: '청각' },
  { k: 'smell', l: '후각' },
  { k: 'touch', l: '촉각' },
  { k: 'taste_mood', l: '감각' },
];
