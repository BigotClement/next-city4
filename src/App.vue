<template>
    <v-app>
        <!--<app-bar-component/>-->

        <v-main>
            <router-view/>
        </v-main>
    </v-app>
</template>

<script>

//import AppBarComponent from "@/components/AppBarComponent";

export default {
    name: 'App',
    components: {
        //AppBarComponent
    }
};
</script>