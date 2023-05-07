<template>
  <div class="text-center mb-4">
    <v-btn color="info" @click="movieDetails(movieId)"> Detalles </v-btn>
    <v-dialog v-model="dialog" width="auto">
      <v-card :title="movie?.title" :subtitle="'Fecha de estreno: '+movie?.release_date" width="600">
        <v-card-text>
          {{ movie?.overview   }}
        </v-card-text>
        <v-card-actions>
          <v-btn color="info" block @click="dialog = false">Cerrar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {useMovieDetails} from '@/composables/useMovieDetails'
import { Movie } from '@/types/movies'

var dialog = ref(false)
var movie = ref<Movie>()

defineProps({
    movieId: {
        type: Number,
        required: true
    }
})

const movieDetails = async (movieId: number) => {
    dialog.value = true
    movie.value = await useMovieDetails(movieId)
    console.log(movie.value);
}
</script>