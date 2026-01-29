export function cn(...classes: Array<string | undefined | false | null>) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Get the base path for assets (handles GitHub Pages deployment)
 * In production on GitHub Pages, this returns '/portfolio'
 * In development, this returns ''
 */
export function getBasePath(): string {
  return process.env.NEXT_PUBLIC_BASE_PATH || '';
}

/**
 * Prefix a path with the base path for static assets
 * Use this for images and other static files in /public
 */
export function withBasePath(path: string): string {
  const basePath = getBasePath();
  // If path already starts with basePath or is external, return as-is
  if (path.startsWith('http') || (basePath && path.startsWith(basePath))) {
    return path;
  }
  return `${basePath}${path}`;
}
