<template>
  <div id='app' :class='appClass()'>
    <canvas id='granim-canvas'> </canvas>
    <Nav />
    <div class='app-container'>
      <transition
        name='fade'
        mode='out-in'
      >
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
import Granim from 'granim'
import Nav from '@/components/Nav.vue'

export default {
  name: 'Home',
  components: {
    Nav
  },
  data: function () {
    return {
      granimInstance: null
    }
  },
  methods: {
    appClass() {
      return this.$route.name === 'Home'
        ? 'app-home'
        : 'app-page'
    }
  },
  watch: {
    $route (to) {
      const newState = to.meta.granimState || 'default-state'
      this.granimInstance.changeState(newState)
    },

  },
  mounted() {
    console.log(this.$route)
    const initialState = this.$route.meta.granimState || 'default-state'
    this.granimInstance = new Granim({
      element: '#granim-canvas',
      direction: 'diagonal',
      isPausedWhenNotInView: true,
      stateTransitionSpeed: 1000,
      defaultStateName: initialState,
      states : {
        'home': {
            gradients: [
              // Home animation
              ['#29323c', '#485563'],
              ['#FF6B6B', '#556270'],
            ],
            // loop: false
            transitionSpeed: 8000
        },
        'books': {
          gradients: [
            ['#FEF2E4', '#F8E4DD'],
          ],
        },
        'about': {
          gradients: [
            ['#F4F5F6', '#DEE3E1']
          ],
        },
        'default-state': {
          gradients: [
            ['#FFF', '#FEF2E4']
          ]
        },
        'the-house': {
          gradients: [
            ['#FFF', '#FEF2E4']
          ]
        },
        'sunset': {
          gradients: [
            ['#FEF2E4', '#E0EDF5']
          ]
        },
        'weather': {
          gradients: [
            ['#FFF', '#F8E4DD']
          ]
        }
      },
    })
  }
}
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  color: #444;
}
body {
  height: 100vh;
  width: 100vw;
}
em {
  color: inherit;
}
#app {
  font-family: 'Proza Libre';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3, h4, h5 {
  font-family: 'Cormorant Garamond';
  font-weight: 600;
}

.app-container {
  margin: 120px auto;
}
.app-home {
  color: white;
}
.book-cover {
  width: auto;
  min-height: 420px;
  border-radius: 5px;
  box-shadow: 0 14px 25px rgb(0 0 0 / 50%);
}
#granim-canvas {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: -1;
}
.app-page {
  padding-bottom: 40px;
}
.app-page nav {
  /* background: rgba(255, 255, 255, 0.25); */
  backdrop-filter: blur(3px);
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}
a:hover{
  color: #F16A55;
}
.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
