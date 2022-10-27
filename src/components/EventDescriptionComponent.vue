<template>
    <div id="event-description-component">
        <div class="pa-16 description-background">
            <h2 class="mb-10">Next City 4.0</h2>

            <p class="mb-10 description-text">
                La dernière semaine de <strong>Janvier 2023</strong> à Nancy aura lieu
                un événement regroupant un <strong>forum</strong> et des <strong>conférences</strong>
                sur le thème de la <strong>Smart City</strong> et de l'<strong>Industrie 4.0.</strong>
            </p>

            <div class="mt-5 d-flex justify-center flex-wrap">
                <rotate-card-component num="9" number-title="Conférences" description="Sur le nouveau cycle de vie des produits !"/>
                <!--            <rotate-card-component num="20" number-title="Exposants" description="Dans le domaine de la Smart City et de l'Industrie 4.0"/>-->
            </div>
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
    color: white;
    background-color: #991342;

}

.description-background {
    background-color: #5116b3;
    border-radius: 0 0 30px 30px;
}

.description-text {
    max-width: 400px;
}
</style>