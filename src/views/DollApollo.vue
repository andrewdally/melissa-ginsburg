<template>
<book-layout book-cover="doll-apollo.jpg">
  <template v-slot:book-synopsis>
    <p>
      With lush imagery and surprising syntactical turns, the poems in <em>Doll Apollo</em> merge mythology with close attention to the patterns, colors, and contours of the material world. Through the figure of the paper doll, the hoax conspiracy surrounding the Apollo moon landing, and lyrics embedded with violence and beauty, Melissa Ginsburg’s feminist ecopoetics weaves the domestic and celestial into considerations of female identity, desire, spiritual yearning, and doubt. Throughout, Doll Apollo remains rooted in scenery and music, as Ginsburg embraces her subjects with humor and verbal and formal play.
    </p>
  </template>
  <template v-slot:purchase-links>
    <a class="uk-button uk-button-text" href="https://lsu.longleafservices.org/" target="_blank">LSU Press</a>
    <a class="uk-button uk-button-text" href="https://www.barnesandnoble.com/w/doll-apollo-melissa-ginsburg/1141376711" target="_blank">Barnes & Noble</a>
  </template>
  <template v-slot:praise>
    <h2>Praise</h2>
    <p>
      <em>Doll Apollo</em> swallows us into the secrets of the stitched surface, presses us into the spaces between threads. We are launched from blackberry roots to the face of the moon. We rove over landscapes of language both sly and sylleptic; we are given the slip, fall for the trick, and love it. These poems are brilliant cut crystal, refracting both light and facts. Tip them slightly and watch meaning quiver and split. This is joyous attention. Ginsburg's is a dreamy book you'll want to fold yourself into again and again.
      —Claire Wahmanholm
    </p>
    <p>
      The poems of <em>Doll Apollo</em> chart a fascinating constellation of emotional and spiritual intricacy. These virtuosic lyrics sift the fragments of our seemingly divided societal moment to find luminous and enduring connections between technology and faith, mythology and modernity. From ruminations on the nature of paper dolls—those “template mother[s]”—to views of lunar valleys marked by “parabolic arc[s] of dust / behind the rover's wheels,” Ginsburg's keen poetic imagination attends to truths minute and cosmic. This book is a marvel of beauty and deep vision. —Kiki Petrosino
    </p>
    <p>
      When I was a child I had a box of seashells I had collected from various beaches. Some Atlantic; some Pacific. I would take them out and set them together in various combinations just to admire the patterns, colors, textures--to be lost inside them, to feel the contours of them. While reading Melissa Ginsburg's <em>Doll Apollo</em> I felt that same habit return: the paying attention to surfaces, repetitions, threads. Much admiring the ways in which the pastoral landscape and the pastoral tradition in poetry sort of overlap and at the same time tug at one another: Daphne pulling in one direction; Apollo in another. One of them is part tree and therefore part paper: folded notes, garlands, cut out snowflakes. The other is part sun, and therefore spacecraft, lunar landing vehicle, fuelspent rocket stage. Though they are tethered together, they are still very much creatures of their own wills, independent of one another and yet bound to repeat like a scene printed on fabric, both becoming and disappearing at the same time, complicating and unraveling. "As the pressing of flowers is an undoing but but also a preservation," writes Ginsburg, "one must split a thick blossom/in order to flatten." —D.A. Powell
    </p>
    <p>
      Each well-made lyric poem is a solution to the problem of lyricism--the problem of fluency as a response to, and memorialization of, difficulty. <em>Doll Apollo</em> is a book of solutions--the poems do not ignore the problem of their own fluency, but neither do they compromise their fluency, which could only be patronizing, a gesture; their beauty is the inevitable beauty of achieved art, not the easy beauty of art that seeks to be ingratiating, and is therefore incomplete. These poems answer the reader's perennial hope. —Shane McCrae
    </p>
  </template>
</book-layout>
</template>

<script>
import BookLayout from '@/layouts/BookLayout.vue'

export default {
  name: 'DollApollo',
  components: {
    BookLayout
  },
}
</script>
