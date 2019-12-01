<template>
    <v-app>
        <app-navigation>
        </app-navigation>
        <v-content>
            <landing-page></landing-page>
        </v-content>
    </v-app>
</template>

<script>
import AppNavigation from '@/components/AppNavigation';
import LandingPage from '@/components/LandingPage'

export default {
    name: 'index',
    components: {
        AppNavigation,
        LandingPage
    }
};
</script>
