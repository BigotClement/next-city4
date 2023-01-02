<template>
    <div id="they-trust-us-component">
        <div class="pa-5 pt-10 d-flex justify-center flex-wrap align-center">
            <div class="pl-5 pr-5">
                <h2 class="mb-10">Ils nous font confiance !</h2>
                <div>
                    <v-card
                        rounded="xl"
                        max-width="1000"
                    >
                        <v-card-text class="d-flex flex-wrap justify-center">
                            <v-img
                                class="ma-3"
                                max-width="200" contain
                                :src="require('/public/img/Sponsor/cesi_blanc.jpg')"
                            />
                            <v-img
                                class="ma-3"
                                max-width="200" contain
                                :src="require('/public/img/Sponsor/logo_vandoeuvre.png')"
                            />
                            <v-img
                                class="ma-3"
                                max-width="200" contain
                                :src="require('/public/img/Sponsor/logo_infotel.png')"
                            />
                            <v-img
                                class="ma-3"
                                max-width="200" contain
                                :src="require('/public/img/Sponsor/plugandcom.png')"
                            />
                            <v-img
                                class="ma-3"
                                max-width="200" contain
                                :src="require('/public/img/Sponsor/logoEole.jpg')"
                            />
                            <v-img
                                class="ma-3"
                                max-width="200" contain
                                :src="require('/public/img/Sponsor/Escaledudragon.png')"
                            />
                        </v-card-text>
                    </v-card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TheyTrustUsComponent",
}
</script>

<style scoped>

</style>