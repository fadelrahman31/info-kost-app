<template>
    <v-container>
        <v-layout justify-center align-center column>
            <v-container fluid>
                <v-row
                    justify= "space-between"
                >
                    <v-col
                        cols="12"
                        md="5"
                        class="flex-grow-1 flex-shrink-0"
                    >
                        <v-card
                            class="mx-auto"  
                        >
                            <v-img
                                class="white--text align-end"
                                height="300px"
                                :src= "kostData.gambar"
                            >
                            </v-img>

                            <v-card-actions>
                                <v-btn icon>
                                    <v-icon>mdi-heart</v-icon>
                                </v-btn>
                                <v-btn icon>
                                    <v-icon>mdi-share-variant</v-icon>
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col
                        cols="12"
                        md="6"
                    >
                        <h1 class="pa-3">{{ kostData.nama }}</h1>
                        <div class="headline pa-3">{{ kostData.alamat }}</div>
                        <div class="pa-3">{{ kostData.harga }}</div>
                        
                        <v-card
                            class="flex-grow-1 flex-shrink-0 ma-3"
                        >
                            <v-simple-table v-slot:default>
                                <thead>
                                    <tr>
                                        <th class="text-center">Fasilitas Kost:</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for= "(item,i) in kostData.fasilitas" :key="i">
                                        <td>{{ item }}</td>
                                    </tr>
                                </tbody>
                            </v-simple-table>
                        </v-card>

                    </v-col>

                </v-row>
            </v-container>
        </v-layout>
            
        
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