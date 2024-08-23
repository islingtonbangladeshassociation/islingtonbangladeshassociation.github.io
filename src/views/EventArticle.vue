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
      try {
        const response = await axios.get(`/articles/${filename}`);
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
