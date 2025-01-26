<template>
  <div class="p-6">
    <div v-html="eventContent" class="prose"></div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'EventArticle',
  data() {
    return {
      eventTitle: '',
      eventContent: '',
    };
  },
  created() {
    this.loadEvent();
  },
  methods: {
    async loadEvent() {
      const eventId = this.$route.params.id;
      const filename = `${eventId}.html`;

      // Adjust path for GitHub Pages
      const basePath = process.env.NODE_ENV === 'production' ? '/' : '/';
      const filePath = `${basePath}/events/${filename}`;

      try {
        const response = await axios.get(filePath);
        this.eventTitle = eventId; // Use a more appropriate title if needed
        this.eventContent = response.data;
      } catch (error) {
        console.error('Error loading event article:', error);
      }
    },
  },
};
</script>

<style scoped>
.prose {
  max-width: 65ch;
  margin: auto;
}
</style>
