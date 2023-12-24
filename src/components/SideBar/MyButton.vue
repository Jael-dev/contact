<!-- MyButton.vue -->

<template>
  <v-btn :id="id" variant="plain" style="text-transform: none;" class="font-weight-thin" :ripple="false">
    {{ buttonText }}
  </v-btn>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps(['id', 'buttonText']);
</script>

<style scoped>
</style>