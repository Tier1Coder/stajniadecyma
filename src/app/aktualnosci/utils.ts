const newsDateFormatter = new Intl.DateTimeFormat('pl-PL', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
});

function parseIsoDate(value: string): Date | null {
  const parts = value.split('-').map(Number);
  if (parts.length !== 3 || parts.some(Number.isNaN)) {
    return null;
  }

  const [year, month, day] = parts;
  return new Date(Date.UTC(year, month - 1, day));
}

export function stripHtml(value: string): string {
  return value.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

function truncateAtWord(value: string, maxLength: number): string {
  if (value.length <= maxLength) {
    return value;
  }

  const trimmed = value.slice(0, maxLength + 1);
  const breakpoint = Math.max(
    trimmed.lastIndexOf(' '),
    trimmed.lastIndexOf(','),
    trimmed.lastIndexOf('.')
  );
  const safeSlice = breakpoint > maxLength * 0.6 ? trimmed.slice(0, breakpoint) : value.slice(0, maxLength);
  const cleaned = safeSlice.trim().replace(/[.,;:!?-]+$/, '');

  return `${cleaned}...`;
}

export function getNewsExcerpt(value: string, maxLength = 180): string {
  return truncateAtWord(stripHtml(value), maxLength);
}

export function getSeoDescription(value: string): string {
  return truncateAtWord(stripHtml(value), 155);
}

export function formatNewsDate(value: string): string {
  const parsed = parseIsoDate(value);
  if (!parsed) {
    return value;
  }

  return newsDateFormatter.format(parsed);
}
