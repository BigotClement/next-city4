<template>
    <div id="header-component">
        <div class="city-background">
            <div class="d-flex justify-center align-center flex-wrap img-container">
                <div class="d-block mr-5">
                    <v-img
                        :src="require('/public/img/Logo/Logo_CLR_Logotype_WHT.svg')"
                        transition="scale-transition"
                        :width="imageWidth"
                    />
                </div>
                <div class="d-block ml-5">
                    <v-img
                        :src="require('/public/img/PCDV.svg')"
                        transition="scale-transition"
                        :width="imageWidth"
                    />
                </div>
            </div>
            <div class="text-white text-center">
                <h2 class="pl-2 pr-2">Forum Conférences sur la Ville de demain</h2>
                <div class="align-end">
                    <p class="ma-0">Venez découvrir comment...</p>
                    <v-icon
                        x-large
                        color="white">
                        mdi-chevron-double-down
                    </v-icon>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HeaderComponent",
    computed: {
        imageWidth() {
            switch (this.$vuetify.breakpoint.name) {
                case 'xs': return 200
                case 'sm': return 200
                case 'md': return 300
                case 'lg': return 400
                case 'xl': return 500
                default : return 400
            }
        }
    }
}
</script>

<style lang="scss">
.city-background {
    background-image: url('/public/img/CityGradiant.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    /*border-radius: 0 0 30px 30px;*/
    width: 100%;
    height: 100vh;
}

.img-container {
    height: 75%;

    @media screen and (min-width: 960px) {
        height: 80%;
    }
}

.text-white {
    color: white;
}
</style>