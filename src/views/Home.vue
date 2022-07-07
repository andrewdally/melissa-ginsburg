<template>
  <div>
    <div class="uk-flex uk-flex-middle uk-flex-center uk-container uk-margin-auto">
      <div class="uk-width-1-2 uk-text-center">
        <router-link to="/doll-apollo">
          <img class="uk-box-shadow-large book-cover" src="@/assets/doll-apollo.jpg">
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

</script>

<style scoped>
.book-cover {
  max-height: 540px;
  height: auto;
  width: auto;
  min-width: 320px;
}
.date {
  letter-spacing: 1px;
}
.uk-button-default {
  font-family: 'Proza Libre';
  text-transform: none;
  font-weight: 400;
  color: white;
  margin: 6px;
  border-radius: 5px;
  padding: 0 15px;
  line-height: 32px;
}
.uk-button-default:hover {
  color: #F16A55;
  border-color: #F16A55;
}
@media only screen and (max-width: 639px) {
  .uk-grid>*{
    padding-right: 30px;
  }
}
</style>
