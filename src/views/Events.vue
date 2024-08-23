<template>
  <div class="p-6">
    <h1 class="text-4xl font-bold text-center mb-8">Upcoming Events</h1>

    <!-- Display the current page of events -->
    <div class="space-y-8">
      <div
        v-for="event in paginatedEvents"
        :key="event.id"
        class="bg-white border border-gray-300 rounded-lg p-6 shadow-md cursor-pointer"
        @click="goToEvent(event.id)"
      >
        <div class="flex items-center mb-4">
          <h2 class="text-2xl font-semibold flex-1">{{ event.title }}</h2>
          <span
            :class="{
              'bg-green-500 text-white': isUpcoming(event.date),
              'bg-gray-500 text-white': !isUpcoming(event.date)
            }"
            class="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full"
          >
            {{ isUpcoming(event.date) ? 'Upcoming' : 'Completed' }}
          </span>
        </div>
        <p class="text-sm text-gray-500 mb-4">{{ formatDate(event.date) }}</p>
        <p class="text-lg mb-4">{{ event.description }}</p>
        <div class="flex space-x-4">
          <img
            v-if="event.image"
            :src="event.image"
            alt="Event Image"
            class="h-40 w-40 object-cover rounded-lg"
          />
        </div>
      </div>
    </div>

    <!-- Pagination Controls -->
    <div class="flex justify-center mt-8 space-x-4">
      <button
        @click="currentPage--"
        :disabled="currentPage === 1"
        class="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
      >
        Previous
      </button>
      <button
        @click="currentPage++"
        :disabled="currentPage === totalPages"
        class="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Events',
  data() {
    return {
      events: [
        // Sample events data with ids for routing
        {
          id: 1,
          title: 'Community Gathering',
          date: '2024-09-15',
          description:
            'Join us for our monthly community gathering where we discuss local issues, share ideas, and enjoy some food together.',
          image:
            'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg',
        },
        // Add more events as needed
      ],
      currentPage: 1,
      eventsPerPage: 5,
    };
  },
  computed: {
    sortedEvents() {
      return this.events.slice().sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
    },
    totalPages() {
      return Math.ceil(this.sortedEvents.length / this.eventsPerPage);
    },
    paginatedEvents() {
      const start = (this.currentPage - 1) * this.eventsPerPage;
      const end = start + this.eventsPerPage;
      return this.sortedEvents.slice(start, end);
    },
  },
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    },
    isUpcoming(date) {
      return new Date(date) > new Date();
    },
    goToEvent(id) {
      this.$router.push(`/events/${id}`);
    },
  },
};
</script>

<style scoped>
/* Add any additional styles here */
</style>
