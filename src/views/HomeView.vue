<template>
  <UserLayout>
    <v-card>
      <v-card-title>Home</v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" md="4" v-for="movie in movies" :key="movie.id">
              <v-card>
                <v-img
                  :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
                  height="800px"
                  class="mt-5"
                ></v-img>
                <v-card-title>{{ movie.original_title }}</v-card-title>
                <div class="text-center">
                  <v-btn color="primary" @click="dialog = true"> Open Dialog </v-btn>

                  <v-dialog v-model="dialog" width="auto">
                    <v-card>
                      <v-card-text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.
                      </v-card-text>
                      <v-card-actions>
                        <v-btn color="primary" block @click="dialog = false">Close Dialog</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </UserLayout>
</template>

<script setup lang="ts">
import UserLayout from '@/layouts/UserLayout.vue'
import { useFetchMovies } from '@/composables/useFetchMovies'
import { onMounted, ref } from 'vue'

interface Movie {
  id: number
  original_title: string
  poster_path: string
}
var movies = ref<Movie[]>([])
var dialog = ref(false)
onMounted(async () => {
  // Guardamos los resultados de la API
  const results = await useFetchMovies()
  // Para esta practica solo necesitaremos 10 resultados
  for (let i = 0; i < 10; i++) {
    movies.value.push(results[i])
  }
  console.log(movies.value)
})
</script>
