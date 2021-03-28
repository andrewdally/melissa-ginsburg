<template>
<book-layout book-cover="house-uptown.jpg">
  <template v-slot:book-synopsis>
    <p>
      Ava, fourteen years old and totally on her own, has still not fully processed her mother’s death when she finds herself on a train heading to New Orleans, to stay with Lane, the grandmother she barely remembers.
    </p>
    <p>
      Lane is a well-known artist in the New Orleans art scene. She spends most of her days in a pot-smoke haze, sipping iced coffee, and painting, which has been her singular focus for years. Her grip on reality is shaky at best, but her work provides a comfort.
    </p>
    <p>
      Ava’s arrival unsettles Lane. The girl bears an uncanny resemblance to her daughter, whom she was estranged from before her death. Now her presence is dredging up painful and disturbing memories, which forces Lane to retreat even further into her own mind. As Ava and Lane attempt to find their way and form a bond, the oppressive heat and history of New Orleans bears down on them, forcing a reckoning neither of them are ready for.
    </p>
    <p>
      <strong>Signed copies available at <a class="attribution" href="https://www.squarebooks.com/book/9781250784186">Square Books</a>.</strong>
    </p>
  </template>
  <template v-slot:purchase-links>
    <a class="uk-button uk-button-text" href="https://www.indiebound.org/book/9781250784186?aff=macmillan" onClick="ga('send', 'event', 'BuyLink', 'indiebound', '9781250784186 Melissa Ginsburg');" target="_blank">Indiebound</a>
    <a class="uk-button uk-button-text" href="http://www.kqzyfj.com/click-7992675-42121?url=http://www.booksamillion.com/product/9781250784186" onClick="ga('send', 'event', 'BuyLink', 'booksamillion', '9781250784186 Melissa Ginsburg');" target="_blank">Books a Million</a>
    <a class="uk-button uk-button-text" href="https://www.barnesandnoble.com/w/the-house-uptown-melissa-ginsburg/1136846437?ean=9781250784186" onClick="ga('send', 'event', 'BuyLink', 'bn', '9781250784186 Melissa Ginsburg');" target="_blank">Barnes & Noble</a>
    <a class="uk-button uk-button-text" href="https://books.apple.com/us/book/the-house-uptown/id1512784604?at=10ldnU&ct=MACfibtheuptownhouseauthorweblpgb" onClick="ga('send', 'event', 'BuyLink', 'apple', '9781250784186 Melissa Ginsburg');" target="_blank">Apple</a>
    <a class="uk-button uk-button-text" href="https://www.amazon.com/dp/1250784182?tag=MACfibtheuptownhouseauthorweblpgb-20" onClick="ga('send', 'event', 'BuyLink', 'amazon', '9781250784186 Melissa Ginsburg');" target="_blank">Amazon</a>
  </template>

  <template v-slot:praise>
    <h2>Praise</h2>
    <p>
      This is a superbly written, intriguing character study of how the past impacts on the present. <a class="attribution" href="https://www.theguardian.com/books/2021/mar/19/the-best-recent-and-thrillers-review-roundup">—Laura Wilson, The Guardian</a>
    </p>
    <p>
      Melissa Ginsburg's page-turner is a devastatingly simple trap: characters so beguiling you settle in for a charming coming-of-age fable before realizing the spring is snapping shut on an inexorable and satisfying calamity. The theme is the-past-isn't-dead-it-isn't-even-past, but painted not with Faulkner's heavy hand so much as with the crisp ingenuity of Ross Macdonald. <span class="attribution">—Jonathan Lethem</span>
    </p>
    <p>
      A magnetic, deftly-crafted tale about the ties that bind family and found-family across generations. Ginsburg is a master of depicting the heartbreaking inner lives of people aching for connection in a world spinning apart. <span class="attribution">—Maurice Ruffin</span>
    </p>
    <p>
      Ginsburg's brilliance is on full display in The House Uptown. By giving us these layered, complicated characters, all suffering from previous traumas, Ginsburg reveals how the past keeps reaching toward us, and what we'll do to stay out of its reach. It's a book that breaks you down, even though you can't put it down. <span class="attribution">—Kevin Wilson</span>
    </p>
    <p>
      <em>The House Uptown</em> is a powerful coming-of-age novel and a thoughtful portrait of one of the world’s great cities.
      <a class="attribution" href="https://crimereads.com/10-novels-you-should-read-this-march">—Dwyer Murphy, CrimeReads</a>
    </p>
  </template>
  <template v-slot:extra>
    <div class="press">
      <h2>Events</h2>
      <h3>April 13 – Garden District Book Shop</h3>
      <p>
        Melissa Ginsburg in Conversation with Laura Lippman. <a class="attribution" href="https://www.gardendistrictbookshop.com/event/virtualzoom-event-melissa-ginsburg-conversation-laura-lippman-house-uptown">Register here.</a>
      </p>
      <h3>March 16 – Murder By the Book</h3>
      <p>
        Melissa Ginsburg in conversation with Ace Atkins. <a class="attribution" href="https://www.youtube.com/watch?v=w_zFy_lXDVM">Watch here.</a>
      </p>
      <h3>March 15 – Square Books</h3>
      <p>
        Melissa Ginsburg in conversation with Maurice Carlos Ruffin. <a class="attribution" href="https://www.youtube.com/watch?v=5lPLuhRVfdI">Watch here.</a>
      </p>
    </div>
    <div class="press">
      <h2>Press</h2>
      <h3>Melissa Ginsburg on Mystery, New Orleans and The House Uptown</h3>
      <p>
        I used to think that my poetry and fiction were entirely separate, but I find them influencing each other more and more.
        Read more at <a class="attribution" href="https://southernreviewofbooks.com/2021/03/11/the-house-uptown-melissa-ginsburg-interview/">Southern Review of Books.</a>
      <h3>
        An omelet, a headache, an extramarital affair, & some musing about love and power.
      </h3>
      <p>
        Read more at <a class="attribution" href="https://page69test.blogspot.com/2021/03/the-house-uptown.html">The Page 69 Test.</a>
      </p>
      <h3>An Interiew With Marshal Zeringue</h3>
      <p>
        One of the reasons I write fiction is to explore the way people inadvertently hurt those they love.
        Read more at <a class="attribution" href="https://writerinterviews.blogspot.com/2021/03/melissa-ginsburg.html">Author Interviews.</a>
      </p>
    </div>
  </template>
</book-layout>
</template>

<script>
import BookLayout from '@/layouts/BookLayout.vue'

export default {
  name: 'TheHouseUptown',
  components: {
    BookLayout
  },
}
</script>
