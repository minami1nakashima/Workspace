<template>
    <v-select v-model="Table" :item-props="itemProps" :items="table_name" label="ランキング表">
    </v-select>
</template>

<script>
export default {
    data() {
        return {
            table_name: [
                {
                    table: 'おすすめご飯ランキング🍗',
                    text: '独断と偏見のランキング表',
                },
                {
                    table: 'おすすめカフェランキング🧋',
                    text: 'オシャレな韓国カフェをご紹介',
                },
                {
                    table: 'おすすめコンビニ飯ランキング🍙',
                    text: '韓国のコンビニ飯とスイーツランキング'
                },
            ],
        }
    },
    methods: {
        itemProps(item) {
            return {
                title: item.table,
                subtitle: item.text,
            }
        },
    },
}
</script>