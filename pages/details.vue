<template>
    <v-app>
        <app-navigation></app-navigation>
        <v-content>
            <details-page></details-page>
        </v-content>
    </v-app>
</template>

<script>
import AppNavigation from '@/components/AppNavigation'
import DetailsPage from '@/components/DetailsPage'

export default {
    name: 'details',
    components: {
        AppNavigation,
        DetailsPage
    }
}
</script>