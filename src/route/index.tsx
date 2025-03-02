import { ComponentType, lazy } from 'react';

interface RouteList {
  path: string;
  component: ComponentType;
  isProtected?: boolean;
}

export const routes: RouteList[] = [
  {
    path: '/login',
    component: lazy(() => import('../components/pages/login')),
  },
  {
    path: '/',
    component: lazy(() => import('../components/pages/home')),
    isProtected: true,
  },
  {
    path: '/dashboard',
    component: lazy(() => import('../components/pages/dashboard')),
    isProtected: true,
  },
];