<template>
    <v-container>
        <h1 v-text="kostData.nama"></h1>
        <h2>{{ dummy2 }}</h2>
            <v-card
                class="mx-auto ma-1"
                raised
                tile
            >
                <v-card-title
                    class= "headline"
                    v-text= "kostData.nama"
                ></v-card-title>   
                             
            </v-card>
            <v-img :src= "kostData.gambar" width= "200px"></v-img>
        
    </v-container>
</template>

<script>
import axios from '@nuxtjs/axios'

export default {
    name: 'DetailsPage',
    data() {
        return {
            dummy: null,
            dummy2: null,
            kostData: []
        }
    },
    async mounted() {
        this.dummy = this.$route.query,
        this.dummy2 = this.$route.query.id
        const url = 'http://localhost:4040/info?id='+this.$route.query.id
        const test = await this.$axios.$get(url)
                                      .then(response => (this.kostData = response))
        console.log(this.kostData)
    }
}
</script>