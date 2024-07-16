<template>
    <v-tabs v-model="tab" density="compact" bg-color="light-blue-lighten-5" color="#40C4FF" grow>
        <v-tab v-for="item in indexes" :key="item" :text="item" :value="item" class="font-weight-black"></v-tab>
    </v-tabs>
    <v-tabs-window v-model="tab">
        <v-tabs-window-item value="ホーム">
            <home />
        </v-tabs-window-item>

        <v-tabs-window-item value="スポット">
            <spots />
        </v-tabs-window-item>

        <v-tabs-window-item value="グルメ">
            <gourmet />
        </v-tabs-window-item>

        <v-tabs-window-item value="交通">
            <traffic />
        </v-tabs-window-item>

        <v-tabs-window-item value="ホテル">
            <hotel />
        </v-tabs-window-item>

        <v-tabs-window-item value="飛行機">
            <airplane />
        </v-tabs-window-item>

        <v-tabs-window-item value="換金所">
            <money />
        </v-tabs-window-item>

        <v-tabs-window-item value="マナー">
            <manners />
        </v-tabs-window-item>

        <v-tabs-window-item value="ワード">
            <lang />
        </v-tabs-window-item>

        <v-tabs-window-item value="季節">
            <season />
        </v-tabs-window-item>
    </v-tabs-window>
</template>

<script>
import home from "@/components/Home.vue"
import spots from "@/components/Spots.vue"
import gourmet from "@/components/Gourmet.vue"
import traffic from "@/components/Traffic.vue"
import hotel from "@/components/Hotel.vue"
import airplane from "@/components/Airplane.vue"
import money from "@/components/Money.vue"
import manners from "@/components/Manners.vue"
import lang from "@/components/Langage.vue"
import season from "@/components/Season.vue"

export default {
    components: {
        home,
        spots,
        gourmet,
        traffic,
        hotel,
        airplane,
        money,
        manners,
        lang,
        season,
    },
    data() {

        return {
            tab: 'ホーム',
            indexes: [
                'ホーム', 'スポット', 'グルメ', '交通', 'ホテル', '飛行機', '換金所', 'マナー', 'ワード', '季節',
            ],
        }
    }
}
</script>

<style>
.font-weight-black:hover {
    color: #40C4FF;
    text-shadow: 2px 1px 0 white;
}
</style>