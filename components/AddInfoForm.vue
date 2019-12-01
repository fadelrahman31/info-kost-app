<template>
    <v-container>
        <v-layout justify-center align-center>
            <v-container fluid>
                <h1>Tambah Informasi Kost Baru Anda!</h1>
                <p>Isi seluruh form dibawah ini untuk menambahkan informasi kost baru</p>
                <v-row
                    justify="space-between"
                >
                    <v-spacer></v-spacer>
                    <v-col
                        cols="12"
                        md="5"
                    >
                        <v-card
                            class="mx-auto"
                            raised
                        >
                            <v-img
                                class="white--text align-end"
                                height="300px"
                                src= "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQNEr8GH7KkAX7wPaoio7ft-eBfjSE12JvQVbCsKmUxRmC4MEJ_"
                            >
                            </v-img>
                            <v-card-title class="font-italic">
                                Tambahkan gambar dari Kost yang akan anda sewakan!
                            </v-card-title>
                        </v-card>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col
                        cols="12"
                        md="6"
                    >
                        <v-card
                            class="ma-3 pa-5"
                            raised
                            tile
                        >
                            <v-form
                                ref= "form"
                                v-model= "valid"
                            >
                                <h3>Masukkan nama yang sesuai untuk Kost anda!</h3>
                                <v-text-field
                                    v-model= "nama"
                                    :counter= "100"
                                    :rules= "rulesNama"
                                    label= "Nama Kost"
                                    required
                                ></v-text-field>
                                <h3>Masukkan alamat Kost anda!</h3>
                                <v-text-field
                                    v-model= "alamat"
                                    :counter= "200"
                                    :rules= "rulesAlamat"
                                    label= "Alamat Kost"
                                    required
                                ></v-text-field>
                                <h3>Masukkan harga sewa Kost anda (per bulan)!</h3>
                                <p>Contoh: 'IDR 2.500.000'</p>
                                <v-text-field
                                    v-model= "harga"
                                    :counter= "50"
                                    :rules= "rulesHarga"
                                    label= "Harga Kost"
                                    required
                                ></v-text-field>
                                <h3>Tambahkan list fasilitas Kost anda!</h3>
                                <!--
                                <p>Contoh : ['Kamar Mandi', 'Parkir Dalam']</p>
                                <v-text-field
                                    v-model= "fasilitas"
                                    :rules= "rulesFasilitas"
                                    label= "Fasilitas Kost"
                                    required
                                ></v-text-field>
                                -->
                                <v-container fluid>
                                <!--    <p>{{ fasilitas }}</p> -->
                                    <v-switch v-model= "fasilitas0" label='Ruang Tamu' value='Ruang Tamu'></v-switch>
                                    <v-switch v-model= "fasilitas0" label="Kamar Mandi" value='Kamar Mandi'></v-switch>
                                    <v-switch v-model= "fasilitas0" label="Wifi" value='Wifi'></v-switch>
                                    <v-switch v-model= "fasilitas0" label="Parkir Motor" value='Parkir Motor'></v-switch>
                                    <v-switch v-model= "fasilitas0" label="Security Or Cctv" value='Security Or Cctv'></v-switch>
                                </v-container>
                                <!--<v-btn @click="replaceStr" class="ma-3">test replace " "</v-btn>-->
                                <h3>Masukkan link dari gambar Kost anda!</h3>
                                <p>Contoh : https://freepics.reg/img01.png</p>
                                <v-text-field
                                    v-model= "gambar"
                                    :rules= "rulesGambar"
                                    label= "Link Gambar Kost"
                                    required
                                ></v-text-field>
                            </v-form>
                        </v-card>
                        <v-btn
                            color="success"
                            class="ma-3"
                            @click="submitForm"
                        >save and submit</v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-layout>
    </v-container>
</template>

<script>
import axios from '@nuxtjs/axios'

export default {
    name: 'AddInfoForm',
    data: () => ({
        valid: true,
        nama: '',
        rulesNama: [
            v => !!v || 'Nama is required',
            v => (v && v.length <= 200) || 'Nama must be less than 200 characters'
        ],
        alamat: '',
        rulesAlamat: [
            v => !!v || 'Alamat is required',
            v => (v && v.length <= 100) || 'Alamat must be less than 100 characters'
        ],
        harga: '',
        rulesHarga: [
            v => !!v || 'Harga is required'
        ],
        fasilitas0: [],
        fasilitas: [],
        rulesFasilitas: [
            v => !!v || 'Fasilitas is required'
        ],
        gambar: '',
        rulesGambar: [
            v => !!v || 'Gambar is required'
        ]
    }),
    methods: {
        replaceStr (){
            let a = this.fasilitas0
            let b = JSON.stringify(a)
            b = b.replace(/"/g,"'")
            this.fasilitas = b
        },
        generateID (len, arr){
            var ans = ''
            for (var i = len; i>0; i-- ){
                ans +=
                    arr[Math.floor(Math.random()* arr.length)]
            }
            return ans
        },
        submitForm () {
            //this.$axios.post('',)
            this.replaceStr()
            let idKost = this.generateID(8,'12345abcdefxzpqi')
            var postQuery = {
                id              : idKost,
                id_pemilik      : "",
                nama            : this.nama,
                alamat          : this.alamat,
                fasilitas       : this.fasilitas,
                harga           : this.harga,
                gambar          : this.gambar
            }
            console.log(postQuery)
            this.$axios.post('http://localhost:3000/api/indekos/info',postQuery)
                       .then((response)=>{})
                       .catch((e)=>{
                           console.error(e)
                       })
            this.$router.push({
                path: '/'
            })
        }
    }
}
</script>
