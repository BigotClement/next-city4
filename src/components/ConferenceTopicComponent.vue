<template>
    <div id="conference-topic-component">
        <v-card
            rounded="lg"
            :color="color"
            max-width="400px"
            height="100%"
        >
            <v-card-subtitle class="topic-card pb-0">
                <strong>
                    {{ hour }}
                </strong>
            </v-card-subtitle>
            <v-card-title class="topic-card">
                <p class="ma-0">
                    {{ title }}
                </p>
            </v-card-title>
            <v-card-text class="topic-card">
                {{ description }}
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
export default {
    name: "ConferenceTopicComponent",
    props: {
        title: String,
        description: String,
        color: String,
        hour: String,
    },
}
</script>

<style scoped>
.topic-card {
    color: white !important;
    word-break: normal !important;
}
</style>