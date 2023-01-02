<template>
    <v-app>
        <!--<app-bar-component/>-->

        <v-main>
            <router-view/>
        </v-main>

<!--        <footer-component/>-->
    </v-app>
</template>

<script>

//import AppBarComponent from "@/components/AppBarComponent";
//import FooterComponent from "@/components/FooterComponent";

export default {
    name: 'App',
    components: {
        //AppBarComponent,
        //FooterComponent
    }
};
</script>

<style scoped>
* {
    background-color: #E7E7E7!important;
}
</style>