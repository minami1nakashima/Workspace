<template>
    <v-row>
        <v-col cols="3" v-for="item in cardItem" :key="item.area">
            <v-card id="relative" flat min-height="250" class="mb-4">
                <v-img :src="item.src" cover class="img" height="145px"></v-img>
                <p class="text-body-1 font-weight-black">
                    {{ item.area }}
                </p>
                <p :class="classText" class="my-2">
                    {{ item.text }}
                </p>
                <div v-if="page == 'Hotel'">
                    <p>{{ item.level }}</p>
                    <p>1泊￥{{ item.price }}～</p>
                </div>
                <v-btn id="more" size="small" :class="classBtn" @click="text(item.component)">
                    {{ go }}{{ item.component }}
                </v-btn>
            </v-card>
        </v-col>
    </v-row>
    <div v-if="page == 'Spots'">
        <v-dialog v-model="dialog" max-width="1500">
            <v-card class="pa-5">
                <component :is="dialogComp"></component>
            </v-card>
        </v-dialog>
    </div>
    <div v-else>

        <v-dialog v-model="dialog" max-width="1500">
            <v-card class="pa-5">
                {{ dialog }}
                <Hotel_Lotte :hotelName="hotelName" />
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import Spots_Myeongdong from "@/components/spots/Spots_Myeongdong.vue"
import Spots_Dongdaemun from "../spots/Spots_Dongdaemun.vue";
import Spots_Jongno from "../spots/Spots_Jongno.vue";
import Hotel_Lotte from "@/components/hotel/Hotel_Lotte.vue";

export default {
    props: {
        page: String,
        cardItem: String,
        classText: String,
        classBtn: String,
        go: String,
        hotelName: String,
    },
    components: {
        Spots_Myeongdong,
        Spots_Dongdaemun,
        Spots_Jongno,
        Hotel_Lotte,
    },
    data() {
        return {
            dialog: false,
            dialogComp: "",
        }
    },
    methods: {
        text(cardText) {
            this.dialogComp = cardText
            this.dialog = true
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