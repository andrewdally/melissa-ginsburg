<template>
  <div class="uk-container">
    <div uk-grid class="uk-flex uk-flex">
      <div>
        <h2>Fiction</h2>
        <router-link to="/the-house-uptown">
          <img class="uk-box-shadow-large book-cover" src="@/assets/house-uptown-uk.jpg">
        </router-link>
        <router-link to="/sunset-city">
          <img class="uk-box-shadow-large book-cover" src="@/assets/sunset-city.jpg">
        </router-link>
      </div>
      <div>
        <h2>Poetry</h2>
        <router-link to="dear-weather-ghost">
          <img class="uk-box-shadow-large book-cover" src="@/assets/dear-weather-ghost.jpg">
        </router-link>
        <a>
          <img class="uk-box-shadow-large book-cover" src="@/assets/arbor.jpg">
        </a>
        <a>
          <img class="uk-box-shadow-large book-cover" src="@/assets/double-blind.jpg">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Books',
  components: {
  },
}
</script>

<style scoped>
.date {
  letter-spacing: 1px;
}
.uk-button-default {
  font-family: 'Proza Libre';
  font-weight: 600;
  background: white;
  margin: 2px;
}
.book-cover {
  max-height: 360px;
  margin: 0 36px 36px 0;
}

</style>
