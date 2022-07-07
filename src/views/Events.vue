<template>
  <div class="uk-margin-xlarge-top">
    <div class="uk-margin-auto uk-container-small uk-text-justify uk-padding">
      <h2>Events</h2>
      <div v-if="!this.events" class="uk-text-center">
        <div uk-spinner></div>
      </div>
      <div v-else class="press">
        <ul>
          <li v-for="(event, index) in this.events" :key="index">
            <h3>June 26, 7CT – Noir at the Bar</h3>
            <p>
              {{event.description}}
              <a v-if="event.link"
                :href="event.link"
                target="_blank"
                class="attribution">
                  More info
              </a>
            </p>
          </li>
          <li>
            <h3>June 26, 7CT – Noir at the Bar</h3>
            <p>
              An in person: event at Wild Roast Cafe, Hoover, AL. <a class="attribution" href="https://www.wildroastcafe.com/events">Tickets here.</a>
            </p>
          </li>
        </ul>
        {{this.events}}
      </div>
    </div>
  </div>
</template>

<script>
const eventsUrl =
  'https://sheets.googleapis.com/v4/spreadsheets/1Wmt4fqEKt5K4zAs1-fB7oxqrLXcVb1squuEh5acQYwM/values/Sheet1!A2:E?key=AIzaSyCG2zBnERecczl4k8hbWlV5cdKCgieM_cE'

export default {
  name: 'Events',
  data: function () {
    return {
      events: null
    }
  },
  methods: {
    setEvents(data) {
      this.events = data.values.map(function(row) {
        return {
          title: row[0],
          description: row[1],
          link: row[2],
          date: row[3],
          time: row[4]
        }
      });
    },
  },
  mounted() {
    fetch(eventsUrl)
      .then(response => response.json())
      .then(data => this.setEvents(data));

  }
}

</script>


<style scoped>
a, .uk-spinner {
  color: #DB2D12;
}
ul {
  list-style: none;
  padding: 0;
}
h3 {
  font-family: 'Proza Libre';
  font-size: 1.1em;
  margin-bottom: 5px;
}
p {
  margin: 5px 0 20px;
}

</style>
