
/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
// import { createRouter, createWebHistory } from 'vue-router/auto'



// 

import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/pages/index.vue'


const routes = [
  {
    path: '/',
    name: 'index',
    component: Index,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router