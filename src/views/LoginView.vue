<template>
  <div class="w-screen h-screen flex flex-col justify-center items-center bg-slate-50">
    <h1 class="text-3xl mb-4">Inicia Sesion</h1>
    <div class="w-1/3 bg-white rounded-md shadow-md p-8">
      <div class="flex">
        <v-avatar color="info" size="80" class="mt-2 mx-auto">
          <v-icon icon="mdi-account"></v-icon>
        </v-avatar>
      </div>
      <form @submit.prevent="userStore.login(username)">
        <v-text-field label="username" class="mt-4" v-model="username" />
        <v-text-field label="password" />
        <div class="flex flex-col">
          <router-link to="" class="text-right mb-3 text-blue-600 visited:text-purple-600"
            >¿Olvidaste tu constraseña?</router-link
          >
          <v-btn color="info" type="submit"> Login </v-btn>
        </div>
      </form>
      <p class="text-center mt-3">
        ¿No tiene una cuenta?
        <router-link to="" class="text-blue-600 visited:text-purple-600">Registrate</router-link>
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useUserStore } from '@/stores/UserStore'
import { ref } from 'vue'

const userStore = useUserStore()
const username = ref('')

</script>
<style scoped></style>
