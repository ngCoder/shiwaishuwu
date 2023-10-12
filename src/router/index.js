import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import("@/pages/home.vue") },
  { path: '/about', component: () => import("@/pages/about.vue")}
]

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

export default router