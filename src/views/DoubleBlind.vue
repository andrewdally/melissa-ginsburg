<template>
<book-layout book-cover="double-blind.jpg">
  <template v-slot:book-synopsis>
    <p>
      If the door is hot <br>
      If the door is cold
    </p>
    <p>
      If I am the person behind my eyes <br>
      If sirens and churches, if vapors
    </p>
    <p>
      If the wood stepped back to make a road<br>
      And
    </p>
    <p>
      I was not my body
      I was not my thoughts
    </p>
  </template>
  <template v-slot:purchase-links>
    <a class="uk-button uk-button-text" href="https://dulcetshop.myshopify.com/products/double-blind-melissa-ginsburg">Dancing Girl Press</a>
  </template>
  <template v-slot:praise>
  </template>
</book-layout>
</template>
<script>
import BookLayout from '@/layouts/BookLayout.vue'

export default {
  name: 'DoubleBlind',
  components: {
    BookLayout
  },
}
</script>
