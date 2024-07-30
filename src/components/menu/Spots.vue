<template>
    <p class="text-h6 font-weight-black ma-10 mt-7">エリア別紹介</p>

    <v-card class="mt-5 mx-auto justify-center" width="90%" flat>
        <v-row>
            <v-col cols="3" v-for="item in items" :key="item.place">
                <v-card id="relative" flat min-height="250" class="mb-4">
                    <v-img :src="item.src" cover class="img" height="160px"></v-img>
                    <p class="text-body-1 font-weight-black">
                        {{ item.place }}
                    </p>
                    <p class="text-light-blue-lighten-3 font-weight-bold my-2">
                        {{ item.text1 }}
                    </p>
                    <v-btn id="more" size="small"
                        class="bg-light-blue-lighten-2 text-white text-body-2 font-weight-black"
                        @click="text(item.place)">
                        エリアを見る
                    </v-btn>
                </v-card>
                <v-divider></v-divider>
            </v-col>
        </v-row>
    </v-card>

    <v-dialog v-model="dialog" max-width="1500">
        <v-card class="pa-5">
            <component :is="getComponent(place)"></component>
        </v-card>
    </v-dialog>

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

import spots_myeongdong from "@/components/spots/Spots_Myeongdong.vue"
import spots_dongdaemun from "@/components/spots/Spots_Dongdaemun.vue"

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
                    text1: '人気NO.１の観光地',
                },
                {
                    src: img2,
                    place: '東大門(乙支路・忠武路)エリア',
                    text1: 'ファッションの最先端街',
                },
                {
                    src: img3,
                    place: '市庁・鐘路エリア',
                    text1: '韓国の歴史を感じされるエリア',
                },
                {
                    src: img4,
                    place: '梨泰院エリア',
                    text1: 'オシャレな外国人街',
                },
                {
                    src: img5,
                    place: '弘大・延南洞エリア',
                    text1: '韓国の若者が集う街',
                },
                {
                    src: img6,
                    place: '新村・梨大エリア',
                    text1: '韓国の学生街エリア',
                },
                {
                    src: img7,
                    place: '江南エリア',
                    text1: '昼も夜も休みがない街！'

                },
                {
                    src: img8,
                    place: '漢江エリア',
                    text1: 'ソウルの街並みを見ながらのんびり',
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
                case '明洞エリア':
                    return 'spots_myeongdong';
                case '東大門(乙支路・忠武路)エリア':
                    return 'spots_dongdaemun';
                case '市庁・鐘路エリア':
                    return 'spots_jongno';
                case '梨泰院エリア':
                    return 'spots_itaewon';
                case '弘大・延南洞エリア':
                    return 'spots_hongdae';
                case '新村・梨大エリア':
                    return 'spots_sinchon';
                case '江南エリア':
                    return 'spots_gangnam';
                case '漢江エリア':
                    return 'spots_hanriver';

            }
        },
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