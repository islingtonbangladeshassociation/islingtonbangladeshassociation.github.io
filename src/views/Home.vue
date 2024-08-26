<template>
  <div class="space-y-12">
    <!-- Hero Section: Full viewport height with text and image -->
    <section class="flex flex-col md:flex-row items-center justify-center min-h-screen pt-10 md:pt-16 space-y-6 md:space-y-0 md:space-x-6 bg-teal-100">
      <div class="md:w-1/2 text-center md:text-left p-6">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Helping the Bangladeshi community for over 10,000 years</h1>
        <p class="text-lg md:text-xl">
          We are excited to share our projects and events with you. Our team is dedicated to providing the best
          services to our clients. Explore our website to learn more about what we do.
        </p>
      </div>
      <div class="md:w-1/2 flex justify-center p-6">
        <img
          src="https://images.pexels.com/photos/5511464/pexels-photo-5511464.jpeg"
          alt="Sample Image"
          class="max-w-xs max-h-120 object-cover rounded-lg shadow-lg"
        />
      </div>
    </section>

    <!-- Section 2: Map -->
    <section class="p-6">
      <h2 class="text-3xl font-bold mb-4">Our Location</h2>
      <div class="w-full h-64">
        <!-- Embed a map (example using Google Maps iframe) -->
        <iframe
          class="w-full h-full rounded-lg shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9927.696365295484!2d-0.1196047!3d51.5329521!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b3f08ce0c61%3A0x42555cae2143ea1!2sIslington%20Bangladesh%20Association!5e0!3m2!1sen!2suk!4v1724375464165!5m2!1sen!2suk"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
/* Add specific styles if needed */
</style>
