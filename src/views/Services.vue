<template>
  <div class="p-6">
    <h1 class="text-4xl font-bold text-center mb-8">Our Services</h1>
    
    <!-- Centered Tabs -->
    <div class="flex justify-center mb-6">
      <ul class="flex border-b">
        <li class="-mb-px mr-1">
          <a @click="activeTab = 'outreach'" 
             :class="{
               'bg-white border-l border-t border-r rounded-t text-blue-700': activeTab === 'outreach',
               'text-blue-500 hover:text-blue-800': activeTab !== 'outreach'
             }"
             class="inline-block py-2 px-4 font-semibold cursor-pointer">Outreach</a>
        </li>
        <li class="mr-1">
          <a @click="activeTab = 'education'" 
             :class="{
               'bg-white border-l border-t border-r rounded-t text-blue-700': activeTab === 'education',
               'text-blue-500 hover:text-blue-800': activeTab !== 'education'
             }"
             class="inline-block py-2 px-4 font-semibold cursor-pointer">Education</a>
        </li>
        <li class="mr-1">
          <a @click="activeTab = 'health'" 
             :class="{
               'bg-white border-l border-t border-r rounded-t text-blue-700': activeTab === 'health',
               'text-blue-500 hover:text-blue-800': activeTab !== 'health'
             }"
             class="inline-block py-2 px-4 font-semibold cursor-pointer">Health & Wellbeing</a>
        </li>
        <li class="mr-1">
          <a @click="activeTab = 'advisory'" 
             :class="{
               'bg-white border-l border-t border-r rounded-t text-blue-700': activeTab === 'advisory',
               'text-blue-500 hover:text-blue-800': activeTab !== 'advisory'
             }"
             class="inline-block py-2 px-4 font-semibold cursor-pointer">Advisory</a>
        </li>
      </ul>
    </div>

    <!-- Tab Content (without boxed shadow) -->
    <div class="mt-4">
      <!-- Outreach Content -->
      <div v-if="activeTab === 'outreach'">
        <h2 class="text-3xl font-semibold mb-4">Community Outreach</h2>
        <p class="mb-4">
          Our community outreach program focuses on connecting with local residents to understand their needs and provide necessary resources.
        </p>
        <h3 class="text-xl font-semibold mb-2">Case Study</h3>
        <p>
          We helped over 500 families during our last outreach event, providing food, clothing, and educational materials.
        </p>
      </div>

      <!-- Education Content -->
      <div v-if="activeTab === 'education'">
        <h2 class="text-3xl font-semibold mb-4">Educational Programs</h2>
        <p class="mb-4">
          We offer a variety of educational programs aimed at both children and adults, including language classes, tutoring, and vocational training.
        </p>
        <h3 class="text-xl font-semibold mb-2">Case Study</h3>
        <p>
          Our recent vocational training course helped 100+ participants gain new skills and secure employment.
        </p>
      </div>

      <!-- Health & Wellbeing Content -->
      <div v-if="activeTab === 'health'">
        <h2 class="text-3xl font-semibold mb-4">Health & Wellness</h2>
        <p class="mb-4">
          Our health and wellness programs promote physical and mental well-being through workshops, fitness classes, and health screenings.
        </p>
        <h3 class="text-xl font-semibold mb-2">Case Study</h3>
        <p>
          We recently organized a health fair that provided free screenings and consultations to over 300 community members.
        </p>
      </div>

      <!-- Advisory Content -->
      <div v-if="activeTab === 'advisory'">
        <h2 class="text-3xl font-semibold mb-4">Advisory Services</h2>
        <p class="mb-4">
          Our advisory services offer expert guidance on various topics including financial planning, career development, and personal growth.
        </p>
        <h3 class="text-xl font-semibold mb-2">Case Study</h3>
        <p>
          We provided personalized financial advice to several families, helping them save for future goals and manage their finances more effectively.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Services',
  data() {
    return {
      activeTab: 'outreach' // Default active tab
    }
  }
}
</script>

<style scoped>
/* Add additional styles if needed */
</style>
