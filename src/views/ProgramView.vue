<template>
    <div id="program-view">
        <app-bar-component/>
        <div class="pb-5 pr-16 pl-16 pt-10">
            <h1># Conférences</h1>

            <p class="ma-0 pt-5">
                Vous trouverez ci-dessous 9 conférences au sujet plus passionnants les uns que les autres. Laissez les
                étudiants du CESI vous faire découvrir leurs travaux. Et suivez l'histoire des produits de l'usine
                jusqu'à leur seconde vie.
            </p>

            <div class="pt-10">
                <h2># Production</h2>
                <div class="d-flex flex-wrap">
                    <conference-topic-component v-for="(topic) in production_topics" :key="topic.title"
                                                class="pa-3"
                                                :title="topic.title"
                                                :description="topic.description"
                                                :hour="topic.hour"
                                                :color="'#3f3794'"
                    />
                </div>

                <h2 class="pt-7"># Acheminement</h2>
                <div class="d-flex flex-wrap">
                    <conference-topic-component v-for="(topic) in forwarding_topics" :key="topic.title"
                                                class="pa-3"
                                                :title="topic.title"
                                                :description="topic.description"
                                                :hour="topic.hour"
                                                :color="'#991542'"
                    />
                </div>

                <h2 class="pt-7"># Vente</h2>
                <div class="d-flex flex-wrap">
                    <conference-topic-component v-for="(topic) in sell_topics" :key="topic.title"
                                                class="pa-3"
                                                :title="topic.title"
                                                :description="topic.description"
                                                :hour="topic.hour"
                                                :color="'#996C13'"
                    />
                </div>

                <h2 class="pt-7"># Revalorisation</h2>
                <div class="d-flex flex-wrap">
                    <conference-topic-component v-for="(topic) in revaluation_topics" :key="topic.title"
                                                class="pa-3"
                                                :title="topic.title"
                                                :description="topic.description"
                                                :hour="topic.hour"
                                                :color="'#309598'"
                    />
                </div>

            </div>


        </div>
    </div>
</template>

<script>
import ConferenceTopicComponent from "@/components/ConferenceTopicComponent";
import AppBarComponent from "@/components/AppBarComponent";

export default {
    name: "ProgramView",
    components: {
        ConferenceTopicComponent,
        AppBarComponent,
    },
    data() {
        return {
            production_topics: [
                {
                    title: "L'avenir des processus de manufacture des industries 4.0",
                    description: "A quoi pourraient ressembler les futures processus de manufacture et quels seront leurs impacts sur notre monde ?",
                    hour: "10h05 - 10h20",
                },
                {
                    title: "Le produit, l'Homme et la ligne de production",
                    description: "Dans l'oeil du produit, nous verrons le chemin qu'il pourrait emprunter dans une industrie classique, puis dans l'industrie du futur.",
                    hour: "10h25 - 10h55",
                },
                {
                    title: "L’impression 3D métallique et l’industrie 4.0",
                    description: "Quelle place prend l’impression 3D dans nos industries ? Les avantages, les inconvénients et les avancées à venir pour cette technologie.",
                    hour: "11h00 - 11h20",
                },
                {
                    title: "La haute technologie au service de la consommation énergétique",
                    description: "Comment pouvons-nous réduire l’impact environnemental et énergétique de nos villes et industries ?",
                    hour: "11h25 - 11h45",
                },
            ],
            forwarding_topics: [
                {
                    title: "Une cartographie des routes standardisée et fiable ?",
                    description: "Les techniques et technologies de numérisation des routes pour l’entraînement d’Intelligences Artificielles dans le contexte du Trafic Intelligent.",
                    hour: "12h45 - 13h10",
                },
                {
                    title: "Les flux urbains : le trafic en ville réimaginé",
                    description: "Comment améliorer les infrastructures routières de nos villes pour assurer une transition plus rapide, économique et fluide vers la Smart-City.",
                    hour: "13h15 - 13h35",
                },
            ],
            sell_topics: [
                {
                    title: "Magasin libre-service, vers une consommation plus fluide",
                    description: "A quoi devons-nous le concept des magasins libre-service ? Les technologies existantes et à venir pour ce domaine.",
                    hour: "13h40 - 14h10",
                },
            ],
            revaluation_topics: [
                {
                    title: "Réinventer le cycle de vie des vêtements",
                    description: "Comment sortir du cycle « produire – acheter – jeter » ? Des solutions pour donner une seconde vie aux vêtements et d’autres pratiques innovantes.",
                    hour: "14h15 - 14h45",
                },
                {
                    title: "Vers une meilleure gestion des déchets",
                    description: "Différentes manières de recycler ou revaloriser nos déchets plus intelligemment.",
                    hour: "14h50 - 15h20",
                },
            ]
        }
    }

}
</script>

<style scoped>

</style>