<template>
  <div class="p-6">
    <h1 class="text-4xl font-bold mb-8">Our Projects</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="project in projects"
        :key="project.id"
        class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
        @click="goToProject(project.id)"
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
          id: 'gardening_project',
          title: 'Gardening Initiative',
          description: 'A regular gardening session for the community.',
          date: 'January 15, 2023',
          tags: ['Community', 'Elderly'],
          image: 'https://images.immediate.co.uk/production/volatile/sites/10/2018/11/2048x1365-10-New-Year-resolutions-for-garden-LI3022053-488e702.jpg',
        },
        {
          id: 'advice_info_guidance_project',
          title: 'Advice Information and Guidance Project',
          description: 'Ongoing advisory services for the community',
          date: 'February 20, 2023',
          tags: ['Advice'],
          image: 'https://images.squarespace-cdn.com/content/v1/5ee100961823342d37c45bcc/1610439251199-5N3VNV12RVXXNT1ZNB2A/advice.jpg',
        },
        {
          id: 'you_are_not_alone_project',
          title: 'You Are Not Alone Project',
          description: 'Combatting local loneliness',
          date: 'March 10, 2023',
          tags: ['Advice', 'Community', 'Support'],
          image: 'data:image/jpeg;base64,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',
        },
        {
          id: 'young_persons_project',
          title: 'Young Person’s Project',
          description: 'Services for empowering young people',
          date: 'March 10, 2023',
          tags: ['Advice', 'Education'],
          image: 'https://www.voicesofyouth.org/sites/voy/files/images/2022-08/people-3509144_1920.jpg',
        },
        {
          id: 'physical_mental_wellbeing_project',
          title: 'Physical & Mental wellbeing Project',
          description: 'A brief description of Project Gamma goes here.',
          date: 'March 10, 2023',
          tags: ['Health', 'Community'],
          image: 'https://whws.org.au/wp-content/uploads/2021/12/get-on-top-of-mental-health-early.jpg',
        },
        // Add more projects as needed
      ],
    };
  },

  methods: {
    goToProject(id) {
      this.$router.push(`/projects/${id}`);
    },
  },

};
</script>

<style scoped>
/* Add specific styles if needed */
</style>
