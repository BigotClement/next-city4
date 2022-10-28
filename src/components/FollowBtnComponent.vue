<template>
    <v-btn
        color="primary"
        class="ma-3"
        elevation="5"
        height="70"
        width="70"
        rounded
        :href="link"
        target="_blank"
    >
        <v-icon
            x-large
        >
            {{ icon }}
        </v-icon>
    </v-btn>
</template>

<script>
export default {
    name: "FollowBtnComponent",
    props: {
        link: String,
        icon: String,
    }
}
</script>

<style scoped>

</style>