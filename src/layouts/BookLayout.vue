<template>
  <div>
    <div uk-grid class="uk-container-small uk-margin-auto uk-margin-top uk-flex uk-flex-middle">
      <div class="uk-width-1-2@s">
        <img class="uk-box-shadow-large book-cover" :src="require(`@/assets/${bookCover}`)">
        <slot name="book-image"></slot>
      </div>
      <div class="uk-width-1-2@s uk-text-left uk-padding">
        <slot name="book-synopsis"></slot>
      </div>
      <div class="uk-width-1-1">
        <hr>
        <p class="uk-text-center">
          <slot name="purchase-links"></slot>
        </p>
        <hr>
      </div>
      <div>
        <slot name="praise"></slot>
      </div>
      <slot name="extra"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookLayout',
  props: ['bookCover']
}
</script>

<style scoped>
.attribution {
  display: inline-block;
  color: #DB2D12;
}
.attribution a {
  color: #DB2D12;
  text-decoration: underline;
}
.attribution a:hover {
  color: #F16A55;
}
.press p {
  margin: 5px 0 20px;
}
.book-cover {
  max-height: 540px;
}
h3 {
  font-family: 'Proza Libre';
  font-size: 1.1em;
  margin-bottom: 5px;
}

</style>
