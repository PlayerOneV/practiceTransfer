<template>
  <v-card>
    <v-img
      :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
      height="800px"
      class="mt-5"
    ></v-img>
    <v-card-title class="text-center font-mono">{{ movie.title }}</v-card-title>
    <DetailModal :movie-id="movie.id" />
  </v-card>
</template>
<script setup lang="ts">
import DetailModal from '@/components/DetailModal.vue'

defineProps({
  movie: {
    type: Object,
    required: true
  }
})
</script>