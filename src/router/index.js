import { createRouter, createWebHistory } from 'vue-router'



const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'bbc',
        component: Login.vue
      }
    ]
})

export default router