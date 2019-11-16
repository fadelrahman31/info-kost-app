<template>
    <span>
        <v-navigation-drawer
            v-model= "drawer"
            light
            absolute
            temporary            
        >
            <v-btn color="blue lighten-3" fab dark>
                <v-icon>mdi-account-circle</v-icon>
            </v-btn>
            <v-divider></v-divider>
            <v-list nav dense>
                <v-list-item
                    v-for= "item in items"
                    :key= "item.title"
                    link
                >
                    <v-list-item-content>
                        <v-list-item-title>
                            {{ item.title }}
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>    
        </v-navigation-drawer>
        <v-app-bar
            absolute
            color="teal lighten-2"
            elevate-on-scroll
        >
            <v-app-bar-nav-icon
                @click.stop="drawer = !drawer"
            ></v-app-bar-nav-icon><v-spacer></v-spacer>
            <v-toolbar-title>{{ appTitle }}</v-toolbar-title>                
            <v-spacer flat></v-spacer>
            <v-btn flat>sign in</v-btn>
        </v-app-bar>
    </span>
</template>

<script>
export default {
    name: 'AppNavigation',
    data() {
        return {
            appTitle: 'InfoKostMu',
            drawer: null,
            items: [
                {
                    title: 'Home',
                },
                {
                    title: 'About'
                }
            ]
        };
    }
};
</script>