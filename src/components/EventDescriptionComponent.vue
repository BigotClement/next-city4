<template>
    <div id="event-description-component">
        <div class="pa-5 pt-10 d-flex justify-center flex-wrap align-center">
            <div class="pl-5 pr-5">
                <h2 class="mb-10">Next City 4.0</h2>
                <p class="description-text size-20">
                    Nous sommes ravis de vous accueillir <strong>mardi 24 janvier 2023</strong> pour notre
                    <strong>événement Next City 4.0.</strong>
                </p>
                <p class="description-text size-20">
                    Une série de conférences sur <strong>l'Industrie 4.0 et la Smart City*</strong> vous sera présentée à
                    <strong>la salle des fête Bernie Bonvoisin de Vandœuvre-lès-Nancy.</strong>
                </p>
                <p class="description-text size-20">
                    L'événement est entierement gratuit et en <strong>entrée libre.</strong> L'ouverture au public s'effectura à partir de <strong>9h30</strong>
                    et se déroulera sur la <strong>journée complète.</strong>
                </p>
                <p class="description-text size-20">
                    Next City 4.0 vous intéresse ? Afin d'estimer au mieux le nombre de visiteurs, nous mettons à votre disposition
                    un <a href="https://forms.gle/zVsYpTNDy2vmW2io8" target="_blank" class="link"><strong>formulaire</strong></a> qui ne prendra que quelques secondes à remplir.
                </p>
                <p class="description-text size-20">
                    Pour plus d'information n'hésitez pas à voir la liste des conférences.
                </p>
                <p class="description-text text-subtitle-1">
                    *Concept de Ville Intelligente
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
    max-width: 600px;
}
.link {
    color: #5116b3;
    text-decoration: underline;
}

.size-20 {
    font-size: 20px;
}
</style>