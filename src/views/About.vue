<template>
  <div class="p-6 space-y-12">
    <!-- Page Header -->
    <section class="text-center mb-12">
      <h1 class="text-5xl font-bold">About Us</h1>
      <p class="text-md mt-4">Learn more about our journey, mission, and the people behind our success.</p>
    </section>

    <!-- Timeline Section -->
    <section class="relative">
      <!-- Vertical line for the timeline -->
      <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>

      <!-- Timeline Item 1 -->
      <div class="mb-12 flex flex-col md:flex-row items-center">
        <div class="md:w-1/2 md:pr-8">
          <h2 class="text-xl font-semibold">Founded in 1984</h2>
          <p class="mt-2 text-sm">
                Islington Bangladesh Association (IBA) is an independent charity set up initially as a self-help group by newly settled people of Bangladeshi and other Minority Ethnic heritage.
          </p>
        </div>
        <div class="md:w-1/2 flex justify-center mt-6 md:mt-0">
          <img src="https://via.placeholder.com/150" alt="Committee Photo" class="rounded-lg shadow-lg w-48 h-48 object-cover" />
        </div>
      </div>

      <!-- Timeline Item 2 -->
      <div class="mb-12 flex flex-col md:flex-row items-center">
        <div class="md:w-1/2 md:order-2 md:pl-8">
          <h2 class="text-xl font-semibold">First Major Event in 2000</h2>
          <p class="mt-2 text-sm">
            Our first major event brought together hundreds of community members, celebrating our culture and achievements. 
            It was a significant milestone that marked our growth.
          </p>
        </div>
        <div class="md:w-1/2 flex justify-center mt-6 md:mt-0">
          <img src="https://via.placeholder.com/150" alt="Event Photo" class="rounded-lg shadow-lg w-48 h-48 object-cover" />
        </div>
      </div>

      <!-- Timeline Item 3 -->
      <div class="mb-12 flex flex-col md:flex-row items-center">
        <div class="md:w-1/2 md:pr-8">
          <h2 class="text-xl font-semibold">Expansion in 2010</h2>
          <p class="mt-2 text-sm">
            As our organization grew, we expanded our services to include educational programs, cultural events, and community support initiatives.
          </p>
        </div>
        <div class="md:w-1/2 flex justify-center mt-6 md:mt-0">
          <img src="https://via.placeholder.com/150" alt="Expansion Photo" class="rounded-lg shadow-lg w-48 h-48 object-cover" />
        </div>
      </div>

      <!-- Timeline Item 4 -->
      <div class="mb-12 flex flex-col md:flex-row items-center">
        <div class="md:w-1/2 md:order-2 md:pl-8">
          <h2 class="text-xl font-semibold">Looking Ahead</h2>
          <p class="mt-2 text-sm">
            We continue to strive for excellence in all our endeavors. Our future plans include expanding our reach, helping more people, and creating a lasting impact on the community.
          </p>
        </div>
        <div class="md:w-1/2 flex justify-center mt-6 md:mt-0">
          <img src="https://via.placeholder.com/150" alt="Future Vision" class="rounded-lg shadow-lg w-48 h-48 object-cover" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
/* Add specific styles if needed */
</style>
