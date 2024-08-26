<template>
  <nav class="bg-gray-100 p-4 shadow-md">
    <div class="container mx-auto flex justify-between items-center">
      <router-link to="/ibal/">
        <img :src="require('@/assets/iba_logo.png')" alt="Logo" class="h-10" />
      </router-link>
      <ul class="flex space-x-6">
        <li><router-link to="/ibal/about" class="text-black hover:text-blue-500">About Us</router-link></li>
        <li><router-link to="/ibal/services" class="text-black hover:text-blue-500">Services</router-link></li>
        <li><router-link to="/ibal/projects" class="text-black hover:text-blue-500">Projects</router-link></li>
        <li><router-link to="/ibal/events" class="text-black hover:text-blue-500">Events</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
/* Additional styles if needed */
</style>
