<script setup>
import { ref, onMounted } from 'vue';
import { useField, useForm } from 'vee-validate';
import axios from 'axios';
const { handleSubmit, handleReset } = useForm({
});

const groupData = ref([]);
const groupNames = ref([]);

const fetchData = async () => {
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

const profile = useField('profile');
const firstName = useField('firstName');
const lastName = useField('lastName');
const phoneNumber = useField('phoneNumber');
const email = useField('email');
const group = useField('group');
const isFavourite = useField('isFavourite');

const isClicked = ref(false);

const handleClick = () => {
    isClicked.value = !isClicked.value;
};
const additionalFields = ref([]);

const addAdditionalField = () => {
    additionalFields.value.push({ key: '', value: '' });
};


const submit = handleSubmit(async values => {
    const contactObject = {
        "photo": values.profile,
        "firstName": values.firstName,
        "lastName": values.lastName,
        "phoneNumber": values.phoneNumber,
        "email": values.email,
        "group": values.group,
        "isFavorite": false,
        "groupId": null,
        "additionalFields": [],
    };

    const additionalObjects = additionalFields.value.map((field, index) => ({
        key: field.key,
        value: field.value,
    }));

    // upload avatar image using http://localhost:3000
    // const formData = new FormData();
    // formData.append('file', values.profile);
    // formData.append('upload_preset', 'contact-app');

    // const response = await axios.post('https://localhost:3000/upload', formData);

    // photo = response.data.secure_url;


    try {
        const response = await axios.post('http://127.0.0.1:8000/contact/', {
            "photo": null,
            "firstName": values.firstName,
            "lastName": values.lastName,
            "phoneNumber": values.phoneNumber,
            "email": values.email,
            "birthdate": "2021-10-12",
            "group": 1,
            "isFavorite": false,
            "groupId": null,
            "additionalFields": [],
        });

        // Handle the response
        console.log('Response:', response.data);

        // You can also perform further actions based on the response
    } catch (error) {
        // Handle errors
        console.error('Error:', error.message);
    }

    console.log('Contact Object:', contactObject);
    console.log('Additional Objects:', additionalObjects);
});


</script>

<template>
    <v-avatar :class="{ 'border-clicked': isClicked }" @click="handleClick">
        <v-icon icon="mdi-account-plus-outline" color="white"></v-icon>
    </v-avatar>

    <v-overlay v-model="isClicked" class="overlay">
        <form @submit.prevent="submit" class="form">

            <h2 class="form-title">Edit Profile</h2>

            <div class="form-column">
                <v-file-input v-model="profile.value.value" accept="image/*" show-size @change="handleAvatarUpload"
                    label="Profile Picture" prepend-icon="mdi-camera" outlined dense></v-file-input>

                <v-text-field v-model="firstName.value.value" :counter="10" :error-messages="firstName.errorMessage.value"
                    label="First Name"></v-text-field>

                <v-text-field v-model="lastName.value.value" :counter="10" :error-messages="lastName.errorMessage.value"
                    label="Last Name"></v-text-field>

                <v-text-field v-model="phoneNumber.value.value" :counter="7"
                    :error-messages="phoneNumber.errorMessage.value" label="Phone Number"></v-text-field>

                <v-text-field v-model="email.value.value" :error-messages="email.errorMessage.value"
                    label="E-mail"></v-text-field>

                <v-select v-model="group.value.value" :items="groupNames" :error-messages="group.errorMessage.value"
                    label="Group"></v-select>

                <v-checkbox v-model="isFavourite.value.value" :error-messages="isFavourite.errorMessage.value" value="1"
                    label="Is Favourite" type="checkbox"></v-checkbox>
            </div>

            <!-- Additional Fields -->
            <div v-for="(field, index) in additionalFields" :key="index" class="additional-field">
                <v-text-field v-model="field.key" :label="'Key ' + (index + 1)"></v-text-field>
                <v-text-field v-model="field.value" :label="'Value ' + (index + 1)"></v-text-field>
            </div>

            <v-btn class="me-4" type="submit">
                Submit
            </v-btn>

            <v-btn @click="handleReset">
                Clear
            </v-btn>

            <v-btn @click="addAdditionalField">
                Add Additional Field
            </v-btn>

        </form>
    </v-overlay>
</template>

<style scoped>
.overlay {
    background-color: rgba(255, 255, 255, 0.9);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.form {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 600px;
    max-height: 80vh;
    /* Set a maximum height and enable scrolling */
    overflow-y: auto;
    /* Enable vertical scrolling */
}

.form-column {
    width: 100%;
}

.additional-field {
    display: flex;
    gap: 8px;
}
</style>
