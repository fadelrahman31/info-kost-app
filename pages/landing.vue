<template>
    <v-app>
        <app-navigation></app-navigation>
        <v-content>
            <span></span>
        </v-content>
    </v-app>    
</template>

<script>
import AppNavigation from '@/components/AppNavigation';

export default {
    name: 'landing',
    components: {
        AppNavigation
    }    
};
</script>