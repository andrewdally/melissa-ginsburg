<template>
<book-layout book-cover="arbor-scan.jpg">
  <template v-slot:book-synopsis>
    <p>
      Poems that exist in and emanate out of silence and horizontal spaces, and a great deal of cold, Ginsburg's excellent Arbor is dark and clear and beautiful, all still water and towering columns of air.
    </p>
  </template>
  <template v-slot:purchase-links>
    <a class="uk-button uk-button-text" href="https://www.thediagram.com/nmp/books.html">New Michigan Press</a>
  </template>
  <template v-slot:praise>
  </template>
</book-layout>
</template>
<script>
import BookLayout from '@/layouts/BookLayout.vue'

export default {
  name: 'Arbor',
  components: {
    BookLayout
  },
}
</script>

