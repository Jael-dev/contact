
<script setup>
import { ref } from 'vue';

const drawer = ref(null);
</script>
<template>
    <v-card>
      <v-layout>
        <v-navigation-drawer
          v-model="drawer"
          temporary
        >
          
        </v-navigation-drawer>
        <v-main style="width: 350px">
          <div class="d-flex justify-center align-center h-100">
            <v-btn
              color="primary"
              @click.stop="drawer = !drawer"
            >
              Toggle
            </v-btn>
          </div>
        </v-main>
      </v-layout>
    </v-card>
  </template>