<template>
<book-layout book-cover="dear-weather-ghost.jpg">
  <template v-slot:book-synopsis>
    <p>
      The poems in Dear Weather Ghost, Melissa Ginsburg’s debut collection, examine the idea of place from the viewpoint of exile, both actual—“in the green shadow of an old stand of forest”—and psychological—“a dune of the outside builds in me.” The poems’ speakers and their banishments are varied: a heron “great and blue and standing still,” a child who “used a spool for a racecar,” a mermaid yearning for “a rock on which to perch.” Unmoored, the speakers turn to objects as a means of connecting to place. One speaker observes villagers who “cut snowflakes out of paper / and taped them to the windows,” noting this “seemed like an attractive lifestyle.” Watching, remembering, wondering, these speakers want “danger in the form of deep feeling.”
    </p>
  </template>
  <template v-slot:purchase-links>
    <a class="uk-button uk-button-text" href="https://fourwaybooks.com/site/dear-weather-ghost">Four Way Books</a>
  </template>
  <template v-slot:praise>
    <h2>Praise</h2>
    <p>
      Melissa Ginsburg’s poems are delicate but they are not fragile. They speak from a place they call ‘permanent winter,’ where resilience, exactness, vigilance and honest respect for silence are the necessary attributes of survival. This book is a subtly beautiful address to the air, and it approaches the transformative.  <span class="attribution">—Mark Levine</span>
    </p>
    <p>
      In deceptively simple language, and with a child’s-eye view, Melissa Ginsburg’s poems describe a world as complex and surprising as any. In sequence they build a music that is truly mesmerizing. In poem after poem we are in the presence of a voice both gentle and terrified, and an eye the same. And as the pages and birthdays pass—as all things do—we come to the grown truth, that the games we enacted as children we endlessly reenact as adults. A tremendous debut. <span class="attribution">—Mary Ruefle</span>
    </p>
    <p class="press">
      These are beautiful poems because they disorient us. Ginsburg’s compact poems dwell, as Heidegger would say, in their rural landscapes, mysterious, but so embodied they cast long shadows. The poems accrue in language and feeling— each the kind of metaphorical ‘event’ poet Mary Ruefle urges: they awaken the reader to what the world already knows. <span class="attribution">Read the full review at <a>The Rumpus</a></span>
    </p>
  </template>
</book-layout>
</template>
<script>
import BookLayout from '@/layouts/BookLayout.vue'

export default {
  name: 'DearWeatherGhost',
  components: {
    BookLayout
  },
}
</script>
