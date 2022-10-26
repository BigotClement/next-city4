<template>
    <div id="header-component">
        <div class="city-background">
            <div class="d-flex justify-center align-center img-container">
                <div class="d-block mr-5">
                    <v-img
                        :src="require('/public/img/Logo/Logo_CLR_Logotype_WHT.svg')"
                        transition="scale-transition"
                        width="400"
                    />
                </div>
                <div class="d-block ml-5">
                    <v-img
                        :src="require('/public/img/PCDV.svg')"
                        transition="scale-transition"
                        width="400"
                    />
                </div>
            </div>
            <div class="d-flex flex-column justify-center align-center text-white">
                <p class="ma-0">Venez découvrir comment...</p>
                <v-icon
                    x-large
                    color="white">
                    mdi-chevron-double-down
                </v-icon>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HeaderComponent"
}
</script>

<style scoped>
#header-component {
    background-color: #7520FF;
}

.city-background {
    background-image: url('/public/img/CityGradiant.png');
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 0 0 30px 30px;
    width: 100%;
    height: 800px;
}

.img-container {
    height: 90%;
}

.text-white {
    color: white;
}
</style>