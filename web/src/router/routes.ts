import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Index.vue')
      },
      {
        path: '/login',
        component: () => import('pages/Login.vue')
      },
      {
        path: '/register',
        component: () => import('pages/Register.vue')
      },
      {
        path: '/dashboard',
        component: () => import('pages/Dashboard.vue')
      },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
