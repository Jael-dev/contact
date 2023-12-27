<script setup>
import SideBar from './components/SideBar/SideBar.vue';
import ContactListView from './components/ContactList/ContactListView.vue';

</script>

<template>
  <v-app>
    <SideBar />
    <v-main>
      <ContactListView />
    </v-main>
  </v-app>
</template>


