<template>
    <v-divider class="mt-7 mx-auto" length="95%"></v-divider>
    <p class="font-weight-black ma-10 mt-7">エリア別紹介</p>
    <v-card class="mt-5 mx-auto justify-center" width="90%" flat>
        <v-row>
            <v-col cols="3" v-for="item in items" :key="item.slide">
                <v-card flat>
                    <v-img :src="item.src" cover class="img" height="170px"></v-img>
                    <p>{{ item.place }}</p>
                    <v-btn @click="test(item.place)">
                        <!-- ="onMyeongdong" -->
                        エリアを見る</v-btn>
                    <v-expand-transition>
                        <div v-show="show">
                            <v-card-text>

                            </v-card-text>
                        </div>
                    </v-expand-transition>
                </v-card>
            </v-col>
        </v-row>
    </v-card>
    <v-dialog v-model="dialog">
        <v-card v-if="place == '明洞エリア'">
            <template v-slot:text>
                aaaaa
            </template>
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
</template>

<script>
// import { useRouter } from 'vue-router';
// const router = useRouter();

import img1 from "@/assets/img/spots/streetfood.jpg"
import img2 from "@/assets/img/spots/ddp.jpg"
import img3 from "@/assets/img/spots/bukchon.jpg"
import img4 from "@/assets/img/spots/itaewon.jpg"
import img5 from "@/assets/img/spots/live.jpg"
import img6 from "@/assets/img/spots/sinchon.jpg"
import img7 from "@/assets/img/spots/kangnum.jpg"
import img8 from "@/assets/img/spots/iseoulu.jpg"


export default {

    data() {
        return {
            show: false,
            dialog: false,
            items: [
                {
                    src: img1,
                    place: '明洞エリア',
                },
                {
                    src: img2,
                    place: '東大門(乙支路・忠武路)エリア',
                },
                {
                    src: img3,
                    place: '市庁・鐘路エリア',
                },
                {
                    src: img4,
                    place: '梨泰院エリア',
                },
                {
                    src: img5,
                    place: '弘大・延南洞エリア',
                },
                {
                    src: img6,
                    place: '新村・梨大エリア',
                },
                {
                    src: img7,
                    place: '江南エリア',

                },
                {
                    src: img8,
                    place: '漢江エリア',
                },
            ],
            place: "",
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
</style>