<script setup>
import { ref } from 'vue';
import AddContact from './AddContact.vue';

const isClicked = ref(false);

const handleClick = () => {
    isClicked.value = !isClicked.value;
};
</script>

<template>
    <v-card>
        <v-navigation-drawer class="bg-primary" permanent>
            <v-list color="transparent">
                <div class="add-contact">
                    <AddContact />
                </div>
                <v-list-item class="ml-4">
                    <v-list>

                        <v-btn variant="plain">
                            All contacts
                        </v-btn>
                        <v-container>
                            <!-- Replace the placeholder image URL with your actual image URL -->
                            <v-avatar :class="{ 'border-clicked': isClicked }" @click="handleClick">
                                <img src="https://picsum.photos/350/165?random" alt="Profile Picture">
                            </v-avatar>
                        </v-container>
                    </v-list>

                </v-list-item>

            </v-list>

            <template v-slot:append>
                <div class="pa-2">
                    <v-btn block>
                        Logout
                    </v-btn>
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
    /* adjust as needed */
}
</style>