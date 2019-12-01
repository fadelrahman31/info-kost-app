<template>
    <div>
        <app-navigation></app-navigation>
        <v-content>
            <landing-page></landing-page>
        </v-content>
    </div>
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
