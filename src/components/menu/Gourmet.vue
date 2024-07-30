<template>
    <v-sheet class="mx-10">
        <p class="text-h6 font-weight-black  my-7">K-FOODおすすめ紹介</p>
        <v-item-group>
            <v-tabs v-model="tab">
                <v-tab v-for=" item in Category" :key="item.name" :text="item.name" :value="item.name" :class="item.css"
                    class="font-weight-black rounded-t-lg ml-1 border-t-lg border-e-lg border-s-lg" width="120px"
                    height="35px">
                </v-tab>
            </v-tabs>
        </v-item-group>
        <v-sheet class="mx-1 mt-n4">
            <component :is="getComponent(tab)"></component>
        </v-sheet>
    </v-sheet>
</template>

<script>
import food from "@/components/gourmet/k-food.vue"
import cafe from "@/components/gourmet/cafe.vue"
import convenience from "@/components/gourmet/convenience.vue"


export default {
    components: {
        food,
        cafe,
        convenience,
    },
    data() {
        return {
            tab: 'ご飯🍽️',
            Category: [
                {
                    name: 'ご飯🍽️',
                    css: 'id1',
                },
                {
                    name: 'カフェ☕',
                    css: 'id2',
                },
                {
                    name: 'コンビニ🍙',
                    css: 'id3',
                },
            ]

        };
    },
    methods: {
        getComponent(item) {
            console.log(item)
            switch (item) {
                case 'ご飯🍽️':
                    return 'food';
                case 'カフェ☕':
                    return 'cafe';
                case 'コンビニ🍙':
                    return 'convenience';
            }
        },
    },
}

</script>

<style>
.tab {
    background-color: rgba(220, 232, 254, 0.495);
}

.id1 {
    background-color: rgb(224, 237, 254);
}

.id2 {
    background-color: rgb(248, 227, 205);
}

.id3 {
    background-color: rgb(230, 249, 227);
}

.v-tab-item--selected.id1 {
    background-color: rgb(117, 190, 254);
}

.v-tab-item--selected.id2 {
    background-color: rgb(254, 174, 113);
}

.v-tab-item--selected.id3 {
    background-color: rgb(165, 255, 156);
}
</style>