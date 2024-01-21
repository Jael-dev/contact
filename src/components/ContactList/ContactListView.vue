
<script setup>
import { ref , watch, defineProps, onMounted} from 'vue';
import axios from 'axios';
import SingleContactViewVue from './SingleContactView.vue';
const drawer = ref(false);
// const { propsColor, n } =  defineProps(['isWithColor', 'n']); Here we define the props to emit
const  props  = defineProps(['selectedGroup', 'groupUsers']);
const filteredGroupUsers = ref([]);

const groupData = ref([]);
const groupNames = ref([]);
const selectedGroup = ref([]);
const groupUsers = ref([]);

  const fetchData = async() => {
    try {
    const response = await axios.get('http://127.0.0.1:8000/group');
    groupData.value = response.data;
    const contacts = await axios.get('http://127.0.0.1:8000/contact');
    selectedGroup.value = contacts.data;
    groupUsers.value = contacts.data;
    groupNames.value = groupData.value.map(group => group.name);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
onMounted(fetchData);

console.log(props.groupUsers);

  // Watch for changes in the selectedGroup and filter the contacts accordingly
  watch(() => props.selectedGroup.value, (newGroup) => {
    if (newGroup) {
      filteredGroupUsers.value = props.groupUsers.filter(user => user.group === newGroup);
    } else {
      // If no group is selected, show all contacts
      filteredGroupUsers.value = props.groupUsers.value;
    }
  });


</script>

<template>
  <v-layout>
    <v-navigation-drawer v-model="drawer" temporary location="right" class="bg-fifth">

    </v-navigation-drawer>
    <v-main>

        <v-container class="contact-list">
          
          <v-row v-for="(item, index) in groupData" :key="index">
          <SingleContactViewVue :item="item" @update:drawer="drawer" />
        </v-row>
        </v-container>
    </v-main>
  </v-layout>
</template>

<style scoped>
  .bg-fifth {
    background-color: #f5f5f5;
  }
  .contact-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    height: 100%;
}
</style>