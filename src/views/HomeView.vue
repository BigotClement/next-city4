<template>
    <div>
        <header-component/>
        <event-description-component/>
    </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";
import EventDescriptionComponent from "@/components/EventDescriptionComponent";

export default {
    name: "HomeView",
    components: {
        HeaderComponent,
        EventDescriptionComponent
    }
}
</script>

<style scoped>

</style>