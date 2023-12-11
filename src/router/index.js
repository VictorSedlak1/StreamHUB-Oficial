import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes : [
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
    },
    {
      path: '/filmes',
      name: 'Movies',
      component: () => import('../views/MoviesView.vue')
    },
    {
      path: '/Series',
      name: 'Series',
      component: () => import('../views/SeriesView.vue')
    },
    {
      path: '/Solos/:id',
      name: 'Solos',
      component: () => import('../views/ReviewView.vue'),
      props: true
    },
    {
      path: '/SolosTv/:id',
      name: 'SolosTv',
      component: () => import('../views/ReviewViewTV.vue'),
      props: true
    },
    
    {
      path: '/Genero/:id',
      name: 'Genero',
      component: () => import('../views/GenerosView.vue'),
      props: true
    },
    {
      path: '/GeneroTv/:id',
      name: 'GeneroTv',
      component: () => import('../views/GenerosSeriesView.vue'),
      props: true
    },
   

    
    
  ]
})


export default router