    <template>
        <v-app>
            <bar />

            <v-main flat>
                <Menu />
            </v-main>
        </v-app>
    </template>

<script>
// import { useRouter } from 'vue-router';
// const router = useRouter();

import Menu from "@/components/Menu.vue"
import bar from "@/components/Appbar.vue"

export default {
    components: {
        Menu,
        bar,
    }

    // data: () => ({

    // })
}
</script>

<style>
@media (min-width: 2560px) {
    .v-app {
        max-width: 1500px;
    }
}
</style>

