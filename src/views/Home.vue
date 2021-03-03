<template>
  <div>
    <div uk-grid class="uk-flex uk-flex-middle uk-container uk-margin-auto">
      <div class="uk-width-1-3@m uk-width-1-2@s uk-padding uk-text-center">
        <router-link to="/the-house-uptown">
          <img class="uk-box-shadow-large book-cover" src="@/assets/house-uptown-cover.jpg">
        </router-link>
      </div>
      <div class="uk-width-1-3@m uk-width-1-2@s uk-padding uk-text-center">
        <router-link to="/the-house-uptown">
          <img class="uk-box-shadow-large book-cover" src="@/assets/house-uptown-uk.jpg">
        </router-link>
      </div>
      <div class="uk-width-1-3@m uk-text-left uk-padding">
        <div class="uk-text-center">
          <p class="uk-margin-remove">Available from:</p>
          <a class="uk-button uk-button-default" href="https://www.indiebound.org/book/9781250784186?aff=macmillan" onClick="ga('send', 'event', 'BuyLink', 'indiebound', '9781250784186 Melissa Ginsburg');" target="_blank">Indiebound</a>
          <a class="uk-button uk-button-default" href="http://www.kqzyfj.com/click-7992675-42121?url=http://www.booksamillion.com/product/9781250784186" onClick="ga('send', 'event', 'BuyLink', 'booksamillion', '9781250784186 Melissa Ginsburg');" target="_blank">Books a Million</a>
          <a class="uk-button uk-button-default" href="https://www.barnesandnoble.com/w/the-house-uptown-melissa-ginsburg/1136846437?ean=9781250784186" onClick="ga('send', 'event', 'BuyLink', 'bn', '9781250784186 Melissa Ginsburg');" target="_blank">B & N</a>
          <a class="uk-button uk-button-default" href="https://books.apple.com/us/book/the-house-uptown/id1512784604?at=10ldnU&ct=MACfibtheuptownhouseauthorweblpgb" onClick="ga('send', 'event', 'BuyLink', 'apple', '9781250784186 Melissa Ginsburg');" target="_blank">Apple</a>
          <a class="uk-button uk-button-default" href="https://www.amazon.com/dp/1250784182?tag=MACfibtheuptownhouseauthorweblpgb-20" onClick="ga('send', 'event', 'BuyLink', 'amazon', '9781250784186 Melissa Ginsburg');" target="_blank">Amazon</a>
        </div>
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
}
.date {
  letter-spacing: 1px;
}
.uk-button-default {
  font-family: 'Proza Libre';
  font-weight: 600;
  background: white;
  margin: 2px;
}
</style>
