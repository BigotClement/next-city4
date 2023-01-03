<template>
    <div class="d-flex flex-column justify-center ml-16 mr-16 mt-5">
        <v-card
            :color="'#2a9599'"
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
        <p class="text-center pa-5 ma-0 text-subtitle-1" style="max-width: 250px">
            {{ description }}
        </p>

        <p class="text-center ma-0 text-subtitle-1">
            <a href="/conferences" class="link">
                Découvrir la programmation
                <v-icon
                    :color="'#5116b3'"
                    class="link-icon"
                >
                    mdi-menu-right
                </v-icon>
            </a>
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

<style lang="scss">
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

.link {
    color: #5116b3;
    text-decoration: none;

    &:hover {
        .link-icon {
            margin-left: 5px;
        }
    }
}
</style>