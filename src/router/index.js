import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Books from '../views/Books.vue'
import Poems from '../views/Poems.vue'
import Events from '../views/Events.vue'

import DollApollo from '../views/DollApollo.vue'
import DearWeatherGhost from '../views/DearWeatherGhost.vue'
import TheHouseUptown from '../views/TheHouseUptown.vue'
import SunsetCity from '../views/SunsetCity.vue'
import Apollo from '../views/Apollo.vue'
import Arbor from '../views/Arbor.vue'
import DoubleBlind from '../views/DoubleBlind.vue'



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
    path: '/events',
    name: 'Events',
    component: Events,
    meta: {
      granimState: 'about'
    },
  },
  {
    path: '/doll-apollo',
    name: 'DollApollo',
    component: DollApollo,
    meta: {
      granimState: 'doll-apollo'
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
    component: Poems,
    meta: {
      granimState: 'poems'
    }
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
  },
  {
    path: '/apollo',
    name: 'Apollo',
    component: Apollo,
    meta: {
      granimState: 'arbor'
    }
  },
  {
    path: '/arbor',
    name: 'Arbor',
    component: Arbor,
    meta: {
      granimState: 'arbor'
    }
  },
  {
    path: '/double-blind',
    name: 'DoubleBlind',
    component: DoubleBlind,
    meta: {
      granimState: 'double-blind'
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
