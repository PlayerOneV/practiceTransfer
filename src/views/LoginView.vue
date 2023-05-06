<template>
  <div>
    <v-text-field
      label="Main input"
      hide-details="auto"
    ></v-text-field>
    <v-text-field label="Another input"></v-text-field>
    
  </div>
</template>
<script setup lang="ts">
import { useUserStore } from '@/stores/UserStore';

useUserStore();
</script>
<style scoped>
  
</style>
