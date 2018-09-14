<template>
  <div>
    <h1>Events Listing</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event"/>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'

export default {

  async asyncData ({ app }) {
    const { events } = await app.$axios.$get(`/db.json`);
    return { events: events };
  },

  components: {
    EventCard
  },

  data() {
    return {
      events: []
    }
  }
}
</script>
