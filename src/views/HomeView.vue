<template>
  <UserLayout>
    <h1>Home</h1>
  </UserLayout>
</template>

<script setup lang="ts">
import UserLayout from '@/layouts/UserLayout.vue'
import { useFetchMovies } from '@/composables/useFetchMovies'
import { onMounted } from 'vue'

onMounted(() => {
  console.log( useFetchMovies());
  
})

</script>
