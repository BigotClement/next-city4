<template>
    <div id="conference-topic-component">
        <v-card
            rounded="lg"
            :color="color"
            max-width="400px"
            height="100%"
        >
            <v-card-title class="topic-card">
                <p>
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
    },
}
</script>

<style scoped>
.topic-card {
    color: white!important;
    word-break: normal!important;
}
</style>