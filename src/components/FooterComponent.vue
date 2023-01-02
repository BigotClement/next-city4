<template>
    <div id="footer-component" class="ma-10">
        <v-card
            rounded="xl"
            :color="'#461399'"
        >
            <v-card-text>
                <div class="d-flex flex-row flex-wrap justify-center text-white">
                    <div class="text-center ma-5">
                        <h3 style="height: 20%">Nous contacter :</h3>
                        <div style="height: 80%" class="d-flex align-center">
                            <p class="ma-0"><strong> <a class="link" href="mailto:contact@nextcity4.fr">contact@nextcity4.fr</a></strong></p>
                        </div>
                    </div>

                    <div style="border: solid white 1px; border-radius: 5px;" />

                    <div class="text-center ma-5">
                        <h3>Suivez-nous sur les réseaux !</h3>
                        <div class="d-flex flex-row justify-center flex-wrap">

                            <follow-btn-component
                                link="https://www.linkedin.com/company/nextcity4-0/"
                                icon="mdi-linkedin"
                            />

                            <follow-btn-component
                                link="https://www.facebook.com/profile.php?id=100087193300546"
                                icon="mdi-facebook"
                            />

                            <follow-btn-component
                                link="https://twitter.com/nextcity4event"
                                icon="mdi-twitter"
                            />

                            <follow-btn-component
                                link="https://www.instagram.com/nextcity4.0/"
                                icon="mdi-instagram"
                            />
                        </div>
                    </div>
                </div>

                <div class="text-center text-white">
                    <p class="ma-0">Copyright &copy;2021-2022 - Next City 4.0</p>
                </div>

            </v-card-text>
        </v-card>
    </div>
</template>


<script>
import FollowBtnComponent from "@/components/FollowBtnComponent";

export default {
    name: "FooterComponent",
    components: {
        FollowBtnComponent
    }
}
</script>

<style scoped>
.text-white {
    color: white !important;
}

.link {
    color: white;
}
</style>