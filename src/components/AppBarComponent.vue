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
            <v-btn>
                <router-link to="/" class="home-btn">
                    Retour vers l'accueil
                </router-link>
            </v-btn>
        </div>
    </v-app-bar>
</template>

<script>
export default {
    name: "AppBarComponent"
}
</script>

<style scoped>
.home-btn {
    text-decoration: none;
    color: black;
}
</style>