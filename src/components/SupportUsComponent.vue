<template>
    <div id="support-us-component">
        <div class="pa-5 d-flex justify-center flex-wrap align-center">
            <div class="pl-5 pr-5 support-text">
                <h2 class="mb-10">Nous soutenir</h2>

                <p class="size-20">
                    En nous soutenant, vous devenez un acteur de la transformation locale s'inscrivant dans une
                    démarche technologique et environnementale. Vous permettrez à notre événement de
                    se dérouler dans un lieu d'exception.
                </p>

                <h3>Comment rejoindre notre aventure ?</h3>
                <p class="size-20">Si vous souhaitez nous aider dans notre projet, vous pouvez le faire de deux
                    façons: </p>
                <ul class="size-20">
                    <li>
                        Via une <a target="_blank" class="link" href="https://www.leetchi.com/c/next-city-4"><strong>cagnotte
                        Leetchi</strong></a> que nous avons mis en place.
                    </li>
                    <li>
                        <p>
                            En nous contactant sur l'adresse mail suivante : <strong> <a class="link"
                                                                                         href="mailto:contact@nextcity4.fr">contact@nextcity4.fr</a></strong>.
                        </p>
                        <p>
                            Nous pourrons vous proposer de devenir un partenaire de notre événement !
                        </p>
                    </li>
                </ul>
            </div>

            <v-card
                rounded="xl"
                :color="'#461399'"
                class="ma-5"
            >
                <v-card-text>
                    <h3 class="text-center text-white mb-3">Suivez-nous sur les réseaux !</h3>
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
                </v-card-text>
            </v-card>

        </div>
    </div>
</template>

<script>
import FollowBtnComponent from "@/components/FollowBtnComponent";

export default {
    name: "SupportUsComponent",
    components: {
        FollowBtnComponent
    }
}
</script>

<style scoped>
.support-text {
    max-width: 600px;
}

.link {
    color: #5116b3;
    text-decoration: underline;
}

.text-white {
    color: white !important;
}

.size-20 {
    font-size: 20px;
}
</style>