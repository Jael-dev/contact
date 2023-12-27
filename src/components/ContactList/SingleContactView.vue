<!-- ListItem.vue -->

<template>
    <v-card
    @click="handleClick" :class="{ 'list-item-clicked': isClicked }"
    class="my-2"
    :variant="flat"
    >
    <v-list-item >
        <template v-slot:prepend>
        <v-divider  vertical :class="{ 'divider-clicked': isClicked }" :thickness="6" />
          <v-avatar :class="{ 'avatar-clicked': isClicked }">
            <img :src="item.prependAvatar" alt="Avatar">
          </v-avatar>
        </template>

        <v-list-item-title :class="{ 'title-clicked': isClicked }">{{ item.title }}</v-list-item-title>
        <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
  
    </v-list-item></v-card>
   
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const props = defineProps(['item']);
  const isClicked = ref(false);
  
  const handleClick = () => {
    isClicked.value = !isClicked.value;
  };
  </script>
  
  <style scoped>
  /* Add any custom styles for your list item */
  .list-item-clicked {
    background-color: transparent; /* Change to your desired background color when clicked */
  }
  
  .avatar-clicked {
    border: 2px solid purple; /* Change to your desired border color when clicked */
  }
  
  .title-clicked {
    color: purple; /* Change to your desired title color when clicked */
  }
  
  .divider-clicked {
    color: purple; /* Change to your desired color for the vertical line when clicked */
  }
  </style>
  