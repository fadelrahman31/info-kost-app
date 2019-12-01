<template>
    <div v-if="loading" align="center" class="pa-5">
      <v-progress-circular indeterminate></v-progress-circular>
    </div>
    <v-container v-else>
      <h1>Edit info kost</h1>
      <p>Isi seluruh form dibawah ini untuk mengganti informasi kost baru</p>
      <v-row
        justify="space-between"
      >
        <v-spacer></v-spacer>
        <v-col
          cols="12"
          md="6"
        >
          <v-card
            class="mx-auto"
            raised
          >
            <v-img
              class="white--text align-end"
              height="300px"
              :src= "kostData.gambar"
            >
            </v-img>
          </v-card>
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <v-card
            class="pa-5"
            raised
            tile
          >
            <v-form
              ref= "form"
              v-model= "valid"
            >
              <h3>Masukkan nama yang sesuai untuk Kost anda!</h3>
              <v-text-field
                v-model= "kostData.nama"
                :counter= "100"
                :rules= "rulesNama"
                label= "Nama Kost"
                required
              ></v-text-field>
              <h3>Masukkan alamat Kost anda!</h3>
              <v-text-field
                v-model= "kostData.alamat"
                :counter= "200"
                :rules= "rulesAlamat"
                label= "Alamat Kost"
                required
              ></v-text-field>
              <h3>Masukkan harga sewa Kost anda (per bulan)!</h3>
              <p>Contoh: 'IDR 2.500.000'</p>
              <v-text-field
                v-model= "kostData.harga"
                :counter= "50"
                :rules= "rulesHarga"
                label= "Harga Kost"
                required
              ></v-text-field>
              <h3>Tambahkan list fasilitas Kost anda!</h3>
              <v-container fluid>
                <v-switch v-model= "kostData.fasilitas" label='Ruang Tamu' value='Ruang Tamu'></v-switch>
                <v-switch v-model= "kostData.fasilitas" label="Kamar Mandi" value='Kamar Mandi'></v-switch>
                <v-switch v-model= "kostData.fasilitas" label="Wifi" value='Wifi'></v-switch>
                <v-switch v-model= "kostData.fasilitas" label="Parkir Motor" value='Parkir Motor'></v-switch>
                <v-switch v-model= "kostData.fasilitas" label="Security Or Cctv" value='Security Or Cctv'></v-switch>
              </v-container>
              <h3>Masukkan link dari gambar Kost anda!</h3>
              <p>Contoh : https://freepics.reg/img01.png</p>
              <v-text-field
                v-model= "kostData.gambar"
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
            :loading="submitting"
          >save and submit</v-btn>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
import axios from '@nuxtjs/axios'

export default {
    name: 'AddInfoForm',
    props: ['id'],
    data: () => ({
        valid: true,
        loading: false,
        submitting: false,
        kostData: {},
        rulesNama: [
            v => !!v || 'Nama is required',
            v => (v && v.length <= 200) || 'Nama must be less than 200 characters'
        ],
        rulesAlamat: [
            v => !!v || 'Alamat is required',
            v => (v && v.length <= 100) || 'Alamat must be less than 100 characters'
        ],
        rulesHarga: [
            v => !!v || 'Harga is required'
        ],
        rulesFasilitas: [
            v => !!v || 'Fasilitas is required'
        ],
        rulesGambar: [
            v => !!v || 'Gambar is required'
        ]
    }),
    methods: {
        getData() {
          this.loading = true;
          this.$axios.get(`/api/indekos/info/${this.id}`)
            .then(response => {
              this.kostData = response.data;
            })
            .catch((e) => {
              alert("Error");
              console.log(e);
            })
            .finally(() => {
              this.loading = false;
            })
        },
        submitForm () {
            this.submitting = true;
            const postQuery = { ...this.kostData, fasilitas: JSON.stringify(this.kostData.fasilitas).replace(/"/g, "'") };
            this.$axios.put(`/api/indekos/info/${this.id}`,postQuery)
              .then((response)=>{

              })
              .catch((e)=>{
                console.error(e)
              })
              .finally(() => {
                this.submitting = false;
              })
        }
    },
  mounted() {
      this.getData();
  }
}
</script>
