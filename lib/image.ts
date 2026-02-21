export function toWebpSrc(src: string): string {
  return src.replace(/\.(jpe?g|png)$/i, '.webp');
}
