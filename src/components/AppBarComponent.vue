<template>
    <v-app-bar
        elevation="5" app
        :color="'#175153'"
    >
        <div class="d-flex align-center justify-space-between" style="width: 100%">
            <v-img
                alt="Next City 4.0 Logo"
                class=""
                :src="require('/public/img/Logo/Logo_CLR_Logotype_WHT.svg')"
                transition="scale-transition"
                max-width="75"
            />
            <div class="text-white d-flex flex-row justify-end pa-3">
                <v-btn
                    to="/"
                    text class="text-white"
                    :x-small="this.$vuetify.breakpoint.name === 'xs'"
                >
                    Accueil
                </v-btn>

                <div class="divider"/>

                <v-btn
                    to="/conferences"
                    text class="text-white"
                    :x-small="this.$vuetify.breakpoint.name === 'xs'"
                >
                    Conférences
                </v-btn>

                <div class="divider"/>

                <v-btn
                    text class="text-white"
                    :x-small="this.$vuetify.breakpoint.name === 'xs'"
                >
                    <a href="https://forms.gle/zVsYpTNDy2vmW2io8" target="_blank" class="form-link">
                        S'inscrire
                    </a>
                </v-btn>
            </div>
        </div>
    </v-app-bar>
</template>

<script>
export default {
    name: "AppBarComponent"
}
</script>

<style scoped>

.text-white {
    color: white!important;
}
.divider {
    width: 0;
    border: solid white 1px;
    margin: 0 5px;
}

.form-link {
    text-decoration: none;
    color: white;
}

</style>