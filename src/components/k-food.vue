<template>
    <v-card class="mx-auto pa-5  border-lg border-primary" flat>
        <v-card-title class="text-black text-subtitle-1 font-weight-bold">おすすめご飯ランキング</v-card-title>
        <v-card-text class="text-black text-body-2">独断と偏見が詰まった韓国のうまい店TOP10👑</v-card-text>
        <v-sheet>
            <v-data-table :headers="header" :items="items" hide-default-footer id="bg" class="pa-2">
                <template v-slot:item.Rank="{ index }">
                    <p v-if="index + 1 == '1'">🥇{{ index + 1 }}</p>
                    <p v-if="index + 1 == '2'">🥈{{ index + 1 }}</p>
                    <p v-if="index + 1 == '3'">🥉{{ index + 1 }}</p>
                    <p v-if="index >= 3">{{ index + 1 }}</p>
                </template>
                <template v-slot:item.Check="{ item }">
                    <v-checkbox-btn v-model="storecard" :value="item.Place" :ripple=false
                        color="orange"></v-checkbox-btn>
                </template>

            </v-data-table>
        </v-sheet>

        <v-row>
            <v-col cols="3">
                <v-card v-if="storecard == storename" id="relative" class="mx-auto mt-5" max-width="260"
                    min-height="280">
                    <v-img height="150px" v-for="item in imges" :key="item" :src="item.src" cover> </v-img>

                    <v-card-title>
                        {{ storecard }}
                    </v-card-title>
                    https://naver.me/xFprKyPp
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
import kwangjangmarket from "@/components/kwangjangmarket.vue"

import img1 from "@/assets/img/gourmet/yukhoe.jpg"

export default {
    components: {
        kwangjangmarket
    },
    data() {
        return {
            dialog: false,
            place: "",
            storecard: "",
            storename: ['storecard'],
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
                    Check: 'クァンジャン市場',
                },
                {
                    Rank: '🥈2',
                    Place: 'スンミの家幸せケジャン',
                    Menu: 'カンジャンケジャン',
                    Price: '¥3000~4000',
                    Spiciness: 'なし',
                    Check: false,
                },
                {
                    Rank: '🥉3',
                    Place: '肉ハダ',
                    Menu: 'サムギョプサル',
                    Price: '¥1500~2000',
                    Spiciness: 'なし',
                    Check: false,
                },
                {
                    Rank: '4',
                    Place: 'BBQチキン',
                    Menu: '黄金オリーブキチン',
                    Price: '¥1500~2000',
                    Spiciness: 'なし',
                    Check: false,
                },
                {
                    Rank: '5',
                    Place: '東大門猟奇トッポッキ',
                    Menu: 'トッポッキ',
                    Price: '¥1000~2000',
                    Spiciness: '🔥~🔥🔥🔥🔥',
                    Check: false,
                },
                {
                    Rank: '6',
                    Place: 'テリョンジプ',
                    Menu: 'カルグクス/ボッサム/チヂミ/ユッケ',
                    Price: '¥1000~3000',
                    Spiciness: 'なし',
                    Check: false,

                },
                {
                    Rank: '7',
                    Place: 'コヒャンジプ',
                    Menu: 'クッパ',
                    Price: '¥~1000',
                    Spiciness: 'なし',
                    Check: false,
                },
                {
                    Rank: '8',
                    Place: 'ジェイルホルモン本店',
                    Menu: 'ホルモン焼き',
                    Price: '¥2000~3000',
                    Spiciness: 'なし',
                    Check: false,
                },
                {
                    Rank: '9',
                    Place: 'コンブル',
                    Menu: '豚肉豆もやし炒め',
                    Price: '¥1000~2000',
                    Spiciness: '🔥🔥🔥',
                    Check: false,
                },
                {
                    Rank: '10',
                    Place: '明洞餃子',
                    Menu: 'カルグクス/餃子',
                    Price: '¥1000~2000',
                    Spiciness: 'なし',
                    Check: false,
                },

            ],
            imges: [
                {
                    src: img1,
                }
            ],

        }
    },
    // created() {

    //     this.handleFileUpload()
    // },
    methods: {
        // handleFileUpload() {
        // console.log(this.item.Check, this.storename)
        // },
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

#bg {
    background-color: rgb(254, 245, 224);
}

.v-selection-control__input::before {
    background-color: rgba(255, 0, 0, 0) !important;
}
</style>