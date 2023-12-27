
<script setup>
import { ref } from 'vue';
import SingleContactViewVue from './SingleContactView.vue';
const drawer = ref(null);
const items = [
  {
    prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
    title: 'Brunch this weekend?',
    subtitle: `<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
  },
  {
    prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
    title: 'Summer BBQ',
    subtitle: `<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
  },
  {
    prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
    title: 'Oui oui',
    subtitle: '<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
  },
  {
    prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
    title: 'Birthday gift',
    subtitle: '<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
  },
  {
    prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
    title: 'Recipe to try',
    subtitle: '<span class="text-primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
  },
];
</script>

<template>
  <v-layout>
    <v-navigation-drawer v-model="drawer" temporary location="right" class="bg-fifth">

    </v-navigation-drawer>
    <v-main>

      <v-layout>
        <v-container>
          
          <v-row v-for="(item, index) in items" :key="index">
            <SingleContactViewVue :item="item"></SingleContactViewVue>
          </v-row>
        </v-container>
      </v-layout>
      <div class="justify-center align-center ">
        <v-btn color="primary" @click.stop="drawer = !drawer">
          Toggle
        </v-btn>
      </div>
    </v-main>
  </v-layout>
</template>