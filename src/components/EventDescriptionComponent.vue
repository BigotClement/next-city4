<template>
    <div id="event-description-component" class="pa-16">
        <p class="mb-10 description-text">
            La derniere semaine de <strong>Janvier 2023</strong> à Nancy aura lieu
            un évènement regroupant un <strong>forum</strong> et des <strong>conférences</strong>
            sur le thème de la <strong>Smart City</strong> et de l'<strong>Industrie 4.0.</strong>
        </p>

        <div class="mt-5 d-flex justify-center flex-wrap">
            <rotate-card-component num="8" number-title="Conferences" description="Sur le nouveau cycle de vie des produits !"/>
            <rotate-card-component num="20" number-title="Exposants" description="Dans le domaine de la Smart City et de l'Industrie 4.0"/>
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
#event-description-component {
    background-color: #5116b3;
    color: white;
}

.description-text {
    max-width: 400px;
}
</style>