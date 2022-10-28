<template>
    <div id="event-description-component">
        <div class="pa-5 pt-10 d-flex justify-center flex-wrap align-center">

            <div class="pl-5 pr-5">
                <h2 class="mb-10">Next City 4.0</h2>
                <p class="description-text text-subtitle-1">
                    La dernière semaine de <strong>Janvier 2023</strong> à Nancy aura lieu
                    un événement regroupant un <strong>forum</strong> et des <strong>conférences</strong>
                    sur le thème de la <strong>Smart City</strong> et de l'<strong>Industrie 4.0.</strong>
                </p>
            </div>

            <v-card
                rounded="xl"
                color="accent"
                class="ma-5"
            >
                <v-card-text
                    class="d-flex justify-center flex-wrap align-center"
                >
                    <rotate-card-component num="9" number-title="Conférences"
                                           description="Sur le nouveau cycle de vie des produits !"/>
<!--                    <rotate-card-component num="20" number-title="Exposants"
                                           description="Dans le domaine de la Smart City et de l'Industrie 4.0"/>-->
                </v-card-text>
            </v-card>

        </div>
    </div>
</template>

<script>
import RotateCardComponent from "@/components/RotateCardComponent";

export default {
    name: "EventDescriptionComponent",
    components: {
        RotateCardComponent
    }
}
</script>

<style scoped>
.description-text {
    max-width: 400px;
}
</style>