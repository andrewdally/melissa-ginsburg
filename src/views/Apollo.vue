
<template>
<book-layout book-cover="apollo.jpg">
  <template v-slot:book-synopsis>
    <p>
      Through these deftly woven poems Melissa Ginsburg’s Apollo maps a constellation of minds in orbit—celestial, human, machine—while brushing Greek mythology and sociopolitical commentary along the way. The voices within are magnetized, fueled with a rich longing as they explore the deceptions of perspective and the permeability of truth. Expect all the glitter Ginsburg is known for: wry humor, intense lyricism, provocative musing.
    </p>
  </template>
  <template v-slot:purchase-links>
    <a class="uk-button uk-button-text" href="https://www.condenserypress.com/product/apollo">Condensery Press</a>
  </template>
  <template v-slot:praise>
  </template>
</book-layout>
</template>
<script>
import BookLayout from '@/layouts/BookLayout.vue'

export default {
  name: 'Apollo',
  components: {
    BookLayout
  },
}
</script>

