<template>
    <div>
        <app-navigation></app-navigation>
        <v-content>
            <add-info-form></add-info-form>
        </v-content>
    </div>
</template>

<script>
import AppNavigation from '@/components/AppNavigation'
import AddInfoForm from '@/components/AddInfoForm'

export default {
    name: 'add_info',
    components: {
        AppNavigation,
        AddInfoForm
    }
}
</script>
