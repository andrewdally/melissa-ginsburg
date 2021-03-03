<template>
  <div>
    <div uk-grid class="uk-container-small uk-margin-auto uk-margin-top uk-flex uk-flex-middle">
      <div class="uk-width-1-2@s">
        <img class="uk-box-shadow-large book-cover" src="@/assets/house-uptown-uk.jpg">
      </div>
      <div class="uk-width-1-2@s uk-text-left uk-padding">
        <p>
          Ava, fourteen years old and totally on her own, has still not fully processed her mother’s death when she finds herself on a train heading to New Orleans, to stay with Lane, the grandmother she barely remembers.
        </p>
        <p>
          Lane is a well-known artist in the New Orleans art scene. She spends most of her days in a pot-smoke haze, sipping iced coffee, and painting, which has been her singular focus for years. Her grip on reality is shaky at best, but her work provides a comfort.
        </p>
        <p>
          Ava’s arrival unsettles Lane. The girl bears an uncanny resemblance to her daughter, whom she was estranged from before her death. Now her presence is dredging up painful and disturbing memories, which forces Lane to retreat even further into her own mind. As Ava and Lane attempt to find their way and form a bond, the oppressive heat and history of New Orleans bears down on them, forcing a reckoning neither of them are ready for.
        </p>
      </div>
      <div>
        <h2>Praise</h2>
        <p>
          Melissa Ginsburg's page-turner is a devastatingly simple trap: characters so beguiling you settle in for a charming coming-of-age fable before realizing the spring is snapping shut on an inexorable and satisfying calamity. The theme is the-past-isn't-dead-it-isn't-even-past, but painted not with Faulkner's heavy hand so much as with the crisp ingenuity of Ross Macdonald. <span class="attribution">—Jonathan Lethem</span>
        </p>
        <p>
          A magnetic, deftly-crafted tale about the ties that bind family and found-family across generations. Ginsburg is a master of depicting the heartbreaking inner lives of people aching for connection in a world spinning apart. <span class="attribution">—Maurice Ruffin</span>
        </p>
        <p>
          Ginsburg's brilliance is on full display in The House Uptown. By giving us these layered, complicated characters, all suffering from previous traumas, Ginsburg reveals how the past keeps reaching toward us, and what we'll do to stay out of its reach. It's a book that breaks you down, even though you can't put it down. <span class="attribution">—Kevin Wilson</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'TheHouseUptown',
  components: {
  },
}
</script>

<style scoped>
.attribution {
  display: inline-block;
  color: #DB2D12;
}
.uk-button-default {
  font-family: 'Proza Libre';
  font-weight: 600;
  background: white;
  margin: 2px;
}
.book-cover {
  max-height: 540px;
}

</style>
