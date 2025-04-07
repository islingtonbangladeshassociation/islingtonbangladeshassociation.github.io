<template>
  <nav class="bg-gray-100 p-4 shadow-md">
    <div class="container mx-auto flex justify-between items-center">
      <router-link to="/">
        <img :src="require('@/assets/iba_logo.png')" alt="Logo" class="h-10" />
      </router-link>
      <ul class="flex space-x-6">
        <li class="relative group">
          <span class="text-black hover:text-blue-500 cursor-pointer">About Us</span>
          <ul class="absolute left-0 mt-2 w-40 bg-white border border-gray-200 shadow-md rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
            <li><router-link to="/about/aboutus" class="block px-4 py-2 text-black hover:bg-gray-100">Our Story</router-link></li>
            <!-- <li><router-link to="/about/reports" class="block px-4 py-2 text-black hover:bg-gray-100">Annual Reports</router-link></li> -->
          </ul>
        </li>
        <li><router-link to="/services" class="text-black hover:text-blue-500">Services</router-link></li>
        <li><router-link to="/projects" class="text-black hover:text-blue-500">Projects</router-link></li>
        <li><router-link to="/events" class="text-black hover:text-blue-500">Events</router-link></li>
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
.group:hover ul {
  display: block;
}
</style>
