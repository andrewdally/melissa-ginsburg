<template>
  <book-layout book-cover="sunset-city.jpg">
    <template v-slot:book-synopsis>
      <p>
        Twenty-two-year-old Charlotte Ford reconnects with Danielle, her best friend from high school, a few days before Danielle is found bludgeoned to death in a motel room. In the wake of the murder, Charlotte's life unravels and she descends into the city's underbelly, where she meets the strippers, pornographers and drug dealers who surrounded Danielle in the years they were estranged.
      </p>
      <p>
        Ginsburg's Houston is part of a lesser known south, where the urban and rural collide gracelessly. In this shadowy world, culpability and sympathy blur in a debut novel which thrillingly brings its three female protagonists to the fore. Scary, funny and almost unbearably sad, Sunset City is written with rare grace and empathy holding you transfixed, praying for some kind of escape for Charlotte.
      </p>
    </template>
    <template v-slot:purchase-links>
      <a class="uk-button uk-button-text" href="https://www.indiebound.org/book/9780062429704">Indiebound</a>
      <a class="uk-button uk-button-text" href="https://www.amazon.com/Sunset-City-Novel-Melissa-Ginsburg/dp/0062429701">Amazon</a>
    </template>
    <template v-slot:praise>
      <h2>Praise</h2>
      <p>
        Melissa Ginsburg’s Sunset City entrances from its first pages. Suffused with longing, regret and a twisty eroticism, it’s a mystery of character as much as crime, and is literary noir at its most captivating. <span class="attribution">—Megan Abbott</span>
      </p>
      <p>
        Smart and sexy, sexy and smart, this literary crime novel has it all. Melissa Ginsburg understands our darkest secrets and desires, and she’s telling what she knows. Get ready, America. <span class="attribution">—Tom Franklin</span>
      </p>
      <p>
        In her stunning debut, Melissa Ginsburg has found in Houston what earlier noir writers found in Los Angeles: a dark netherworld of sin, violence, and blighted souls. Sunset City is sexy, disturb-ing, intense, and, at times, movingly poignant. <span class="attribution">—Ron Rash</span>
      </p>
    </template>
  </book-layout>
</template>

<script>
import BookLayout from '@/layouts/BookLayout.vue'

export default {
  name: 'SunsetCity',
  components: {
    BookLayout
  }
}
</script>
