    <template>
        <!-- <v-app>
        <v-card class="mx-auto" max-width="1500" min-width="1500" style="height: 60px;" flat>
            <v-app-bar color="#43a047" flat>
 
                <v-btn icon>
                    <v-icon>mdi-menu</v-icon>
 
                    <v-menu activator="parent" icon="bar-nav-icon">
                        <v-list @click:select="clickItem">
                            <v-list-item value="1">
                                <v-list-item-title>Seoul</v-list-item-title>
                            </v-list-item>
                            <v-list-item value="2">
                                <v-list-item-title>Busan</v-list-item-title>
                            </v-list-item>
                            <v-list-item value="3">
                                <v-list-item-title>Gangneung</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </v-btn>
 
                <v-toolbar-title>Go To KOREA</v-toolbar-title>
 
                <v-spacer></v-spacer>
 
                <v-text-field label="Search" prepend-inner-icon="mdi-magnify" variant="outlined" hide-details
                    single-line max-width="180" density="compact" class="mr-4">
                </v-text-field>
 
                <v-btn icon>
                    <v-icon>mdi-heart</v-icon>
                </v-btn>
 
                <v-btn icon>
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
            </v-app-bar>
        </v-card>
    </v-app> -->

        <v-card class="mx-auto" max-width="1500" rounded="0" flat>
            <v-toolbar color="white">
                <v-btn icon rounded="0">
                    <v-icon>mdi-menu</v-icon>
                    <v-menu activator="parent" icon="bar-nav-icon">
                        <v-list @click:select="clickItem">
                            <v-list-item value="1">
                                <v-list-item-title>Seoul</v-list-item-title>
                            </v-list-item>
                            <v-list-item value="2">
                                <v-list-item-title>Busan</v-list-item-title>
                            </v-list-item>
                            <v-list-item value="3">
                                <v-list-item-title>Gangneung</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </v-btn>

                <v-toolbar-title class="font-weight-black">Go To KOREA</v-toolbar-title>

                <v-spacer></v-spacer>

                <v-text-field label="Search" prepend-inner-icon="mdi-magnify" variant="outlined" hide-details
                    single-line max-width="180" density="compact" class="mr-4">
                </v-text-field>

                <v-btn icon>
                    <v-icon>mdi-heart</v-icon>
                </v-btn>

                <v-btn icon>
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
            </v-toolbar>

            <v-toolbar color="light-blue-lighten-5" density="compact">
                <v-btn class="Category" variant="plain">
                    グルメ
                </v-btn>

                <v-btn class="Category" variant="plain">
                    交通
                </v-btn>

                <v-btn class="Category" variant="plain">
                    ホテル
                </v-btn>

                <v-btn class="Category" variant="plain">
                    飛行機
                </v-btn>

                <v-btn class="Category" variant="plain">
                    換金所
                </v-btn>

                <v-btn class="Category" variant="plain">
                    マナー
                </v-btn>

                <v-btn class="Category" variant="plain">
                    ワード
                </v-btn>


                <v-btn class="Category" variant="plain">
                    季節
                </v-btn>
            </v-toolbar>

            <v-row class="mt-10 mx-10">
                <v-col cols="8">
                    <v-card min-height="480" max-height="480">
                        <v-carousel :show-arrows="false">
                            <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src"
                                cover></v-carousel-item>
                        </v-carousel>
                    </v-card>
                </v-col>
                <v-col>
                    <v-card class="ml-10" min-height="480" rounded-xl="2" :max-height="480"
                        style="background-color: aquamarine;">
                        <v-carousel show-arrows="hover" :cycle=false hide-delimiter-background>
                            <v-carousel-item v-for="(slide, i) in slides" :key="i">
                                <v-sheet :color="colors[i]" height="100%">
                                    <div class="d-flex fill-height justify-center align-center">
                                        <div class="text-h2">
                                            {{ slide }} Slide
                                        </div>
                                    </div>
                                </v-sheet>
                            </v-carousel-item>
                        </v-carousel>
                    </v-card>
                </v-col>
            </v-row>
        </v-card>

    </template>

<script>
import img1 from "@/assets/img/gwanghwamun-636113_1280.jpg"
import img2 from "@/assets/img/Seoul-GettyImages-1140551641.jpg"
export default {
    data() {
        return {
            test: 400,
            items: [
                {
                    src: img1,
                },
                {
                    src: img2,
                },
            ],
            colors: [
                'indigo',
                'warning',
                'pink darken-2',
                'red lighten-1',
                'deep-purple accent-4',
            ],
            slides: [
                'First',
                'Second',
                'Third',
                'Fourth',
                'Fifth',
            ],
        }
    },
}
</script>

<style>
.Category {
    font-weight: bold;
}

.Category:hover {
    color: #40C4FF;
    text-shadow: 2px 1px 0 white;
}
</style>