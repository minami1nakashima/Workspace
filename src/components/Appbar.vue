<template>

    <v-app-bar height="90" flat>
        <v-container class="py-0 mx-auto d-flex align-center justify-center">
            <v-btn icon>
                <v-icon size="x-large">mdi-menu</v-icon>
                <v-menu activator="parent" icon="bar-nav-icon">
                    <v-list @click:select="clickItem">
                        <v-list-item value="1">
                            <v-list-item-title @click="onSeoul">Seoul</v-list-item-title>
                        </v-list-item>
                        <v-list-item value="2">
                            <v-list-item-title @click="onBusan">Busan</v-list-item-title>
                        </v-list-item>
                        <v-list-item value="3">
                            <v-list-item-title @click="onGangneung">Gangneung</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-btn>
            <v-toolbar-title class="text-h4 ml-2">Go To KOREA</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-text-field label="Search" prepend-inner-icon="mdi-magnify" variant="outlined" hide-details single-line
                max-width="200" density="default" class="mr-4">
            </v-text-field>
            <v-btn icon>
                <v-icon size="x-large">mdi-heart</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon size="x-large">mdi-dots-vertical</v-icon>
            </v-btn>
        </v-container>
    </v-app-bar>
</template>
<script>
export default {
    name: "bar",
    methods: {
        onSeoul() {
            this.$router.push('/seoul')
        },
        onBusan() {
            this.$router.push('/busan')
        },
        onGangneung() {
            this.$router.push('/gangneung')
        }
    }
}
</script>
