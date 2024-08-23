<template>
  <div class="p-6">
    <h1 class="text-4xl font-bold mb-8">Our Projects</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="project in projects"
        :key="project.id"
        class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      >
        <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover" />
        <div class="p-4">
          <h2 class="text-2xl font-semibold mb-2">{{ project.title }}</h2>
          <p class="text-gray-600 mb-4">{{ project.description }}</p>
          <div class="flex items-center justify-between text-sm text-gray-500 mb-2">
            <span>{{ project.date }}</span>
            <div class="flex space-x-2">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="bg-teal-100 text-teal-800 px-2 py-1 rounded-full"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'Project Alpha',
          description: 'A brief description of Project Alpha goes here.',
          date: 'January 15, 2023',
          tags: ['Design', 'Development', 'UI/UX'],
          image: 'https://via.placeholder.com/400x300',
        },
        {
          id: 2,
          title: 'Project Beta',
          description: 'A brief description of Project Beta goes here.',
          date: 'February 20, 2023',
          tags: ['Marketing', 'Strategy'],
          image: 'https://via.placeholder.com/400x300',
        },
        {
          id: 3,
          title: 'Project Gamma',
          description: 'A brief description of Project Gamma goes here.',
          date: 'March 10, 2023',
          tags: ['Research', 'Analysis'],
          image: 'https://via.placeholder.com/400x300',
        },
        {
          id: 4,
          title: 'Project Gamma',
          description: 'A brief description of Project Gamma goes here.',
          date: 'March 10, 2023',
          tags: ['Research', 'Analysis'],
          image: 'https://via.placeholder.com/400x300',
        },
        {
          id: 5,
          title: 'Project Gamma',
          description: 'A brief description of Project Gamma goes here.',
          date: 'March 10, 2023',
          tags: ['Research', 'Analysis'],
          image: 'https://via.placeholder.com/400x300',
        },
        // Add more projects as needed
      ],
    };
  },
};
</script>

<style scoped>
/* Add specific styles if needed */
</style>
