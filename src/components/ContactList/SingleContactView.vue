<script setup>
import { ref, watch, defineEmits } from 'vue';

const props = defineProps(['item', 'drawer']);
const isClicked = ref(false);
const emit = defineEmits(['update:drawer']);

watch(props.drawer, (newVal) => {
  if (newVal === true) {
    isClicked.value = true;
  } else if (newVal === false) {
    isClicked.value = false;
  }
});

const handleClick = () => {
  isClicked.value = !isClicked.value;
  emit('update:drawer', !props.drawer.value);
};
</script>

<template>
    <v-card
    @click.stop="handleClick" :class="{ 'list-item-clicked': isClicked, 'custom-card': isClicked}"
    class="my-2 no-elevation no-background "
    :variant="flat"
    >
    <v-list-item >
        <template v-slot:prepend>
          <v-avatar :class="{ 'avatar-clicked': isClicked }">
            <img :src="item.prependAvatar" alt="Avatar">
          </v-avatar>
        </template>

        <v-list-item-title :class="{ 'title-clicked': isClicked }">
            <v-row no-gutters>
                <v-col >
                    {{ item.title }}
                </v-col>  
                <v-col class="font-weight-thin">
                    {{ item.title }}
                </v-col>      
            </v-row>
            </v-list-item-title>
        <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
  
    </v-list-item></v-card>
   
  </template>
  
  <style scoped>
  .list-item-clicked {
    background-color: transparent; 
  }
  
  .avatar-clicked {
    border: 2px solid purple; 
  }
  
  .title-clicked {
    color: purple;
  }

  .no-elevation {
  box-shadow: none !important;
}

.no-background {
  background-color: transparent !important; 
  width: 100%;
}

.custom-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 6px;
  height: 100%;
  background-color: purple; 
}

  </style>
  