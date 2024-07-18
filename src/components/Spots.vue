<template>
    <v-divider class="mt-7 mx-auto" length="95%"></v-divider>
    <p class="text-h5 font-weight-black ma-10 mt-7">エリア別紹介</p>
    <v-card class="mt-5 mx-auto justify-center" width="90%" flat>
        <v-row>
            <v-col cols="3" v-for="item in items" :key="item.place">
                <v-card id="relative" flat min-height="300">
                    <v-img :src="item.src" cover class="img" height="200px"></v-img>
                    <p class="text-h6 font-weight-black">{{ item.place }}</p>
                    <p class="text-body-1" style="white-space:pre-wrap;" :color="item.color1">
                        {{ item.text1 }}</p>
                    <p class="text-body-2" style="white-space:pre-wrap;" :color="item.color2">
                        {{ item.text2 }}</p>
                    <p class="text-body-2" style="white-space:pre-wrap;" :color="item.color3">
                        {{ item.text3 }}</p>
                    <p id="more" @click="test(item.place)">
                        エリアを見る
                    </p>
                </v-card>
            </v-col>
        </v-row>
    </v-card>
    <v-dialog v-model="dialog" max-width="1500">
        <v-card v-if="place == '明洞エリア'" class="pa-5">
            <Spots_Myeongdong />
        </v-card>
        <v-card v-if="place == '東大門(乙支路・忠武路)エリア'">
            <template v-slot:text>
                ccc
            </template>
        </v-card>
        <v-card v-if="place == '市庁・鐘路エリア'">
            <template v-slot:text>
                aaaaa
            </template>
        </v-card>
        <v-card v-if="place == '梨泰院エリア'">
            <template v-slot:text>
                aaaaa
            </template>
        </v-card>
        <v-card v-if="place == '弘大・延南洞エリア'">
            <template v-slot:text>
                aaaaa
            </template>
        </v-card>
        <v-card v-if="place == '新村・梨大エリア'">
            <template v-slot:text>
                aaaaa
            </template>
        </v-card>
        <v-card v-if="place == '江南エリア'">
            <template v-slot:text>
                aaaaa
            </template>
        </v-card>
        <v-card v-if="place == '漢江エリア'">
            <template v-slot:text>
                aaaaa
            </template>
        </v-card>
    </v-dialog>
    <!-- <v-dialog v-model="dialog" max-width="1200" v-for="item in tabs" :key="item.name">
        <v-card v-if="item.name" class="pa-5">
            <component/>
        </v-card>
    </v-dialog> -->
</template>

<script>
import img1 from "@/assets/img/spots/streetfood.jpg"
import img2 from "@/assets/img/spots/ddp.jpg"
import img3 from "@/assets/img/spots/bukchon.jpg"
import img4 from "@/assets/img/spots/itaewon.jpg"
import img5 from "@/assets/img/spots/live.jpg"
import img6 from "@/assets/img/spots/sinchon.jpg"
import img7 from "@/assets/img/spots/kangnum.jpg"
import img8 from "@/assets/img/spots/iseoulu.jpg"

import spots_myeongdong from "@/components/Spots_Myeongdong.vue"
import spots_dongdaemun from "@/components/Spots_Dongdaemun.vue"

export default {
    components: {
        spots_myeongdong,
        spots_dongdaemun,
    },
    data() {
        return {
            show: false,
            dialog: false,
            place: "",
            items: [
                {
                    src: img1,
                    place: '明洞エリア',
                    text1: 'グルメ・コスメ・ファッション',
                    color1: 'light-blue-accent-2',
                    text2: 'が集う観光地',
                    color2: 'black',
                },
                {
                    src: img2,
                    place: '東大門(乙支路・忠武路)エリア',
                    text: 'ファッションの最先端街',
                },
                {
                    src: img3,
                    place: '市庁・鐘路エリア',
                    text: '韓国の歴史を感じされる',
                },
                {
                    src: img4,
                    place: '梨泰院エリア',
                    text: `バーやカフェがたくさん！
オシャレな外国人街`,
                },
                {
                    src: img5,
                    place: '弘大・延南洞エリア',
                    text: '韓国の若者が集う街',
                },
                {
                    src: img6,
                    place: '新村・梨大エリア',
                    text: `韓国の学生エリア！展示会なども開催`,
                },
                {
                    src: img7,
                    place: '江南エリア',
                    text: '昼も夜も休みがない街！'

                },
                {
                    src: img8,
                    place: '漢江エリア',
                    text: 'ソウルの街並みを見ながらのんびりと',
                },
            ],
            tabs: [
                {
                    name: '明洞',
                    comp: spots_myeongdong,
                },
                {
                    name: '東大門',
                    comp: spots_dongdaemun,
                }
            ]

        }

    },
    methods: {
        test(itemPlace) {
            this.place = itemPlace
            this.dialog = true
        }
    }
}
</script>

<style>
.img {
    border-radius: 5px;
}

#relative {
    position: relative;
}

#more {
    position: absolute;
    bottom: 0;
}

.ex {
    color: rgb(1, 198, 232);
}
</style>