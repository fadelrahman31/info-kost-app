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
                        <v-btn
                            class="ma-6"
                            dark
                            color="blue-grey darken-1"
                            target="_blank"
                            @click="goToGMaps"
                        >show in google maps!</v-btn>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col
                        cols="12"
                        md="6"
                    >
                        <h1 class="pa-3">{{ kostData.nama }}</h1>
                        <div class="headline pa-3" href="mapsUrl">{{ kostData.alamat }}</div>
                        <div class="pa-3">{{ kostData.harga }}</div>
                        <div class="pa-3 font-italic">Provided by : {{ kostData.id_pemilik }}</div>
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
import Vue from 'vue'


export default {
    name: 'DetailsPage',
    data() {
        return {
            kostData: [],
            mapsUrl: ""
        }
    },
    methods:{
        goToGMaps(){
            window.open(this.mapsUrl)
        }
    },
    async mounted() {
        const url = '/api/indekos/info/'+this.$route.query.id
        const test = await this.$axios.$get(url)
        this.kostData = test
        const urlMaps = '/api/placedetails/place?alamat='+this.kostData.alamat
        //const urlMaps = 'https://placedetails.api.indekos.xyz/url?key=AIzaSyC7VZFbamp-hvfH-_Qlke0RaarlHMYO1tM&query='+this.kostData.alamat
        const queryMap = await this.$axios.$get(urlMaps)
                                          .then(response => (
                                              this.mapsUrl = response.data
                                            ))
    }
}
</script>
