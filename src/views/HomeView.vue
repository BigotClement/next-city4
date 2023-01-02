<template>
    <div>
        <header-component/>
        <event-description-component/>
        <about-us-component/>
        <support-us-component/>
        <they-trust-us-component/>
    </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";
import EventDescriptionComponent from "@/components/EventDescriptionComponent";
import AboutUsComponent from "@/components/AboutUsComponent";
import SupportUsComponent from "@/components/SupportUsComponent";
import TheyTrustUsComponent from "@/components/TheyTrustUsComponent";

export default {
    name: "HomeView",
    components: {
        HeaderComponent,
        EventDescriptionComponent,
        AboutUsComponent,
        SupportUsComponent,
        TheyTrustUsComponent,
    }
}
</script>

<style scoped>

</style>