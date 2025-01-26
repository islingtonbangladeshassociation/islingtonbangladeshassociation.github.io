<template>
  <div class="p-6">
    <h1 class="text-4xl font-bold text-center mb-8">Our Services</h1>
    
    <!-- Centered Tabs -->
    <div class="flex justify-center mb-6">
      <ul class="flex border-b">
        <li class="mr-1">
          <a @click="activeTab = 'advisory'" 
             :class="{
               'bg-white border-l border-t border-r rounded-t text-blue-700': activeTab === 'advisory',
               'text-blue-500 hover:text-blue-800': activeTab !== 'advisory'
             }"
             class="inline-block py-2 px-4 font-semibold cursor-pointer">Advice and Info</a>
        </li>
        <li class="mr-1">
          <a @click="activeTab = 'education'" 
             :class="{
               'bg-white border-l border-t border-r rounded-t text-blue-700': activeTab === 'education',
               'text-blue-500 hover:text-blue-800': activeTab !== 'education'
             }"
             class="inline-block py-2 px-4 font-semibold cursor-pointer">Youth Service</a>
        </li>
        <li class="mr-1">
          <a @click="activeTab = 'health'" 
             :class="{
               'bg-white border-l border-t border-r rounded-t text-blue-700': activeTab === 'health',
               'text-blue-500 hover:text-blue-800': activeTab !== 'health'
             }"
             class="inline-block py-2 px-4 font-semibold cursor-pointer">Health & Wellbeing</a>
        </li>

        <li class="-mb-px mr-1">
          <a @click="activeTab = 'outreach'" 
             :class="{
               'bg-white border-l border-t border-r rounded-t text-blue-700': activeTab === 'outreach',
               'text-blue-500 hover:text-blue-800': activeTab !== 'outreach'
             }"
             class="inline-block py-2 px-4 font-semibold cursor-pointer">Community</a>
        </li>
      </ul>
    </div>

    <!-- Tab Content (without boxed shadow) -->
    <div class="mt-4">
      <!-- Outreach Content -->
      <div v-if="activeTab === 'outreach'">
        <h2 class="text-3xl font-semibold mb-4">Community Outreach</h2>
        <p class="mb-4">
          Our outreach services aim to provide support, connection, and opportunities for personal and social growth.
        </p>
        <h3 class="text-xl font-semibold mb-2">Lunch Club</h3>
        <p>
          More than just a freshly prepared hot meal, the Lunch Club offers a warm and welcoming space for BAME women at the Hugh Cubitt Centre. It's a place to relax, connect with others, and feel cared for. After meals, participants can engage in activities like games, quizzes, and entertainment. This initiative not only promotes good nutrition but also helps combat loneliness and isolation, fostering a sense of community and belonging.
        </p>

        <div class="flex justify-center">
          <img
            :src="require('@/assets/posters/tea_morning.jpg')"
            alt="Sample Image"
            class="max-w-xs max-h-120 object-cover shadow-lg"
          />
        </div>

      </div>


      <!-- Education Content -->
      <div v-if="activeTab === 'education'">
        <h2 class="text-3xl font-semibold mb-4">Educational Programs</h2>
        <p class="mb-4">
          Our programs aim to empower young people through education and practical learning opportunities. Each club focuses on building critical skills, fostering positive habits, and encouraging personal growth.
        </p>

        <h3 class="text-xl font-semibold mb-2">The Literacy Club</h3>
        <p>
          Every Monday, 5:00 pm - 7:00 pm. This club aims to help young people develop their literacy skills, both in reading and writing, to foster a love for reading books.
        </p>
        <br>
        <h3 class="text-xl font-semibold mb-2">The Health Club</h3>
        <p>
          Every Tuesday, 5:00 pm - 7:00 pm. The Health Club offers practical activities and learning opportunities to help young people gain the knowledge and skills needed to live a healthy, sickness-free life.    
        </p>
        <br>
        <h3 class="text-xl font-semibold mb-2">The Life Skills Club</h3>
        <p>
          Every Wednesday, 5:00 pm - 7:00 pm. This club helps young people build essential life skills while boosting their confidence. Activities are designed to promote good citizenship and discourage negative behaviours such as anti-social actions, drug use, and youth disorder.        
        </p>

      </div>

      <!-- Health & Wellbeing Content -->
      <div v-if="activeTab === 'health'">
        <h2 class="text-3xl font-semibold mb-4">Physical Activities</h2>
        <p class="mb-4">
          We offer regular exercise classes designed to boost both the physical and mental well-being of local residents. Our schedule includes two days of energising Zumba sessions and one day of Pilates tailored for women of all ages, as well as an indoor sports session for men over 50. These activities take place at the Barnsbury Community Centre and Hugh Cubitt Centre. Led by qualified trainers, all sessions are delivered in a culturally sensitive way, ensuring everyone feels comfortable and supported in their fitness journey.
        </p>

        <div class="flex justify-center">
          <img
            :src="require('@/assets/posters/fitness.jpg')"
            alt="Sample Image"
            class="max-w-xs max-h-120 object-cover shadow-lg"
          />
        </div>
        <br>
        <h2 class="text-3xl font-semibold mb-4">Physical and Mental Wellbeing Services</h2>
        <p class="mb-4">
          We offer a series of health workshops, led by experts from local health service providers, that focus on both physical and mental wellbeing for our community members. These workshops are designed to empower individuals with the knowledge and tools to make positive lifestyle changes that enhance their overall quality of life. Our goal is to help prevent the onset of poor health conditions and address health inequalities that disproportionately affect certain groups, promoting a fairer and healthier community for all. Through these initiatives, we aim to reduce barriers to good health and support the well-being of every resident.        </p>
        <!-- <h3 class="text-xl font-semibold mb-2">Case Study</h3>
        <p>
          We recently organized a health fair that provided free screenings and consultations to over 300 community members.
        </p> -->
      </div>

      <!-- Advisory Content -->
      <div v-if="activeTab === 'advisory'">
        <h2 class="text-3xl font-semibold mb-4">Information, Advice and Guidance Service</h2>
        <p class="mb-4">
          We offer a comprehensive Information, Advice, and Guidance service five days a week at our premises. Our service is fully accredited by the Advice Quality Standard, and is run by a team of experienced, qualified advisers. We provide free, independent, impartial, and confidential support, ensuring you receive the guidance you need on a range of issues—from accessing welfare benefits you're entitled to, to navigating the challenges of cost-of-living, housing, and income maximisation. We also connect you to local food banks and other crisis support services, ensuring you're never left without help when you need it most.
        </p>

        <div class="flex justify-center">
          <img
            :src="require('@/assets/posters/advice.jpg')"
            alt="Sample Image"
            class="max-w-xs max-h-120 object-cover shadow-lg"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Services',
  data() {
    return {
      activeTab: 'advisory' // Default active tab
    }
  }
}
</script>

<style scoped>
/* Add additional styles if needed */
</style>
