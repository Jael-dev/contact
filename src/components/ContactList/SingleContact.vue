<v-container>
    <v-avatar :class="{ 'border-clicked': isClicked }" @click="handleClick">
        <img src="https://picsum.photos/350/165?random" alt="Profile Picture">
    </v-avatar>
</v-container>