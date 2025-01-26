<template>
    <div class="p-6">
      <div v-html="projectContent" class="prose"></div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'ProjectPage',
    data() {
      return {
        projectName: '',
        projectContent: '',
      };
    },
    created() {
      this.loadEvent();
    },
    methods: {
      async loadEvent() {
        const projectId = this.$route.params.id;
        const filename = `${projectId}.html`;
  
        // Adjust path for GitHub Pages
        // const basePath = process.env.NODE_ENV === 'production' ? '/' : '/';
        // const filePath = `${basePath}/projects/${filename}`;
        const filePath = `/projects/${filename}`;
  
        try {
          const response = await axios.get(filePath);
          this.projectTitle = projectId; // Use a more appropriate title if needed
          this.projectContent = response.data;
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
  