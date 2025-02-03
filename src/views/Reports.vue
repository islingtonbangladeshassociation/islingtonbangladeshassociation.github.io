<template>
    <div class="p-6">
      <h1 class="text-4xl font-bold text-center mb-8">Annual Reports</h1>
      <div v-if="pdfFiles.length > 0" class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div v-for="file in pdfFiles" :key="file.name" class="text-center">
          <a :href="file.path" target="_blank">
            <img :src="file.thumbnail" alt="PDF Thumbnail" class="w-full h-58 object-cover border rounded shadow">
            <p class="mt-2 text-blue-600 hover:underline">{{ file.name }}</p>
          </a>
        </div>
      </div>
      <p v-else class="text-gray-500">No reports available.</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Reports',
    data() {
      return {
        reportFolder: "/reports/", // Moved here
        pdfFiles: []
      };
    },
    mounted() {
      this.fetchPDFs();
    },
    methods: {
      fetchPDFs() {
        const reportFolders = [
          'AnnualReport2024', // Folder names
        ];
  
        this.pdfFiles = reportFolders.map(folder => ({
          name: `${folder}`,
          path: `${this.reportFolder}${folder}/report.pdf`, // Using reportFolder here
          thumbnail: `${this.reportFolder}${folder}/thumbnail.png` // Using reportFolder here
        }));
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 900px;
  }
  </style>
  