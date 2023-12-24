<script setup>
import { ref } from 'vue';

const isClicked = ref(false);

const handleClick = () => {
    isClicked.value = !isClicked.value;
};
</script>

<template>
        <v-avatar :class="{ 'border-clicked': isClicked }" @click="handleClick">
            <v-icon icon="mdi-account-plus-outline" color="white"></v-icon>
        </v-avatar>
</template>
