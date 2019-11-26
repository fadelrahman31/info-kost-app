<template>
    <v-container fluid fill-height >
        <v-layout justify-center align-center column pa-5>
                <v-card
                    class="mx-auto"  
                >
                    <v-img
                        class="white--text align-end"
                        height="300px"
                        src="https://drive.google.com/uc?id=1boYl8iExWQgNat6RfJ56X_2vhzZd7UX9&export=download"
                    >
                        <v-card-title>Lagi butuh info kost di sekitar area Jakarta? Well, kamu datang ke tempat yang tepat!</v-card-title>
                    </v-img>

                    <v-card-actions>
                    </v-card-actions>
                </v-card>
        <v-container fluid>
            <v-row
                justify="space-between"
            >
                <v-col
                    cols= "12"
                    md= "5"
                    class="flex-grow-1 flex-shrink-0"
                >
                    <h1>Selamat Datang! </h1>
                    <p>Temukan informasi kost yang paling cocok untuk Anda di area <b>Jakarta</b> ini!</p>
                    <v-spacer></v-spacer>
                    <v-card
                        class="mx-auto ma-3"   
                    >
                        <v-img
                            class="white--text align-end"
                            height="200px"
                            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                        >
                            <v-card-title>Ingin mengiklankan kos Anda?</v-card-title>
                        </v-img>

                        <v-card-subtitle class="pb-0">Copyright 2019</v-card-subtitle>

                        <v-card-text class="text--primary">
                            <div>Login ke akun <b>InfoKostMu</b> Sekarang!</div>
                            <div>Tambahkan, Sesuaikan, dan Update Informasi Kost yang kamu iklankan!</div>
                        </v-card-text>

                        <v-card-actions>
                            <v-btn
                                color="orange"
                                text
                            >
                                login
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                    <v-spacer></v-spacer>
                    <v-card
                        class="mx-auto ma-3"   
                    >
                        <v-img
                            class="white--text align-end"
                            height="200px"
                            src="https://images.wallpaperscraft.com/image/tower_skyscraper_city_151445_1280x720.jpg"
                        >
                            <v-card-title>IndeKos.xyz : Tips 101</v-card-title>
                        </v-img>

                        <v-card-subtitle class="pb-0"><i>via Admin :)</i></v-card-subtitle>

                        <v-card-text class="text--primary">
                            <div>Kamu bisa langsung tahu lokasi Kost dengan <b>klik tombol</b> yang ada di halaman Details!</div>
                        </v-card-text>

                        <v-card-actions>
                        </v-card-actions>
                    </v-card>
                    
                </v-col>
                <v-spacer></v-spacer>
                <v-col
                    cols="12"
                    md="6"
                >
                    <v-container fluid>
                        <v-row 
                            v-for= "(item,i) in kostList"
                            :key= "i"
                            justify="space-between" 
                            style= "flex-wrap: nowrap;"
                        >   
                            <v-col
                                cols= "11"
                                class= "flex-grow-1 flex-shrink-0"
                            >
                                <v-card
                                    class="mx-auto ma-1"
                                    max-width="1000"
                                    max-height="600"
                                    raised
                                    tile                
                                >
                                    <div class="d-flex flex-no-wrap justify-space-between">
                                        <div>
                                            <v-card-title
                                                class= "headline font-weight-medium"
                                                v-text= "item.nama"
                                            ></v-card-title>

                                            <v-card-subtitle 
                                                v-text= "item.harga"
                                                class= "font-weight-medium"
                                            ></v-card-subtitle>

                                            <v-card-actions>
                                                <v-btn 
                                                    text
                                                    color = "cyan darken-4"
                                                    @click= "goToDetails(i)"
                                                >Details</v-btn>
                                            </v-card-actions>
                                        </div>

                                        <v-avatar
                                            class= "ma-3"    
                                            size= "125"
                                            tile
                                        >
                                            <v-img :src= "item.gambar"></v-img>
                                        </v-avatar>
                                    </div>
                                </v-card>
                            </v-col>    
                        </v-row>
                    </v-container>
                
                </v-col>
            </v-row>
        </v-container>        
        </v-layout>    
    </v-container>
</template>


<script>
import axios from '@nuxtjs/axios'
import details from '@/pages/details'

export default {
    name: 'LandingPage',
    data() {
        return {
            kostList: null
        };       
    },
    methods: {
        dummy() {
            const tester = this.$route.query
            const tester2 = this.$route.path
            console.log(tester)
            console.log(tester2)
        },
        goToDetails(i) {
            this.$router.push({
                path: 'details',
                query: {
                    id: this.kostList[i].id
                }
            })
        }
    },
    async mounted() {
        //const dummy = await this.$axios.$get('https://indekos.api.indekos.xyz/info')
        const dummy = await this.$axios.$get('http://localhost:4040/info')
        var objDummy = dummy.map(function(x){
            return {
                id          : x[0],
                id_pemilik  : x[1],
                nama        : x[2],
                alamat      : x[3],
                fasilitas   : x[4],
                harga       : x[5],
                gambar      : x[6]
            }
        })
        this.kostList = objDummy
        console.log(this.kostList)
    }
}
</script>