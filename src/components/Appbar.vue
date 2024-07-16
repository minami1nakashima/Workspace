<template>
    <v-app-bar density="default" flat>
        <v-btn icon>
            <v-icon>mdi-menu</v-icon>
            <v-menu activator="parent" icon="bar-nav-icon">
                <v-list @click:select="clickItem">
                    <v-list-item value="1">
                        <v-list-item-title>Seoul</v-list-item-title>
                    </v-list-item>
                    <v-list-item value="2">
                        <v-list-item-title>Busan</v-list-item-title>
                    </v-list-item>
                    <v-list-item value="3">
                        <v-list-item-title>Gangneung</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-btn>
        <v-toolbar-title>Go To KOREA</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-text-field label="Search" prepend-inner-icon="mdi-magnify" variant="outlined" hide-details single-line
            max-width="180" density="compact" class="mr-4">
        </v-text-field>
        <v-btn icon>
            <v-icon>mdi-heart</v-icon>
        </v-btn>
        <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
    </v-app-bar>
</template>
<script>
export default {
    name: "bar"
}
</script>
