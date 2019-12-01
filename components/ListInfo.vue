<template>
    <v-container fluid fill-height>
        <h1>Hai, {{user}}!</h1>
        <h2>Berikut list info kost yang anda kelola!</h2>
        <v-layout justify-center align-center pa-5>
            <!--
            <v-card 
                class="mx-auto ma-4"
                raised
            >
                <v-card-title>Hai {{user}}</v-card-title>
                <v-card-subtitle>Berikut list info kost yang anda kelola!</v-card-subtitle>
            </v-card>
            -->
            <v-spacer></v-spacer>
            <v-container fluid>
                <v-row
                    justify="space-between"
                >
                    <v-card elevation="2" class="mt-4 ma-4">
                        <v-simple-table>
                            <template v-slot:default>
                                <thead>
                                <tr>
                                    <th class="text-left">Nama Kost</th>
                                    <th class="text-left">Alamat</th>
                                    <th class="text-left">Harga</th>
                                    <th class="text-left">Fasilitas</th>
                                    <th class="text-left">Gambar</th>
                                    <th class="text-left">Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for= "(item, i) in kostList" :key="i">
                                    <td>{{ item.nama }}</td>
                                    <td>{{ item.alamat }}</td>
                                    <td>{{ item.harga }}</td>
                                    <td>{{ item.fasilitas }}</td>
                                    <td>{{ item.gambar }}</td>
                                    <td> 
                                        <v-btn 
                                            class="ma-2" 
                                            color="green" 
                                            dark
                                        >
                                            edit
                                        </v-btn> 
                                        <v-btn 
                                            class="ma-2" 
                                            color="red" 
                                            dark
                                            @click= "deleteInfo(i)"
                                        >
                                            delete
                                        </v-btn>
                                    </td>
                                </tr>
                                </tbody>
                            </template>
                        </v-simple-table>
                    </v-card>                    
                    
                    <!--
                    <v-container fluid>
                        <v-row
                            v-for= "(item,i) in kostList"
                            :key= "i"
                            justify= "space-between"
                            style= 'flex-wrap: nowrap;'
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
                                                >EDIT INFO</v-btn>
                                                <v-btn 
                                                    text
                                                    color = "cyan darken-4"
                                                >DELETE</v-btn>
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
                    -->
                </v-row>
            </v-container>
        </v-layout>
    </v-container>
</template>

<script>
import axios from '@nuxtjs/axios'


export default {
    name: 'ListInfo',
    data() {
        return {
            kostList: null,
            user: ''
        };
    },
    methods: {
        async deleteInfo(i){
            const idKost = this.kostList[i].id
            console.log(idKost)
            const url = 'http://localhost:3000/api/indekos/info/'+idKost
            console.log(url)
            await this.$axios.delete(url)
                             .then(response => {
                                 alert("Delete Berhasil")
                             })
                             .catch(e => {
                                 alert("Delete Gagal!")
                             })
        }
    },
    async mounted() {
        this.user = this.$route.query.idPemilik
        const url = 'http://localhost:3000/api/indekos/info/admin/'+this.$route.query.idPemilik
        const dummy = await this.$axios.$get(url)
        this.kostList = dummy
        console.log(this.kostList)
    } 

}
</script>