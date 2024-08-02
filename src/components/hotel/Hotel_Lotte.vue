<template>
    <v-sheet>
        <p>{{ hotelName }}</p>
        <p>{{ hotelNameE }}</p>
        <p>{{ area }}</p>
    </v-sheet>
</template>

<script>
export default {
    props: {
        hotelName: String,
        hotelNameE: String,
        area: String,
    },
}
</script>