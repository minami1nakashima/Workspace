<template>
    <v-data-table :items="items" hide-default-footer>
        <template v-slot:item.check="{ item }">
            <v-checkbox-btn v-model="item.check" :value="item.Place" density="compact"></v-checkbox-btn>
        </template>
    </v-data-table>


    <v-data-table v-model="selected" :items="items" item-value="Place" show-select></v-data-table>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    Rank: '🥇1',
                    Place: 'クァンジャン市場',
                    Menu: 'ユッケ/イイダコ/食べ歩き',
                    Price: '¥3000~4000',
                    Spiciness: 'なし',
                    check: false,
                },
                {
                    Rank: '🥈2',
                    Place: 'スンミの家幸せケジャン',
                    Menu: 'カンジャンケジャン',
                    Price: '¥3000~4000',
                    Spiciness: 'なし/🔥',
                    check: false,
                },
                {
                    Rank: '🥉3',
                    Place: '肉ハダ',
                    Menu: 'サムギョプサル',
                    Price: '¥1500~2000',
                    Spiciness: 'なし',
                    check: false,
                },
                {
                    Rank: '4',
                    Place: 'BBQチキン',
                    Menu: '黄金オリーブキチン',
                    Price: '¥1500~2000',
                    Spiciness: 'なし/🔥',
                    check: false,
                },
                {
                    Rank: '5',
                    Place: '東大門猟奇トッポッキ',
                    Menu: 'トッポッキ',
                    Price: '¥1000~2000',
                    Spiciness: '🔥~🔥🔥🔥🔥',
                    check: false,
                },
                {
                    Rank: '6',
                    Place: 'テリョンジプ',
                    Menu: 'カルグクス/ボッサム/チヂミ/ユッケ',
                    Price: '¥1000~3000',
                    Spiciness: 'なし',
                    check: false,

                },
                {
                    Rank: '7',
                    Place: 'コヒャンジプ',
                    Menu: 'クッパ',
                    Price: '¥~1000',
                    Spiciness: 'なし',
                    check: false,
                },
                {
                    Rank: '8',
                    Place: 'ジェイルホルモン本店',
                    Menu: 'ホルモン焼き',
                    Price: '¥2000~3000',
                    Spiciness: 'なし/🔥',
                    check: false,
                },
                {
                    Rank: '9',
                    Place: 'コンブル',
                    Menu: '豚肉豆もやし炒め',
                    Price: '¥1000~2000',
                    Spiciness: '🔥🔥🔥',
                    check: false,
                },
                {
                    Rank: '10',
                    Place: '明洞餃子',
                    Menu: 'カルグクス/餃子',
                    Price: '¥1000~2000',
                    Spiciness: 'なし',
                    check: false,
                },

                //cafe 明洞　コンビニ
            ],
        }
    }
}
</script>