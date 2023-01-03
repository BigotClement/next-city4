<template>
    <div id="program-view">
        <div class="pa-5 pr-16 pl-16">
            <h1># Conférences</h1>

            <p class="ma-0 pt-10">
                Vous trouverez ci-dessous 9 conférences au sujet plus passionnants les uns que les autres. Laissez les étudiants du CESI vous faire découvrir leurs travaux. Et suivez l'histoire des produits de l'usine jusqu'à leur seconde vie.
            </p>

            <div class="pt-10">
                <h2># Production</h2>
                <div class="d-flex flex-wrap">
                    <conference-topic-component v-for="(topic) in production_topics" :key="topic.title"
                        class="pa-3"
                        :title="topic.title"
                        :description="topic.description"
                        :color="'#3f3794'"
                    />
                </div>

                <h2 class="pt-3"># Acheminement</h2>
                <div class="d-flex flex-wrap">
                    <conference-topic-component v-for="(topic) in forwarding_topics" :key="topic.title"
                        class="pa-3"
                        :title="topic.title"
                        :description="topic.description"
                        :color="'#991542'"
                    />
                </div>

                <h2 class="pt-3"># Vente</h2>
                <div class="d-flex flex-wrap">
                    <conference-topic-component v-for="(topic) in sell_topics" :key="topic.title"
                        class="pa-3"
                        :title="topic.title"
                        :description="topic.description"
                        :color="'#996C13'"
                    />
                </div>

                <h2 class="pt-3"># Revalorisation</h2>
                <div class="d-flex flex-wrap">
                    <conference-topic-component v-for="(topic) in revaluation_topics" :key="topic.title"
                        class="pa-3"
                        :title="topic.title"
                        :description="topic.description"
                        :color="'#309598'"
                    />
                </div>

            </div>


        </div>
    </div>
</template>

<script>
import ConferenceTopicComponent from "@/components/ConferenceTopicComponent";
export default {
    name: "ProgramView",
    components: {
        ConferenceTopicComponent,
    },
    data() {
        return {
            production_topics: [
                {
                    title: "L'avenir des processus de manufacture des industries 4.0",
                    description: "A quoi pourraient ressembler les futures processus de manufacture et quels seront leurs impacts sur notre monde ?",
                },
                {
                    title: "Le produit, l'Homme et la ligne de production",
                    description: "Dans l'oeil du produit, nous verrons le chemin qu'il pourrait emprunter dans une industrie classique, puis dans l'industrie du futur.",
                },
                {
                    title: "L’impression 3D métallique et l’industrie 4.0",
                    description: "Quelle place prend l’impression 3D dans nos industries ? Les avantages, les inconvénients et les avancées à venir pour cette technologie.",
                },
                {
                    title: "La haute technologie au service de la consommation énergétique",
                    description: "Comment pouvons-nous réduire l’impact environnemental et énergétique de nos villes et industries ?",
                },
            ],
            forwarding_topics: [
                {
                    title: "Une cartographie des routes standardisée et fiable ?",
                    description: "Les techniques et technologies de numérisation des routes pour l’entraînement d’Intelligences Artificielles dans le contexte du Trafic Intelligent.",
                },
                {
                    title: "Les flux urbains : le trafic en ville réimaginé",
                    description: "Comment améliorer les infrastructures routières de nos villes pour assurer une transition plus rapide, économique et fluide vers la Smart-City.",
                },
            ],
            sell_topics: [
                {
                    title: "Magasin libre-service, vers une consommation plus fluide",
                    description: "A quoi devons-nous le concept des magasins libre-service ? Les technologies existantes et à venir pour ce domaine.",
                },
            ],
            revaluation_topics: [
                {
                    title: "Réinventer le cycle de vie des vêtements",
                    description: "Comment sortir du cycle « produire – acheter – jeter » ? Des solutions pour donner une seconde vie aux vêtements et d’autres pratiques innovantes.",
                },
                {
                    title: "Vers une meilleure gestion des déchets",
                    description: "Différentes manières de recycler ou revaloriser nos déchets plus intelligemment.",
                },
            ]
        }
    }

}
</script>

<style scoped>

</style>