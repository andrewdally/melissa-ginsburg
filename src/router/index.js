import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import TheHouseUptown from '../views/TheHouseUptown.vue'
import Books from '../views/Books.vue'
import SunsetCity from '../views/SunsetCity.vue'
import DearWeatherGhost from '../views/DearWeatherGhost.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      granimState: 'home'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      granimState: 'about'
    },
  },
  {
    path: '/the-house-uptown',
    name: 'The House Uptown',
    component: TheHouseUptown,
    meta: {
      granimState: 'the-house'
    },
  },
  {
    path: '/books',
    name: 'Books',
    component: Books,
    meta: {
      granimState: 'books'
    },
  },
  {
    path: '/poems',
    name: 'Poems',
    component: () => import(/* webpackChunkName: "poems" */ '../views/Poems.vue')
  },
  {
    path: '/sunset-city',
    name: 'Sunset City',
    meta: {
      granimState: 'sunset'
    },
    component: SunsetCity
  },
  {
    path: '/dear-weather-ghost',
    name: 'Dear Weather Ghost',
    component: DearWeatherGhost,
    meta: {
      granimState: 'weather'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  const docTitle = to.name
  document.title = 'Melissa Ginsburg | ' + docTitle
  next()
})


export default router
