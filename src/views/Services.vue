<template>
  <div class="p-6">
    <h1 class="text-4xl font-bold text-center mb-8">Our Services</h1>

    <!-- Centered Tabs -->
    <div class="flex justify-center mb-6">
      <ul class="flex border-b">
        <li class="mr-1">
          <a @click="activeTab = 'advisory'" :class="{
            'bg-white border-l border-t border-r rounded-t text-blue-700': activeTab === 'advisory',
            'text-blue-500 hover:text-blue-800': activeTab !== 'advisory'
          }" class="inline-block py-2 px-4 font-semibold cursor-pointer">Advice and Info</a>
        </li>
        <li class="mr-1">
          <a @click="activeTab = 'youth'" :class="{
            'bg-white border-l border-t border-r rounded-t text-blue-700': activeTab === 'youth',
            'text-blue-500 hover:text-blue-800': activeTab !== 'youth'
          }" class="inline-block py-2 px-4 font-semibold cursor-pointer">Youth Service</a>
        </li>
        <li class="mr-1">
          <a @click="activeTab = 'health'" :class="{
            'bg-white border-l border-t border-r rounded-t text-blue-700': activeTab === 'health',
            'text-blue-500 hover:text-blue-800': activeTab !== 'health'
          }" class="inline-block py-2 px-4 font-semibold cursor-pointer">Health & Wellbeing</a>
        </li>

        <li class="-mb-px mr-1">
          <a @click="activeTab = 'outreach'" :class="{
            'bg-white border-l border-t border-r rounded-t text-blue-700': activeTab === 'outreach',
            'text-blue-500 hover:text-blue-800': activeTab !== 'outreach'
          }" class="inline-block py-2 px-4 font-semibold cursor-pointer">Community</a>
        </li>
      </ul>
    </div>

    <!-- Tab Content (without boxed shadow) -->

    <div class="mt-4">

      <!-- Advisory Content -->
      <div v-if="activeTab === 'advisory'" class="md:flex md:gap-8 md:items-start">
        <!-- Image on the left -->
        <div class="md:w-1/2 flex justify-center">
          <img :src="require('@/assets/posters/services/advise/main.jpg')" alt="Advice Service"
            class="rounded-xl max-w-xs md:max-w-sm shadow-xl object-cover" />
        </div>

        <!-- Text content with padding -->
        <div class="md:w-1/2 space-y-4 mt-6 md:mt-0 px-10">
          <h2 class="text-3xl font-semibold">Information, Advice and Guidance Service</h2>
          <p>
            We offer a comprehensive Information, Advice, and Guidance service five days a week at our office, located
            at 71 Caledonian Road, London N1 9BT.
          </p>
          <p>
            Our service is fully accredited by the Advice Quality Standard, and is run by a team of experienced,
            qualified advisers. We provide free, independent, impartial, and confidential support, ensuring you receive
            the guidance you need on a range of issues—from accessing welfare benefits you're entitled to, to navigating
            the challenges of cost-of-living, housing, and income maximisation.
          </p>
          <p>
            We also connect you to local food banks and other crisis support services, ensuring you're never left
            without help when you need it most.
          </p>
          <!-- Button to open the modal -->
          <button @click="showAdvisoryModal = true"
            class="mt-4 bg-blue-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-600">
            See Us in Action!
          </button>
        </div>
      </div>

      <!-- Advisory Modal -->
      <div v-if="showAdvisoryModal" class="fixed inset-0 z-50 overflow-hidden">
        <!-- Backdrop with click handler -->
        <div class="absolute inset-0 bg-black bg-opacity-50" @click="showAdvisoryModal = false"></div>

        <!-- Modal Container -->
        <div class="absolute inset-0 overflow-hidden flex items-center justify-center p-4">
          <!-- Modal Dialog -->
          <div class="bg-white rounded-lg shadow-xl w-11/12 md:w-3/4 lg:w-1/2 max-h-[90vh] flex flex-col" @click.stop>

            <!-- Header -->
            <div class="p-4 sticky top-0 bg-white z-10">
              <button @click="showAdvisoryModal = false"
                class="absolute top-3 right-3 text-xl font-bold text-gray-600 hover:text-gray-900">
                &times;
              </button>
            </div>

            <!-- Scrollable Content with Smaller Images -->
            <div class="overflow-y-auto overflow-x-hidden" style="max-height: 70vh;">
              <div class="p-4 grid grid-cols-2 gap-4">
                <img :src="require('@/assets/posters/services/advise/gallery_1.jpg')"
                  class="rounded-lg shadow-md w-full max-w-xs mx-auto h-auto" />
                <img :src="require('@/assets/posters/services/advise/gallery_2.jpg')"
                  class="rounded-lg shadow-md w-full max-w-xs mx-auto h-auto" />
                <img :src="require('@/assets/posters/services/advise/gallery_3.jpg')"
                  class="rounded-lg shadow-md w-full max-w-xs mx-auto h-auto" />
                <!-- Additional images would go here -->
              </div>
            </div>
          </div>
        </div>
      </div>


      <!-- Outreach Content -->
      <div v-if="activeTab === 'outreach'" class="md:flex md:gap-8 md:items-start">
        <!-- Image on the left -->
        <div class="md:w-1/2 flex justify-center">
          <img :src="require('@/assets/posters/tea_morning.jpg')" alt="Lunch Club"
            class="rounded-xl max-w-xs md:max-w-sm shadow-xl object-cover" />
        </div>

        <!-- Content on the right -->
        <div class="md:w-1/2 space-y-4 mt-6 md:mt-0">
          <h2 class="text-3xl font-semibold">Community Outreach</h2>
          <p>
            Our outreach services aim to provide support, connection, and opportunities for personal and social growth.
          </p>
          <h3 class="text-xl font-semibold">Lunch Club</h3>
          <p>
            More than just a freshly prepared hot meal, the Lunch Club offers a warm and welcoming space for BAME women
            at the Hugh Cubitt Centre. It's a place to relax, connect with others, and feel cared for.
          </p>
          <p>
            After meals, participants can engage in activities like games, quizzes, and entertainment. This initiative
            not only promotes good nutrition but also helps combat loneliness and isolation, fostering a sense of
            community and belonging.
          </p>
        </div>
      </div>


      <!-- Youth Programme -->
      <div v-if="activeTab === 'youth'" class="md:flex md:gap-8 md:items-start">
        <!-- Image on the left -->
        <div class="md:w-1/2 flex justify-center">
          <img :src="require('@/assets/posters/young_persons_project.jpg')" alt="Youth Club"
            class="rounded-xl max-w-xs md:max-w-sm shadow-xl object-cover" />
        </div>

        <!-- Content on the right -->
        <div class="md:w-1/2 space-y-4 mt-6 md:mt-0">
          <h2 class="text-3xl font-semibold">Caledonian Young Person’s Literacy, Health and Life Skills Club</h2>
          <p>
            Our programs aim to empower young people through education and practical learning opportunities. Each club
            focuses on building critical skills, fostering positive habits, and encouraging personal growth.
          </p>

          <h3 class="text-xl font-semibold">The Literacy Club</h3>
          <p>
            Every Monday, 5:00 pm - 7:00 pm. This club aims to help young people develop their literacy skills, both in
            reading and writing, to foster a love for reading books.
          </p>

          <h3 class="text-xl font-semibold">The Health Club</h3>
          <p>
            Every Tuesday, 5:00 pm - 7:00 pm. The Health Club offers practical activities and learning opportunities to
            help young people gain the knowledge and skills needed to live a healthy, sickness-free life.
          </p>

          <h3 class="text-xl font-semibold">The Life Skills Club</h3>
          <p>
            Every Wednesday, 5:00 pm - 7:00 pm. This club helps young people build essential life skills while boosting
            their confidence. Activities are designed to promote good citizenship and discourage negative behaviours
            such as anti-social actions, drug use, and youth disorder.
          </p>
        </div>
      </div>


      <!-- Health & Wellbeing Content -->
      <div v-if="activeTab === 'health'" class="md:flex md:gap-8 md:items-start">

        <!-- Image on the left -->
        <div class="md:w-1/2 flex justify-center">
          <img :src="require('@/assets/posters/fitness_programme.jpg')" alt="Health Club"
            class="rounded-xl max-w-xs md:max-w-sm shadow-xl object-cover" />
        </div>

        <!-- Content on the right -->
        <div class="md:w-1/2 space-y-4 mt-6 md:mt-0">
          <h2 class="text-3xl font-semibold mb-4">Physical Activities</h2>
          <p class="mb-4">
            We offer regular exercise classes designed to boost both the physical and mental well-being of local
            residents. Our schedule includes two days of energising Zumba sessions and one day of Pilates tailored for
            women of all ages, as well as an indoor sports session for men over 50. These activities take place at the
            Barnsbury Community Centre and Hugh Cubitt Centre. Led by qualified trainers, all sessions are delivered in
            a culturally sensitive way, ensuring everyone feels comfortable and supported in their fitness journey.
          </p>
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
      activeTab: 'advisory', // Default active tab
      showAdvisoryModal: false, // To control modal visibility

    }
  }
}
</script>

<style scoped>
/* Add additional styles if needed */
</style>
