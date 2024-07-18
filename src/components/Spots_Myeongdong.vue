<template v-slot:text>
    <v-sheet class="ma-10 pa-3" color="light-blue-lighten-5">
        <div class="mt-10 ml-15">
            <h1>明洞エリア</h1>
            観光客に<strong class="text-light-blue-accent-2">人気NO.1の観光地</strong>
        </div>
        <v-row>
            <v-col cols=" 6">
                <p id="sp_md" class="mt-10 ml-15" style="line-height: 2.5;"><br>
                    <span id="border">ほとんどのお店に日本語が話せるスタッフがいるので、<br>
                        初めての韓国旅行でも比較的安心です。</span><br>
                    様々なブランドや人々が集まるため、昼夜問わず活気がありますが、<br>
                    夕方になるとメイン通りに屋台が出店されるので、ひときわにぎわいます。<br>
                    その中でも私が選ぶ明洞といえば<br>
                    「コスメ」「ファッション」「グルメ」「両替所」です。<br>
                    <span class="text-body-2">※屋台については「グルメ」にて紹介しています。</span><br>
                    赤い線の通りがメイン通りですが、路地にもたくさんのお店が存在します。<br><br>
                    今回はカテゴリー別に紹介していきたいと思います。
                </p>
            </v-col>
            <v-col cols="6">
                <v-img src="@/assets/img/spots/M_map.jpg" class="mx-auto mb-2"></v-img>
                <p class="text-center">地下鉄4号線 明洞駅 6番出口<br>
                    地下鉄2号線 乙支路入口駅 5番出口</p>
            </v-col>
        </v-row>
    </v-sheet>

    <v-sheet class="ma-10 pa-3">
        <h3>カテゴリー</h3>
        <v-divider :thickness="6" color="info" class="my-5"></v-divider>
        <v-list density="compact">
            <v-list-item v-for="item in indexes" :key="item" :title="'・' + item"></v-list-item>
        </v-list>

        <h3 class="mt-15">コスメ</h3>
        <v-divider :thickness="6" color="info" class="my-5"></v-divider>
        <p style="line-height: 2;">韓国旅行のお土産に欠かせないのがコスメ<br>
            韓国にはプチプラで、機能性の良いコスメやスキンケア用品がたくさんあります。<br>
            そこで今回は「明洞エリア」で、おすすめのコスメショップをご紹介
        </p>

        <v-list density="compact">
            <v-list-item v-for="item in cosmetics" :key="item" :title="'・' + item"></v-list-item>
        </v-list>

        <div class="mt-15">
            <h3>①NATURE REPUBLIC 明洞ワールド店</h3>
            <v-divider :thickness="6" color="info" class="my-5"></v-divider>
            <v-img src="@/assets/img/spots/nature.jpg" width="80%" class="mx-auto mb-3"></v-img>
            <p class="text-center">地下鉄4号線 明洞駅 6番出口を出てすぐに左側に位置する植物に覆われた建物<br>
                （明洞には計6店舗のNATURE REPUBLICがあります。)</p>
            <P class="mt-8 text-center" style="line-height: 2;">「韓国自然派スキンケアブランド」と紹介されるほど自然の天然成分をふんだんに使った商品が豊富<br>
                アロエスージングジェルや、ビタペアCシリーズ、スネイルソリューションシリーズが人気！<br>
            </p>
            <v-row class=" ma-3">
                <v-col cols="4"><v-img src="@/assets/img/spots/aroe.jpg" width="70%" class="mx-auto"></v-img></v-col>
                <v-col cols="4"><v-img src="@/assets/img/spots/vitapair.jpg" width="70%"
                        class="mx-auto"></v-img></v-col>
                <v-col cols="4"><v-img src="@/assets/img/spots/snail.jpg" width="70%" class="mx-auto"></v-img></v-col>
            </v-row>
            <v-card width="60%" class="bg-grey-lighten-4 mx-auto pa-10">
                <v-card-title class="text-center">STORE INFOMATION</v-card-title>
                <v-divider></v-divider>
                <v-card-text class="ml-15 pl-15">
                    <p class="ml-15 pl-5" style="line-height: 1.5;">
                        住所：ソウル特別市 中区 忠武路1街 24-2<br>
                        営業時間：8:00～24:00<br>
                        休業日：年中無休<br>
                        アクセス：地下鉄4号線「明洞」駅6番出口　徒歩1分<br>
                    </p>
                </v-card-text>

            </v-card>
        </div>
    </v-sheet>

</template>

<script>
export default {
    data() {
        return {
            indexes: [
                'コスメ', 'ファッション', '両替所',
            ],
            cosmetics: [
                'NATURE REPUBLIC', 'MISSHA', 'CLIO', 'innis free', '3CE', 'OLIVE YOUNG'
            ]
        }

    }
}
</script>

<style>
#sp_md {
    line-height: 2;
}

#border {
    background: linear-gradient(transparent 70%, #38c7f78e 70%);
}
</style>