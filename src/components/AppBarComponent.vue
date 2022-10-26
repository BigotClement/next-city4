<template>
    <v-app-bar
        app
        color="primary"
    >
        <div class="d-flex align-center">
            <v-img
                alt="Next City 4.0 Logo"
                class=""
                :src="require('/public/img/Logo/Logo_CLR_Logotype_WHT.svg')"
                transition="scale-transition"
                width="100"
            />
        </div>
    </v-app-bar>
</template>

<script>
export default {
    name: "AppBarComponent"
}
</script>

<style scoped>

</style>