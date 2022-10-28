<template>
    <div class="d-flex flex-column justify-center ml-16 mr-16">
        <v-card
            color="secondary"
            rounded="lg"
            class="box-rotate"
            width="200"
        >
            <v-card-text class="text-center">
                <p class="box-rotate-text">
                    {{ num }} <br> {{ numberTitle }}
                </p>
            </v-card-text>
        </v-card>
        <p class="text-center pa-5 ma-0 text-white text-subtitle-1" style="max-width: 250px">
            {{ description }}
        </p>
    </div>
</template>

<script>
export default {
    name: "RotateCardComponent",
    props: {
        num: String,
        numberTitle: String,
        description: String,
    }
}
</script>

<style scoped>
.box-rotate {
    transform: rotate(-2.5deg);
    margin: 0 25px
}

.box-rotate-text {

    transform: rotate(2.5deg);
    color: white;
    font-size: 25px;
    margin: 10px 0;
    line-height: 30px;
}

.text-white {
    color: white!important;
}



</style>