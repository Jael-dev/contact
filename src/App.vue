<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SideBar from './components/SideBar/SideBar.vue';
import ContactListView from './components/ContactList/ContactListView.vue';

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

  const handleGroupClicked = (group) => {
    selectedGroup.value = group;
  };

</script>

<template>
  <v-app>
    <SideBar @groupClicked="handleGroupClicked" :groupNames="groupNames"/>
    <v-main>
      <ContactListView :selectedGroup="selectedGroup" :groupUsers="groupUsers"/>
    </v-main>
  </v-app>
</template>


