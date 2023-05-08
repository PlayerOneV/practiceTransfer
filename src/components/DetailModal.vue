<template>
  <div class="text-center mb-4">
    <v-btn color="info" class="mr-4" @click="movieDetails(movieId)"> Detalles </v-btn>
    <v-btn color="warning" prepend-icon="mdi-pencil-outline" @click="editMovie(movieId)" > Edit</v-btn>
    <!-- Modal para visualizar informacion genereal de la pelicula -->
    <v-dialog v-model="infoModal" width="auto">
      <v-card
        :title="movie?.title"
        :subtitle="'Fecha de estreno: ' + movie?.release_date"
        width="600"
      >
        <v-card-text>
          {{ movie?.overview }}
        </v-card-text>
        <v-card-actions>
          <v-btn color="info" block @click="infoModal = false">Cerrar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- Modal para editar informacion de la pelicula -->
    <v-dialog v-model="editModal" width="auto">
      <v-card
        :title="movie?.title"
        :subtitle="'Fecha de estreno: ' + movie?.release_date"
        width="600"
      >
        <v-card-text>
          <v-form>
            <v-text-field label="Titulo" :model-value="movie?.title" focus />
            <v-text-field label="Fecha de estreno" :model-value="movie?.release_date" />
            <v-text-field label="Descripcion" :model-value="movie?.overview" />
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="editModal = false">Cancelar</v-btn>
          <v-btn color="green" @click="editModal = false">Guardar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useMovieDetails } from '@/composables/useMovieDetails'
import { Movie } from '@/types/movies'

var infoModal = ref(false)
var editModal = ref(false)
var movie = ref<Movie>()

defineProps({
  movieId: {
    type: Number,
    required: true
  }
})

const movieDetails = async (movieId: number) => {
  infoModal.value = true
  editModal.value = false
  movie.value = await useMovieDetails(movieId)
}

const editMovie = async (movieId: number) => {
  editModal.value = true
  infoModal.value = false
  movie.value = await useMovieDetails(movieId)
}
</script>
