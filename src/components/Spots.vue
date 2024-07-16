<template>
    <v-divider class="mt-7 mx-auto" length="95%"></v-divider>
    <p class="font-weight-black ma-10 mt-7">エリア別紹介</p>
    <v-card class="mt-5 mx-auto justify-center" width="90%" flat>
        <v-row>
            <v-col cols="3">
                <v-card flat>
                    <v-img height="150px" src="@/assets/img/streetfood.jpg" cover class="img"></v-img>
                    <p>明洞</p>
                    <v-btn>エリアを見る</v-btn>
                    <v-expand-transition>
                        <div v-show="show">
                            <v-card-text>
                                I'm a thing. But, like most politicians, he promised more than he could deliver. You
                                won't
                                have
                                time
                                for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with
                                that
                                data
                                file! Hey, you add a one and two zeros to that or we walk! You're going to do his
                                laundry?
                                I've
                                got
                                to find a way to escape.
                            </v-card-text>
                        </div>
                    </v-expand-transition>
                </v-card>
            </v-col>

            <v-col cols="3">
                <v-card flat>
                    <v-img height="150px" src="@/assets/img/ddp.jpg" cover class="img">
                    </v-img>
                    <p>東大門(乙支路・忠武路)エリア</p>
                    <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
                    <v-expand-transition>
                        <div v-show="show">
                            <v-card-text>
                                I'm a thing. But, like most politicians, he promised more than he could deliver. You
                                won't
                                have
                                time
                                for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with
                                that
                                data
                                file! Hey, you add a one and two zeros to that or we walk! You're going to do his
                                laundry?
                                I've
                                got
                                to find a way to escape.
                            </v-card-text>
                        </div>
                    </v-expand-transition>
                </v-card>
            </v-col>

            <v-col cols="3">
                <v-card flat>
                    <v-img height="150px" src="@/assets/img/bukchon.jpg" cover class="img"> </v-img>
                    <p>市庁・鐘路エリア</p>
                    <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
                    <v-expand-transition>
                        <div v-show="show">
                            <v-card-text>
                                I'm a thing. But, like most politicians, he promised more than he could deliver. You
                                won't
                                have
                                time
                                for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with
                                that
                                data
                                file! Hey, you add a one and two zeros to that or we walk! You're going to do his
                                laundry?
                                I've
                                got
                                to find a way to escape.
                            </v-card-text>
                        </div>
                    </v-expand-transition>
                </v-card>
            </v-col>

            <v-col cols="3">
                <v-card flat>
                    <v-img height="150px" src="@/assets/img/Myeongdong.jpg" cover class="img"> </v-img>
                    <p>梨泰院エリア</p>
                    <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
                    <v-expand-transition>
                        <div v-show="show">
                            <v-card-text>
                                I'm a thing. But, like most politicians, he promised more than he could deliver. You
                                won't
                                have
                                time
                                for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with
                                that
                                data
                                file! Hey, you add a one and two zeros to that or we walk! You're going to do his
                                laundry?
                                I've
                                got
                                to find a way to escape.
                            </v-card-text>
                        </div>
                    </v-expand-transition>
                </v-card>
            </v-col>

            <v-col cols="3">
                <v-card flat>
                    <v-img height="150px" src="@/assets/img/live.jpg" cover class="img"> </v-img>
                    <p>弘大・延南洞エリア</p>
                    <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
                    <v-expand-transition>
                        <div v-show="show">
                            <v-card-text>
                                I'm a thing. But, like most politicians, he promised more than he could deliver. You
                                won't
                                have
                                time
                                for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with
                                that
                                data
                                file! Hey, you add a one and two zeros to that or we walk! You're going to do his
                                laundry?
                                I've
                                got
                                to find a way to escape.
                            </v-card-text>
                        </div>
                    </v-expand-transition>
                </v-card>
            </v-col>

            <v-col cols="3">
                <v-card flat>
                    <v-img height="150px" src="@/assets/img/kangnum.jpg" cover class="img"> </v-img>
                    <p>新村・梨大エリア</p>
                    <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
                    <v-expand-transition>
                        <div v-show="show">
                            <v-card-text>
                                I'm a thing. But, like most politicians, he promised more than he could deliver. You
                                won't
                                have
                                time
                                for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with
                                that
                                data
                                file! Hey, you add a one and two zeros to that or we walk! You're going to do his
                                laundry?
                                I've
                                got
                                to find a way to escape.
                            </v-card-text>
                        </div>
                    </v-expand-transition>
                </v-card>
            </v-col>

            <v-col cols="3">
                <v-card flat>
                    <v-img height="150px" src="@/assets/img/kangnum.jpg" cover class="img"> </v-img>
                    <p>江南エリア</p>
                    <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
                    <v-expand-transition>
                        <div v-show="show">
                            <v-card-text>
                                I'm a thing. But, like most politicians, he promised more than he could deliver. You
                                won't
                                have
                                time
                                for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with
                                that
                                data
                                file! Hey, you add a one and two zeros to that or we walk! You're going to do his
                                laundry?
                                I've
                                got
                                to find a way to escape.
                            </v-card-text>
                        </div>
                    </v-expand-transition>
                </v-card>
            </v-col>

            <v-col cols="3">
                <v-card flat>
                    <v-img height="150px" src="@/assets/img/iseoulu.jpg" cover class="img"> </v-img>
                    <p>漢江エリア</p>
                    <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
                    <v-expand-transition>
                        <div v-show="show">
                            <v-card-text>
                                I'm a thing. But, like most politicians, he promised more than he could deliver. You
                                won't
                                have
                                time
                                for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with
                                that
                                data
                                file! Hey, you add a one and two zeros to that or we walk! You're going to do his
                                laundry?
                                I've
                                got
                                to find a way to escape.
                            </v-card-text>
                        </div>
                    </v-expand-transition>
                </v-card>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
export default {
    data() {
        return {
            show: false,
        }
    }
}
</script>

<style>
.img {
    border-radius: 5px;
}
</style>