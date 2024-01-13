<script setup>
import AddContact from './AddContact.vue';
import MyButton from './MyButton.vue';
import axios from 'axios';
import { ref, onMounted, onUnmounted , defineEmits  } from 'vue';

const overlay = ref(false);

const groupData = ref([]);
const groupNames = ref([]);
const selectedGroup = ref([]);

const emits = defineEmits();

const handleGroupClick = async(group) => {
    try {
    const response = await axios.get(`http://127.0.0.1:8000/contact/group/${group}`);
    selectedGroup.value = response.data;

  } catch (error) {
    console.error('Error fetching data:', error);
  }

    // console.log(selectedGroup.value);
    // Emit a custom event to notify the parent component
    emits('groupClicked', selectedGroup);
  };

const openGithubRepo = () => {
    const githubRepoUrl = "https://github.com/Jael-dev/contact";
    window.open(githubRepoUrl, "_blank");
};

const openLinkedinProfile = () => {
    const githubRepoUrl = "https://www.linkedin.com/in/ja%C3%ABl-ngouzong-bbb587204/";
    window.open(githubRepoUrl, "_blank");
};

// Get data from API
const downloadPDF = async() => {

    const apiData = ref([]);

    try {
    const response = await axios.get('http://127.0.0.1:8000/contact');
    apiData.value = response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }

   // Dowload the csv file
    convertJsonToCsv(apiData.value);

};


const convertJsonToCsv = (jsonArray) => {
  const csvContent = [];
  
  // Add header
  const header = Object.keys(jsonArray[0]);
  csvContent.push(header.join(','));

  // Add rows
  jsonArray.forEach(item => {
    const row = Object.values(item);
    csvContent.push(row.join(','));
  });

  // Convert to a Blob
  const csvBlob = new Blob([csvContent.join('\n')], { type: 'text/csv' });

  // Create a download link
  const downloadLink = document.createElement('a');
  downloadLink.href = URL.createObjectURL(csvBlob);
  downloadLink.download = 'data.csv';

  // Append the link to the body
  document.body.appendChild(downloadLink);

  // Trigger the click event
  downloadLink.click();

  // Remove the link from the body
  document.body.removeChild(downloadLink);
};

const fetchData = async() => {
    try {
    const response = await axios.get('http://127.0.0.1:8000/group');
    groupData.value = response.data;

    groupNames.value = groupData.value.map(group => group.name);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Fetch data when the component is mounted
onMounted(fetchData);

// // Poll every 5 seconds (5000 milliseconds)
// const pollInterval = setInterval(fetchData, 5000);

// // Clean up when the component is unmounted
// onUnmounted(() => {
//   clearInterval(pollInterval);
// });

</script>

<template>
    <v-card>
        <v-navigation-drawer class="bg-primary" permanent>
            <v-list color="transparent">
                <div class="add-contact my-8">
                    <AddContact />
                </div>
                <v-list-item class="ml-6">
                    <v-list>

                        <v-btn variant="plain" style="text-transform: none;" class="font-weight-thin" :ripple="false">
                            All Contacts
                        </v-btn>

                        <div v-for="(name, index) in groupNames" :key="index" :click="handleGroupClick(index)">
                            <MyButton :id= index :buttonText=name ></MyButton>
                        </div>

                    </v-list>

                </v-list-item>

            </v-list>

            <template v-slot:append>
                <div class="pa-2">
                    <v-row align="center" justify="center">
                        <v-col cols="auto">
                            <v-btn density="compact" icon="mdi-cloud-upload" color="primary" @click="downloadPDF"></v-btn>
                        </v-col>

                        <v-col cols="auto">
                            <v-btn density="compact" icon="mdi-github" color="primary" @click="openGithubRepo"></v-btn>
                        </v-col>

                        <v-col cols="auto">
                            <v-btn density="compact" icon="mdi-linkedin" color="primary"
                                @click="openLinkedinProfile"></v-btn>
                        </v-col>
                    </v-row>
                </div>
            </template>

        </v-navigation-drawer>
    </v-card>
</template>


<style>
/* Add a default border to the v-avatar */
.v-avatar {
    border: 1px solid #C9BFB5;
    /* Initial border color */
    cursor: pointer;
    transition: border-color 0.05s ease;
    /* Transition for smooth color change */
}

/* Add a white border to the profile picture */
.border-clicked {
    border-color: white;
}

/* Change the border color to y on click */
.border-clicked.clicked {
    border-color: white;
    /* Change to your desired color */
}

/* Add Contact style */

.add-contact {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
</style>