import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue')
    },
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
  ]
})

router.beforeEach((to, from, next) => {
  // Asignamos el valor de username de la localStorage
  const auth = localStorage.getItem('username');
  // Si no hay sesion iniciada y no estamos en la pagina de login, redirigimos a login
  if (to.name !== 'login' && !auth) {
    next({ name: 'login' })
    // Si hay sesion iniciada y se dirige a la pagina de login, redirigimos a home
  } else if (to.name === 'login' && auth) {
    next({ name: 'home' })
  } else next()
})

export default router
