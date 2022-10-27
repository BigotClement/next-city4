<template>
    <div id="about-us-component">
        <div class="about-us-background pa-16">
            <h2 class="mb-10">Qui sommes nous ?</h2>

            <p>
                Nous sommes des étudiants en dernière année au CESI École d'Ingénieurs. Cette année, notre défi
                est de
                réaliser un grand événement : <strong>Next City 4.0</strong> !
            </p>
            <p>
                Chaque année est organisé un salon sur les technologies de demain.
                Le but est d’anticiper les évolutions et d’amener les solutions adaptées.
            </p>


            <div class="d-flex justify-center">
                <v-card
                    rounded="xl"
                    @click="ShowDialog()"
                    :max-width="imageWidth"
                >
                    <v-img
                        :src="require('/public/img/AboutUsPhoto.png')"
                        max-height="600"
                    />
                </v-card>
            </div>


        </div>

        <v-dialog
            v-model="showDialog"
        >
            <v-card>
                <v-img
                    :src="require('/public/img/AboutUsPhoto.png')"
                    max-height="800"
                />
            </v-card>
        </v-dialog>

    </div>
</template>

<script>
export default {
    name: "AboutUsComponent",
    data() {
        return {
            showDialog: false,
        }
    },
    computed: {
        imageWidth() {
            switch (this.$vuetify.breakpoint.name) {
                case 'xs':
                    return 300
                case 'sm':
                    return 400
                case 'md':
                    return 500
                case 'lg':
                    return 800
                case 'xl':
                    return 1000
                default :
                    return 400
            }
        }
    },
    methods: {
        ShowDialog() {
            this.showDialog = true;
        }
    }
}
</script>

<style scoped>
#about-us-component {
    color: white;
    background-color: #2a9599;
}

.about-us-background {
    background-color: #991342;
    border-radius: 0 0 30px 30px;
}

.hexagon {
    clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);
}
</style>