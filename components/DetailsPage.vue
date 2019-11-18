<template>
    <v-container>
        <h1 v-text="kostData.nama"></h1>
            <v-img :src= "kostData.gambar" width= "400px" ></v-img>
            <v-spacer></v-spacer>
            <v-card
                class="mx-auto ma-3 pa-3"
            >
                <v-card-title
                    class= "headline"
                    v-text= "kostData.alamat"
                ></v-card-title>   
                             
            </v-card>

            <v-simple-table v-slot:default>
                <thead>
                    <tr>
                        <th class="text-left">  </th>
                        <th class="text-left">Fasilitas Kost:</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for= "(item,i) in kostData.fasilitas" :key= "i">
                        <td>{{ i }}</td>
                        <td>{{ item }}</td>
                    </tr>
                </tbody>
            </v-simple-table>
            
        
    </v-container>
</template>

<script>
import axios from '@nuxtjs/axios'

export default {
    name: 'DetailsPage',
    data() {
        return {
            kostData: []
        }
    },
    async mounted() {
        const url = 'http://localhost:4040/info?id='+this.$route.query.id
        const test = await this.$axios.$get(url)
                                      .then(response => (this.kostData = response))
        console.log(this.kostData)
    }
}
</script>