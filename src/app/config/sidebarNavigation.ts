import { workNavItems } from '../pages/HomePage';

export type SidebarNavItem = {
  id: string;
  label: string;
};

export type SidebarNavConfig = {
  labelId: string;
  header: string;
  items: readonly SidebarNavItem[];
  matchPath: string;
  itemTo: (id: string) => string;
};

const homeSidebar: SidebarNavConfig = {
  labelId: 'sidebar-work-label',
  header: 'WORK',
  items: workNavItems.map((item) => ({ id: item.id, label: item.name })),
  matchPath: '/',
  itemTo: (id) => `/#${id}`,
};

const hroSidebar: SidebarNavConfig = {
  labelId: 'sidebar-hro-label',
  header: 'HARVARD-RADCLIFFE ORCHESTRA',
  items: [
    { id: 'overview', label: 'Overview' },
    { id: 'problem', label: 'The Problem' },
    { id: 'case-study', label: 'Case Study' },
    { id: 'reflections', label: 'Reflections' },
  ],
  matchPath: '/hro',
  itemTo: (id) => `/hro#${id}`,
};

export function getSidebarNavConfig(pathname: string): SidebarNavConfig {
  if (pathname === '/hro' || pathname.startsWith('/hro/')) {
    return hroSidebar;
  }
  return homeSidebar;
}

export function pathnameMatchesSidebar(nav: SidebarNavConfig, pathname: string): boolean {
  if (nav.matchPath === '/') return pathname === '/';
  return pathname === nav.matchPath || pathname.startsWith(`${nav.matchPath}/`);
}
