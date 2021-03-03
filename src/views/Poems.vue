<template>
  <div class="poems uk-margin-xlarge-top">
    <div class="uk-margin-auto uk-text-large uk-container-small uk-text-justify uk-padding">
      <ul>
        <li>Pastoral <span class="uk-text-muted">in</span> <a href="https://www.newyorker.com/magazine/2020/06/08/pastoral">The New Yorker</a></li>
        <li>History <span class="uk-text-muted">in</span> <a href="https://www.guernicamag.com/history/">Guernica</a></li>
        <li>The Faked Apollo Moon Landing & Apollo <span class="uk-text-muted">in</span> <a href="https://waywiser-press.com/melissa-ginsburg/">The Waywiser Press</a></li>
        <li>As Weapons Need Murder <span class="uk-text-muted">in</span> <a href="http://www.versedaily.org/2019/asweaponsneedmurder.shtml">Verse Daily </a></li>
        <li>Squab <span class="uk-text-muted">in</span> <a href="http://www.versedaily.org/2013/squab.shtml">Verse Daily</a></li>
        <li>The Beginning of the Analysis, I'd a road, & The Lake <span class="uk-text-muted">in</span> <a href="https://www.dreampoppress.net/melissa-ginsburg/">Dream Pop Press</a></li>
        <li>Drought & Prayer <span class="uk-text-muted">in</span> <a href="https://theboilerjournal.com/2018/02/27/melissa-ginsburg/">The Boiler</a></li>
        <li>Tigers <span class="uk-text-muted">in</span> <a href="https://poets.org/poem/tigers">poets.org</a></li>
        <li>Oversight <span class="uk-text-muted">in</span> <a href="https://poets.org/poem/oversight">poets.org</a></li>
        <li>The Job, Birthday, & Mermaid <span class="uk-text-muted">in</span> <a href="https://fourwayreview.com/fwr-monthly-three-poems-by-melissa-ginsburg/">Four Way Review</a></li>
        <li>Fixation <span class="uk-text-muted">in</span> <a href="http://diodepoetry.com/ginsburg_melissa/">Diode</a></li>
        <li>Séance <span class="uk-text-muted">in</span> <a href="https://kenyonreview.org/journal/mayjune-2016/selections/melissa-ginsburg/">Kenyon Review</a></li>
        <li>A Conversation with <span class="uk-text-muted">in</span> <a href="https://kenyonreview.org/conversation/melissa-ginsburg/ (interview)">Kenyon Review</a></li>
        <li>Heron & My Daughter <span class="uk-text-muted">in</span> <a href="https://thediagram.com/8_5/ginsburg.html">DIAGRAM</a></li>
        <li>Boxwood Hedge <span class="uk-text-muted">in</span> <a href="https://www.pangyrus.com/poetry/boxwood-hedge/">Pangyrus</a></li>
        <li>Minnows <span class="uk-text-muted">in</span> <a href="http://www.winteranthology.com/?vol=6&author=ginsburg&title=minnows">The Winter Anthology</a></li>
        <li>Crows <span class="uk-text-muted">in</span> <a href="http://www.winteranthology.com/?vol=6&author=ginsburg&title=crows">The Winter Anthology</a></li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.uk-text-muted {
  font-size: 1.2rem;
}
a {
  color: #DB2D12;
}
ul {
  list-style: none;
  padding: 0;
}

@media only screen and (min-width: 640px) {
  li {
    display: inline;
  }
  li::after {
    content: " / ";
    color: #999;
    margin: 0 5px;
  }
  li:last-child::after {
    content: none;
  }
  .uk-text-large {
    font-size: 1.5rem;
  }
}
@media only screen and (max-width: 639px) {
  .uk-text-large, .uk-text-muted {
    font-size: 1rem;
  }
  .uk-padding {
    padding: 12px;
  }
  li {
    margin-bottom: 12px;
  }
}

</style>
