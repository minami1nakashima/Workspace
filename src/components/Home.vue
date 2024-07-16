    <template>
        <v-divider class="mt-7 mx-auto" length="95%"></v-divider>
        <v-row class="mt-5 mx-10">
            <v-col cols="9">
                <v-card min-height="480" max-height="480">
                    <v-carousel :show-arrows="false" hide-delimiters cycle hide-delimiter-background cover>
                        <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" cover></v-carousel-item>
                    </v-carousel>
                </v-card>
            </v-col>
            <v-col cols="3">
                <v-carousel :show-arrows="false" hide-delimiters cycle hide-delimiter-background cover>
                    <v-carousel-item v-for="item in slides" :key="item.slide">
                        <v-card min-height="480" rounded-xl="2" :color="item.color" flat>
                            <v-card-title class="d-flex justify-center mt-15 text-h5 font-weight-black">
                                {{ item.slide }}
                            </v-card-title>
                            <v-divider class="mx-auto" length="80%"></v-divider>
                            <v-card-text style="white-space:pre-wrap; text-align: center; line-height: 2;">
                                {{ item.explain }}
                            </v-card-text>
                        </v-card>
                    </v-carousel-item>
                </v-carousel>
            </v-col>
        </v-row>

        <v-row class="mt-15 ma-10">
            <v-col cols="12">
                <h2>韓国のあんなこんな</h2>
                <p class="text-caption">/ 様々な情報をお伝えします。/</p>
            </v-col>
            <v-col>
                <v-card class="mx-auto" max-width="344">
                    <v-img height="200px" src="@/assets/img/home/yoptook.jpg" cover>
                    </v-img>

                    <v-card-title>
                        激辛好きおすすめ料理
                    </v-card-title>

                    <v-card-subtitle>
                        1,000 miles of wonder
                    </v-card-subtitle>

                    <v-card-actions>
                        <v-btn color=" orange-lighten-2" text="Explore"></v-btn>

                        <v-spacer></v-spacer>

                        <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                        <div v-show="show">
                            <v-divider></v-divider>

                            <v-card-text>
                                I'm hungry.
                            </v-card-text>
                        </div>
                    </v-expand-transition>
                </v-card>
            </v-col>
            <v-col>
                <v-card class="mx-auto" max-width="344">
                    <v-img height="200px" src="@/assets/img/home/ramen.jpg" cover>
                    </v-img>

                    <v-card-title>
                        インスタントラーメン特集
                    </v-card-title>

                    <v-card-subtitle>
                        1,000 miles of wonder
                    </v-card-subtitle>

                    <v-card-actions>
                        <v-btn color=" orange-lighten-2" text="Explore"></v-btn>

                        <v-spacer></v-spacer>

                        <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                        <div v-show="show">
                            <v-divider></v-divider>

                            <v-card-text>
                                I'm hungry.
                            </v-card-text>
                        </div>
                    </v-expand-transition>
                </v-card>
            </v-col>
            <v-col>
                <v-card class="mx-auto" max-width="344">
                    <v-img height="200px" src="@/assets/img/home/kochujang.jpg" cover>
                    </v-img>

                    <v-card-title>
                        日本人でも食べられる韓国調味料
                    </v-card-title>

                    <v-card-subtitle>
                        1,000 miles of wonder
                    </v-card-subtitle>

                    <v-card-actions>
                        <v-btn color=" orange-lighten-2" text="Explore"></v-btn>

                        <v-spacer></v-spacer>

                        <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                        <div v-show="show">
                            <v-divider></v-divider>

                            <v-card-text>
                                I'm hungry.
                            </v-card-text>
                        </div>
                    </v-expand-transition>
                </v-card>
            </v-col>
        </v-row>
    </template>

<script>
import img1 from "@/assets/img/home/gwanghwamun.jpg"
import img2 from "@/assets/img/home/nseoultower.jpg"
import img3 from "@/assets/img/home/bukchon_1.jpg"
import img4 from "@/assets/img/home/Myeongdong.jpg"
import img5 from "@/assets/img/home/cheonggyecheon.jpg"

export default {
    data() {
        return {
            items: [
                {
                    src: img1,
                },
                {
                    src: img2,
                },
                {
                    src: img3,
                },
                {
                    src: img4,
                },
                {
                    src: img5,
                },
            ],
            slides: [
                {
                    color: 'light-blue-lighten-5',
                    slide: '光化門',
                    explain: `\\ 景福宮の城門の遺構 /

周辺には歴史的な建造物や
銅像、水路などがあります。
大都市に囲まれ
まるでタイムスリップしたよう！
夜にはライトアップされ
幻想的な雰囲気に...!
お散歩におすすめ`,
                },
                {
                    color: 'deep-orange-lighten-5',
                    slide: '南山タワー',
                    explain: `\\ ソウルのシンボル /

南山の頂上にそびえ立つ
タワーからは眺望はもちろん
南山タワーといえばの
「愛の南京錠」や、
眺めのよい
カフェやレストランなど！
バスやタクシーで頂上まで
登れます`,
                },
                {
                    color: 'blue-grey-lighten-5',
                    slide: '北村韓屋村',
                    explain: `\\ 韓屋が密集するエリア/

朝鮮時代から残る韓国の伝統家屋
「韓屋」
周辺には宮殿「景福宮」や
韓服のレンタル屋さんがたくさん！
実際に住まわれていて、
閑静な住宅地なので
ゆっくりと観光が楽しめます。`,
                },
                {
                    color: 'light-green-lighten-5',
                    slide: '明洞',
                    explain: `\\ 定番観光スポット明洞 /

ファッション・コスメ・エステなど
何でも揃う街です。
ほとんどのお店で
日本語が通じることから、
買い物のしやすさも抜群！
夕方には屋台が並び
韓国グルメ食べ歩きも楽しめます。`,
                },
                {
                    color: 'brown-lighten-5',
                    slide: '清渓川',
                    explain: `\\ 憩いの人口河川 /
                    
市内中心部を流れているので
明洞や仁寺洞などからも
歩いて行けるなど、
行き方はたくさん!
「散歩道」とも呼ばれ、
散歩しながら休憩がてら
川沿いのオシャレなカフェ
過ごすことができます。`,
                },
            ],
        }
    },
    // created() {
    //     console.log("this", this)
    //     this.handleFileUpload()
    // },
    // methods: {
    //     handleFileUpload() {
    //         console.log("AAAA")
    //     }
    // }
}
</script>