<template>
    <div id="about-us-component">
        <div class="pa-5">
            <div class="d-flex flex-row flex-wrap-reverse justify-center align-center">
                <v-card
                    class="ma-10"
                    rounded="xl"
                    @click="ShowDialog()"
                    :max-width="imageWidth"
                    elevation="5"
                >
                    <v-img
                        :src="require('/public/img/AboutUsPhoto.jpg')"
                    />
                </v-card>
                <div class="text-container mt-10 pl-5 pr-5">
                    <h2 class="mb-10">Qui sommes nous ?</h2>
                    <p class="text-subtitle-1">
                        Nous sommes des étudiants en dernière année au CESI École d'Ingénieurs. Notre défi
                        est de
                        réaliser un grand événement : <strong>Next City 4.0</strong> !
                    </p>
                    <p class="text-subtitle-1">
                        Chaque année est organisé un salon sur les technologies de demain.
                        Le but est d’anticiper les évolutions et d’amener les solutions adaptées.
                    </p>
                </div>
            </div>
        </div>

        <v-dialog
            v-model="showDialog"
        >
            <v-card>
                <v-img
                    :src="require('/public/img/AboutUsPhoto.jpg')"
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
.text-container {
    max-width: 400px;
}
</style>