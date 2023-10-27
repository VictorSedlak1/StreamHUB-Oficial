import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/inicio',
    name: 'Inicio',
    component: () => import('../views/InicioView.vue')
  },
  {
    path: '/pagamento',
    name: 'Pagamento',
    component: () => import('../views/PagamentoView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router