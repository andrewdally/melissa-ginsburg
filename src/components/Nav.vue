<template>
  <div>
    <div class="uk-fixed-nav">
      <nav class="uk-navbar" uk-navbar>
        <div class="uk-navbar-left">
          <router-link to="/" class="uk-navbar-item uk-logo">
            Melissa Ginsburg
          </router-link>
        </div>
        <div class="uk-navbar-right">
          <ul class="uk-navbar-nav uk-visible@m">
            <li v-bind:class="isActive('the-house-uptown')">
              <router-link to="/the-house-uptown">The House Uptown</router-link>
            </li>
            <li v-bind:class="isActive('books')">
              <router-link to="/books">Books</router-link>
            </li>
            <li v-bind:class="isActive('poems')">
              <router-link to="poems">Poems &c.</router-link>
            </li>
            <li v-bind:class="isActive('about')">
              <router-link to="/about">About</router-link>
            </li>
          </ul>
          <a class="uk-navbar-toggle uk-hidden@m" uk-navbar-toggle-icon href="#offcanvas" uk-toggle></a>
        </div>
      </nav>
    </div>
    <div id="offcanvas" uk-offcanvas="mode: push; overlay: true; flip: true;">
      <div class="uk-offcanvas-bar">
        <div class="uk-panel">
          <a uk-close class="uk-offcanvas-close"></a>
          <ul class="uk-nav uk-nav-default">
            <li v-bind:class="isActive('the-house-uptown')">
              <router-link class="uk-offcanvas-close" to="/the-house-uptown">The House Uptown</router-link>
            </li>
            <li v-bind:class="isActive('books')">
              <router-link class="uk-offcanvas-close" to="/books">Books</router-link>
            </li>
            <li v-bind:class="isActive('poems')">
              <router-link class="uk-offcanvas-close" to="poems">Poems &c.</router-link>
            </li>
            <li v-bind:class="isActive('about')">
              <router-link class="uk-offcanvas-close" to="/about">About</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data: function() {
    return {
      navStyle: '',
      navParallax: ''
    }
  },
  methods: {
    isActive (routeName) {
      if (routeName === this.$route.name) {
        return 'uk-active'
      } else {
        return ''
      }
    },
  },
}
</script>

<style scoped>
.uk-fixed-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  color: white;
  z-index: 980;
}
.uk-logo {
  font-family: 'Cormorant Garamond';
  color: #222;
  font-size: 36px;
  font-weight: 600;
}
.app-home .uk-logo {
  color: white;
}
.app-home .uk-navbar-nav>li>a{
  color: white;
}
.uk-navbar-nav>li>a,
.uk-navbar-nav>li>a:hover,
.uk-navbar-nav>li>a:active
{
  color: #222;
  text-transform: none;
  font-weight: 600;
  font-family: "Proza Libre";
  font-size: 0.925rem;
}
.uk-navbar-nav>li>a:hover {
  color: #F16A55;
}
.uk-navbar-nav>li>a.router-link-active {
  color: #DB2D12;
}
.uk-offcanvas-close {
  position: relative;
  padding:15px;
  color: white !important;
}
.uk-navbar-toggle {
  color: white;
}
.uk-offcanvas-bar .uk-nav {
  font-size: 1rem;
}
</style>
