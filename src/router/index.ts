import { createRouter, createWebHistory } from 'vue-router'
export default createRouter({
  history: createWebHistory(),
  routes: [
     { path: '/', redirect: '/icons' }, // ← Add this line to redirect homepage
   { path: '/icons', component: () => import('@/views/ShowIcons.vue') },
    { path: '/authors', component: () => import('@/views/AuthorsView.vue') },
  { path: '/:pathMatch(.*)*', component: () => import('@/views/NotFoundView.vue') }, // 👈 Catch-all
  ],
})


/* 
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OtherPage from '@/views/OtherPage.vue'
import CarView from '@/views/CarView.vue'
import ContactView from '@/views/ContactView.vue'
import NotFound from '@/views/404View.vue'
import ParentView from '@/views/ParentView.vue'
import CalcParent from '@/views/CalcParent.vue'
import ChooseColor from '@/views/ChooseColor.vue'
import ChangePinia from '@/views/ChangePinia.vue'
import ShowPinia from '@/views/ShowPinia.vue'
import BooksView from '@/views/BooksView.vue'
import GameView from '@/views/GameView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },

    {
      path: '/game',
      name: 'game',
      component: GameView,
    },
    {
      path: '/home',
      redirect: '/',
    },
    {
      path: '/other',
      name: 'other',
      component: OtherPage,
    },
    {
      path: '/parent',
      name: 'parent',
      component: ParentView,
    },
    {
      path: '/calc',
      name: 'calc',
      component: CalcParent,
    },
    {
      path: '/color',
      name: 'color',
      component: ChooseColor,
    },

    {
      path: '/pinia1',
      name: 'pinia1',
      component: ChangePinia,
    },
    {
      path: '/pinia2',
      name: 'pinia2',
      component: ShowPinia,
    },

    {
      path: '/books',
      name: 'books',
      component: BooksView,
    },
    {
      path: '/car/:id',
      name: 'car',
      component: CarView,
      children: [
        // შვილობილი რაუტერებისთვის
        {
          path: 'contact',
          component: ContactView,
        },
      ],
    },

    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //ზარმაცი ჩატვირთვა
      component: () => import('@/views/AboutView.vue'),
    },
    {
      path: '/:catchAll(.*)', // ყველა სხვა რაუტებისთვის
      name: 'NotFound',
      component: NotFound,
    },
  ],
})

export default router
 */