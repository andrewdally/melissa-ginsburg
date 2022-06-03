<template>
  <div class="uk-container">
    <div uk-grid class="uk-flex uk-flex">
      <div>
        <h2>Poetry</h2>
        <router-link to="dear-weather-ghost">
          <img class="uk-box-shadow-large book-cover" src="@/assets/dear-weather-ghost.jpg">
        </router-link>
      </div>
      <div>
        <h2>Fiction</h2>
        <router-link to="/the-house-uptown">
          <img class="uk-box-shadow-large book-cover" src="@/assets/house-uptown.jpg">
        </router-link>
        <router-link to="/sunset-city">
          <img class="uk-box-shadow-large book-cover" src="@/assets/sunset-city.jpg">
        </router-link>
      </div>
      <div>
        <h2>Chapbooks</h2>
        <a>
          <router-link to="arbor">
            <img class="uk-box-shadow-large book-cover" src="@/assets/arbor-scan.jpg">
          </router-link>
        </a>
        <a>
          <router-link to="double-blind">
            <img class="uk-box-shadow-large book-cover" src="@/assets/double-blind.jpg">
          </router-link>
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
@media only screen and (max-width: 639px) {
  .book-cover {
    min-height: auto;
    min-width: auto;
    max-height: none;
    height: auto;
    width: 100%;
    margin: 24px 0;
  }
}

</style>
