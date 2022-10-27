<template>
    <div>
        <header-component/>
        <event-description-component/>
        <about-us-component/>
        <support-us-component/>
    </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";
import EventDescriptionComponent from "@/components/EventDescriptionComponent";
import AboutUsComponent from "@/components/AboutUsComponent";
import SupportUsComponent from "@/components/SupportUsComponent";

export default {
    name: "HomeView",
    components: {
        HeaderComponent,
        EventDescriptionComponent,
        AboutUsComponent,
        SupportUsComponent
    }
}
</script>

<style scoped>

</style>