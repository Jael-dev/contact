<!-- MyButton.vue -->

<template>
  <v-btn :id="id" variant="plain" style="text-transform: none;" class="font-weight-thin" :ripple="false"  @click="handleClick">
    {{ buttonText }}
  </v-btn>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

const props = defineProps(['id', 'buttonText']);
const emits = defineEmits();
const handleClick = () => {
    // Emit a custom event with the group name when the button is clicked
    // emits('groupButtonClick', props.id);
  };
</script>

<style scoped>
</style>