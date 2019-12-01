<template>
    <v-app>
        <app-navigation></app-navigation>
        <v-content>
            <list-info></list-info>
        </v-content>
    </v-app>
</template>

<script>
import AppNavigation from '@/components/AppNavigation'
import ListInfo from '@/components/ListInfo'

export default {
    name: 'admin',
    components: {
        AppNavigation,
        ListInfo
    }
    
}
</script>