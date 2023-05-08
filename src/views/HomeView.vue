<template>
  <UserLayout>
    <v-alert
      type="success"
      v-if="alert"
      closable
      title="Inicio de sesion exitoso"
      text="Bienvenido a al catalogo de peliculas"
    ></v-alert>
    <v-card>
      <v-card-title>Catalogo de peliculas</v-card-title>
      <v-combobox
        label="Filtrar"
        :items="items"
        v-model="filter"
        variant="outlined"
        class="w-1/4 ml-16 mt-1"
      ></v-combobox>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" md="4" v-for="movie in movies" :key="movie.id">
              <MovieCard :movie="movie" />
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
import { onMounted, ref, watch } from 'vue'
import { Movie } from '@/types/movies'
import MovieCard from '@/components/MovieCard.vue'

const movies = ref<Movie[]>([])
const moviesDefault = ref<Movie[]>([])
const items = ['Reset', 'Nombre', 'Fecha', 'Favoritos(Proximamente)']
const filter = ref('')
const alert = ref(true)


function toggleAlertInFiveSeconds() {
  setTimeout(() => {
    alert.value = false
    console.log(alert.value);
    
  }, 3000)
}

// Mantenemos vigilado el filtro para ordenar las peliculas
watch(filter, (value) => {
  if (value === 'Nombre') {
    movies.value.sort((a, b) => a.title.localeCompare(b.title))
  } else if (value === 'Fecha') {
    movies.value.sort((a, b) => a.release_date.localeCompare(b.release_date))
  } else if (value === 'Reset') {
    movies.value = [...moviesDefault.value]
  }
})

onMounted(async () => {
  // Guardamos los resultados de la API
  const results = await useFetchMovies()
  // Para esta practica solo necesitaremos 10 resultados
  for (let i = 0; i < 10; i++) {
    movies.value.push(results[i])
  }
  moviesDefault.value = [...movies.value]
  toggleAlertInFiveSeconds()
})
</script>
