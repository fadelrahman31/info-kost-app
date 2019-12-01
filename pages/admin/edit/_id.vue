<template>
    <div>
        <app-navigation></app-navigation>
        <v-content>
            <edit-info-form :id="$route.params.id"></edit-info-form>
        </v-content>
    </div>
</template>

<script>
import AppNavigation from '@/components/AppNavigation'
import EditInfoForm from '@/components/EditInfoForm'

export default {
    name: 'add_info',
    components: {
        AppNavigation,
        EditInfoForm
    }
}
</script>
