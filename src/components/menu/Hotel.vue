<template>
    <v-sheet class="mx-10">
        <p class="text-h6 font-weight-black  my-7">おすすめホテル紹介</p>
        <div>
            ソウルには数多くの宿泊エリアがありますが、その中でもおすすめなのが以下の5エリア。<br>
            旅行の目的によっておすすめのエリアも変わってくるので、<br>
            自分の目的に合ったエリアからホテルを探してみてください。
            <v-img src="@/assets/img/hotel/map.jpg" width="50%"></v-img>
        </div>
        <v-select v-model="select" clearable multiple variant="underlined" :item-props="itemProps" :items="table_name"
            label="エリアで絞る">
        </v-select>
        <CardComp :page="page" :cardItem="mock.cardItem" :go="go"></CardComp>
    </v-sheet>
</template>

<script>
import CardComp from "@/components/comp/CardComp.vue"
import mock from "@/components/hotel/mock.js"


export default {
    components: {
        CardComp,
    },
    data() {
        return {
            mock,
            page: 'Hotel',
            go: '詳細を見る',
        }
    },

    methods: {
        text(itemPlace) {
            this.place = itemPlace
            this.dialog = true
        },
        itemProps(item) {
            return {
                title: item.table,
                subtitle: item.text,
            }
        },
    },
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