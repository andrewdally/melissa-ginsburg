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
              ['#333', '#A93336'],
              ['#c9696c', '#fff'],
            ],
            transitionSpeed: 8000
        },
        'books': {
          gradients: [
            ['#F8BDB4', '#F6E3B6'],
          ],
        },
        'about': {
          gradients: [
            ['#A1C5E6', '#DEE3E1']
          ],
        },
        'default-state': {
          gradients: [
            ['#FFF', '#FEF2E4']
          ]
        },
        'poems': {
          gradients: [
            ['#FFF', '#F8BDB4']
          ]
        },
        'doll-apollo': {
          gradients: [
            ['#c9696c', '#E4D6BA']
          ]
        },
        'the-house': {
          gradients: [
            ['#F7C7B6', '#CEEAF3']
          ]
        },
        'sunset': {
          gradients: [
            ['#FDEFC4', '#D5DAEB']
          ]
        },
        'weather': {
          gradients: [
            ['#FFF', '#D6FFFA']
          ]
        },
        'arbor': {
          gradients: [
            ['#FFF', '#F9F7DD']
          ]
        },
        'double-blind': {
          gradients: [
            ['#FFF', '#F6E3B6']
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
  transition: .3s ease;

}
a .book-cover:hover {
  transform: scale(1.0075);
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
nav {
  backdrop-filter: blur(3px);
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}
.uk-button-text {
  font-size: 1rem;
  color: #DB2D12;
  margin-right:12px;
}
.uk-button-text:hover, a:hover{
  color: #DB2D12;
}
.uk-button-text::before {
  border-color: #DB2D12;
}
.fade-enter,
.fade-leave-active {
  opacity: 0
}
hr {
  border-color: rgba(0,0,0, 0.15);
  margin: auto;
}
</style>
