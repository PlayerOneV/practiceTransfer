<template>
  <main>
    <v-toolbar title="Practice Par Software"
      ><v-btn @click="userStore.logout" icon>
        <v-icon>mdi-export</v-icon>
      </v-btn></v-toolbar
    >
    <slot />
  </main>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/UserStore';

const userStore = useUserStore();

</script>