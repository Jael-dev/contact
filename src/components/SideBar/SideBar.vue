<script setup>
import jsPDF from 'jspdf';
import AddContact from './AddContact.vue';
import MyButton from './MyButton.vue';

const openGithubRepo = () => {
    const githubRepoUrl = "https://github.com/Jael-dev/contact";
    window.open(githubRepoUrl, "_blank");
};

const openLinkedinProfile = () => {
    const githubRepoUrl = "https://www.linkedin.com/in/ja%C3%ABl-ngouzong-bbb587204/";
    window.open(githubRepoUrl, "_blank");
};


const downloadPDF = () => {
    // Replace jsonData with your actual JSON data
    const jsonData = [
        { name: 'Item 1', value: '100' },
        { name: 'Item 2', value: '200' },
        // Add more items as needed
    ];

    // Create a new jsPDF instance
    const pdf = new jsPDF();

    // Set up PDF content
    pdf.text('My JSON Data as PDF', 20, 10);
    jsonData.forEach((item, index) => {
        pdf.text(`${index + 1}. ${item.name}: ${item.value}`, 20, 20 + index * 10);
    });

    // Save the PDF
    pdf.save('my-contact-list.pdf');
};
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

                        <div v-for="index in 6" :key="index">
                            <MyButton :id="'button-id-' + index" :buttonText="'Button ' + index"></MyButton>
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