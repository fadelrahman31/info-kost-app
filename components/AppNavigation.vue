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
              tile
              v-if="$store.state.loggedIn"
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
          <v-list nav dense v-if="$store.state.loggedIn">
            <v-subheader>Admin</v-subheader>
            <v-list-item link to="/admin" exact>
              <v-list-item-content>
                <v-list-item-title>
                  List info kos
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link to="/admin/add" exact>
              <v-list-item-content>
                <v-list-item-title>
                  Add info kos
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
              v-if="$store.state.loggedIn"
              text
              @click="logout"
            >sign out</v-btn>
          <v-btn
            v-else
            text
            @click="login"
          >sign in</v-btn>
        </v-app-bar>
    </span>
</template>

<script>
import * as Cookies from 'js-cookie';
export default {
  name: 'AppNavigation',
  data() {
    return {
      appTitle: 'IndeKos.xyz',
      drawer: null,
      items: [
        {
          title: 'Home',
          path: '/'
        }
      ]
    };
  },
  methods: {
    logout() {
      Cookies.remove('token');
      this.$store.commit('logout');
    },
    login() {
      this.$router.push('/login');
    }
  }
};
</script>
