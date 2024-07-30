<template>
    <v-card class="mx-auto pa-5 mb-3 border-lg border-warning" min-height="730" flat>
        <v-card-title class="text-black text-subtitle-1 font-weight-bold">オシャレなカフェランキング</v-card-title>
        <v-card-text class="text-black text-body-2">本場韓国おすすめカフェTOP10👑</v-card-text>
        <v-sheet>
            <v-data-table :headers="header" :items="items" hide-default-footer id="bg" class="pa-2">
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

                    <v-card-title style="white-space:pre-wrap;">
                        {{ item.Place }}
                    </v-card-title>
                    <v-card-subtitle>
                        {{ item.Place2 }}
                    </v-card-subtitle>
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
import cafe1 from "@/components/gourmet/dialog/cafe.vue"

import img1 from "@/assets/img/gourmet/onion.jpg"
import img2 from "@/assets/img/gourmet/ribon.jpg"
import img3 from "@/assets/img/gourmet/Scaf.jpg"
import img4 from "@/assets/img/gourmet/bagel.jpg"
import img5 from "@/assets/img/gourmet/layered.jpg"
import img6 from "@/assets/img/gourmet/chongsoodang.jpg"
import img7 from "@/assets/img/gourmet/daerim.jpg"
import img8 from "@/assets/img/gourmet/tribe.jpg"
import img9 from "@/assets/img/gourmet/harry.jpg"
import img10 from "@/assets/img/gourmet/starbucks.jpg"
export default {
    component: {
        cafe1,
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
                    title: 'Star',
                    key: 'Stae',
                    value: 'Star',
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
                    Place: 'onion',
                    Menu: 'ドリンク/パン/デザートetc',
                    Price: '¥~1000',
                    Star: '⭐⭐⭐⭐⭐',
                    Check: false,
                    src: img1,
                },
                {
                    Rank: '🥈2',
                    Place: 'Mooni',
                    Menu: 'ドリンク/パン/パフェetc',
                    Price: '¥~1500',
                    Star: '⭐⭐⭐⭐',
                    Check: false,
                    src: img2,
                },
                {
                    Rank: '🥉3',
                    Place: 'S.caf',
                    Menu: 'ドリンク(アルコール有)/デザートetc',
                    Price: '¥~2000',
                    Star: '⭐⭐⭐⭐',
                    Check: false,
                    src: img3,
                },
                {
                    Rank: '4',
                    Place: 'LONDON BAGEL MUSEUM',
                    Menu: 'ドリンク/ベーグル',
                    Price: '¥1500~2000',
                    Star: '⭐⭐⭐',
                    Check: false,
                    src: img4,
                },
                {
                    Rank: '5',
                    Place: 'Café Layered',
                    Menu: 'ドリンク/デザートetc',
                    Price: '¥~1500',
                    Star: '⭐⭐⭐⭐',
                    Check: false,
                    src: img5,
                },
                {
                    Rank: '6',
                    Place: '清水堂',
                    Menu: 'ドリンク/ケーキ類',
                    Price: '¥1000~2000',
                    Star: '⭐⭐',
                    Check: false,
                    src: img6,

                },
                {
                    Rank: '7',
                    Place: 'デリム倉庫ギャラリー',
                    Menu: 'ドリンク/ケーキ類',
                    Price: '¥~1000',
                    Star: '⭐⭐',
                    Check: false,
                    src: img7,
                },
                {
                    Rank: '8',
                    Place: 'Tribe Cafe',
                    Menu: 'ドリンク/パンケーキ',
                    Price: '¥1000~3000',
                    Star: '⭐⭐',
                    Check: false,
                    src: img8,
                },
                {
                    Rank: '9',
                    Place: '943 KING\'S CROSS',
                    Menu: 'ドリンク/ハリーポッターデザート',
                    Price: '¥1000~2000',
                    Star: '⭐⭐⭐',
                    Check: false,
                    src: img9,
                },
                {
                    Rank: '10',
                    Place: 'StarBucks',
                    Place2: 'ソウルウェーブアートセンター店',
                    Menu: 'ドリンク/フード',
                    Price: '¥~1000',
                    Star: '⭐⭐',
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

#bg {
    background-color: rgb(254, 245, 224);
}

.v-selection-control__input::before {
    background-color: rgba(255, 0, 0, 0) !important;
}
</style>