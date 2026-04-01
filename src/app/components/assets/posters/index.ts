const posterModules = import.meta.glob('./*.{png,jpg,jpeg,webp,gif,svg,avif}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

/** All image files in this directory, sorted by path (stable left → right). */
export const POSTER_SURF_ASSETS = Object.keys(posterModules)
  .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }))
  .map((path) => posterModules[path]);
