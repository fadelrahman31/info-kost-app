<template>
    <span>
        <v-navigation-drawer
            v-model= "drawer"
            light
            absolute
            temporary
        >
            <v-divider></v-divider>

            <v-card
                class="ma-3 pa-1"
                color="teal lighten-4"
                raised
                tile
            >
                <v-card-title class= "headline font-weight-medium">
                    Hi, {{ $store.state.name }}!
                </v-card-title>
                <v-icon>mdi-account-circle</v-icon>
            </v-card>
            <v-list nav dense>
                <v-list-item
                    v-for= "item in items"
                    :key= "item.title"
                    :to= "item.path"
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
            elevate-on-scroll
            dark
            color="blue-grey darken-2"
            tile
        >
            <v-app-bar-nav-icon
                @click.stop="drawer = !drawer"
            ></v-app-bar-nav-icon><v-spacer></v-spacer>
            <v-toolbar-title class= "font-weight-bold"  >{{ appTitle }}</v-toolbar-title>

            <v-spacer></v-spacer>
            <v-btn
                flat
                class=""
                text
            >sign in</v-btn>
            <v-btn
                flat
                color="teal darken-4"
                disabled=""
                text
            >sign out</v-btn>
        </v-app-bar>
    </span>
</template>

<script>
export default {
    name: 'AppNavigation',
    data() {
        return {
            appTitle: 'IndeKos.xyz',
            drawer: null,
            items: [
                {
                    title: 'Home',
                    path: '/landing'
                },
                {
                    title: 'About'
                }
            ]
        };
    }
};
</script>
