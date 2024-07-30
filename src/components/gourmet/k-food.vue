<template>
    <v-card class="mx-auto pa-5 mb-3 border-lg border-primary" min-height="730" flat>
        <v-card-title class="text-black text-subtitle-1 font-weight-bold">おすすめご飯ランキング</v-card-title>
        <v-card-text class="text-black text-body-2">独断と偏見が詰まった韓国のうまい店TOP10👑</v-card-text>
        <v-sheet>
            <v-data-table :headers="header" :items="items" hide-default-footer id="bg1" class="pa-2">
                <template v-slot:item.Rank="{ index }">
                    <p v-if="index + 1 == '1'">🥇{{ index + 1 }}</p>
                    <p v-if="index + 1 == '2'">🥈{{ index + 1 }}</p>
                    <p v-if="index + 1 == '3'">🥉{{ index + 1 }}</p>
                    <p v-if="index >= 3">{{ index + 1 }}</p>
                </template>
                <template v-slot:item.Check="{ item }">
                    <v-checkbox-btn v-model="storename" :value="item" :ripple=false color="orange">
                    </v-checkbox-btn>
                </template>

            </v-data-table>
        </v-sheet>

        <v-row>
            <v-col cols="3" v-for="item in storename" :key="item">
                <v-card id="relative" class="mt-5" max-width="260" min-height="280">
                    <v-img height="150px" :src="item.src" cover> </v-img>

                    <v-card-title>
                        <p>{{ item.Place }}</p>
                    </v-card-title>
                    <p id="more" @click="text(item.Place)" class="text-blue-darken-1 text-right ma-3">
                        もっと見る
                    </p>
                </v-card>
            </v-col>
        </v-row>

        <v-dialog v-model="dialog" max-width="1500">
            <v-card class="pa-5">
                <component :is="getComponent(place)"></component>
            </v-card>
        </v-dialog>
    </v-card>
</template>

<script>
import kwangjangmarket from "@/components/gourmet/dialog/kwangjangmarket.vue"

import img1 from "@/assets/img/gourmet/yukhoe.jpg"
import img2 from "@/assets/img/gourmet/kani.jpg"
import img3 from "@/assets/img/gourmet/gogi.jpg"
import img4 from "@/assets/img/gourmet/chiken.jpg"
import img5 from "@/assets/img/gourmet/yoptook.jpg"
import img6 from "@/assets/img/gourmet/kalguksu.jpg"
import img7 from "@/assets/img/gourmet/sundaeguk.jpg"
import img8 from "@/assets/img/gourmet/intestines.jpg"
import img9 from "@/assets/img/gourmet/gongbul.jpg"
import img10 from "@/assets/img/gourmet/gyoza.jpg"

export default {
    components: {
        kwangjangmarket
    },
    data() {
        return {
            dialog: false,
            place: "",
            storename: [],
            header: [
                {
                    title: 'Rank',
                    align: 'center',
                    key: 'Rank',
                    value: 'Rank',
                    sortable: false,
                },
                {
                    title: 'Place',
                    key: 'Place',
                    value: 'Place',
                    sortable: false,
                },
                {
                    title: 'Menu',
                    key: 'Menu',
                    value: 'Menu',
                    sortable: false,
                },
                {
                    title: 'Price',
                    key: 'Price',
                    value: 'Price',

                },
                {
                    title: 'Spiciness',
                    key: 'Spiciness',
                    value: 'Spiciness',
                },
                {
                    title: 'Check',
                    key: 'Check',
                    Value: 'Check',
                    sortable: false,
                }
            ],
            items: [
                {
                    Rank: '🥇1',
                    Place: 'クァンジャン市場',
                    Menu: 'ユッケ/イイダコ/食べ歩き',
                    Price: '¥3000~4000',
                    Spiciness: 'なし',
                    Check: false,
                    src: img1,
                },
                {
                    Rank: '🥈2',
                    Place: 'スンミの家幸せケジャン',
                    Menu: 'カンジャンケジャン',
                    Price: '¥3000~4000',
                    Spiciness: 'なし',
                    Check: false,
                    src: img2,
                },
                {
                    Rank: '🥉3',
                    Place: '肉ハダ',
                    Menu: 'サムギョプサル',
                    Price: '¥1500~2000',
                    Spiciness: 'なし',
                    Check: false,
                    src: img3,
                },
                {
                    Rank: '4',
                    Place: 'BBQチキン',
                    Menu: '黄金オリーブキチン',
                    Price: '¥1500~2000',
                    Spiciness: 'なし',
                    Check: false,
                    src: img4,
                },
                {
                    Rank: '5',
                    Place: '東大門猟奇トッポッキ',
                    Menu: 'トッポッキ',
                    Price: '¥1000~2000',
                    Spiciness: '🔥~🔥🔥🔥🔥',
                    Check: false,
                    src: img5,
                },
                {
                    Rank: '6',
                    Place: 'テリョンジプ',
                    Menu: 'カルグクス/ボッサム/チヂミ/ユッケ',
                    Price: '¥1000~3000',
                    Spiciness: 'なし',
                    Check: false,
                    src: img6,

                },
                {
                    Rank: '7',
                    Place: 'コヒャンジプ',
                    Menu: 'クッパ',
                    Price: '¥~1000',
                    Spiciness: 'なし',
                    Check: false,
                    src: img7,
                },
                {
                    Rank: '8',
                    Place: 'ジェイルホルモン本店',
                    Menu: 'ホルモン焼き',
                    Price: '¥2000~3000',
                    Spiciness: 'なし',
                    Check: false,
                    src: img8,
                },
                {
                    Rank: '9',
                    Place: 'コンブル',
                    Menu: '豚肉豆もやし炒め',
                    Price: '¥1000~2000',
                    Spiciness: '🔥🔥🔥',
                    Check: false,
                    src: img9,
                },
                {
                    Rank: '10',
                    Place: '明洞餃子',
                    Menu: 'カルグクス/餃子',
                    Price: '¥1000~2000',
                    Spiciness: 'なし',
                    Check: false,
                    src: img10,
                },

            ],
        }
    },
    methods: {
        text(itemPlace) {
            this.place = itemPlace
            this.dialog = true
        },
        getComponent(itemPlace) {
            switch (itemPlace) {
                case 'クァンジャン市場':
                    return 'kwangjangmarket';
            }
        },

    }
}

</script>

<style>
.id1 {
    background-color: rgb(117, 190, 254);
}

#bg1 {
    background-color: rgb(231, 249, 253);
}

.v-selection-control__input::before {
    background-color: rgba(255, 0, 0, 0) !important;
}
</style>