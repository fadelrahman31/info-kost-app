<template>
    <v-container>
        <div class="title">Hai, {{$store.state.name}}!</div>
        <div class="subtitle">Berikut list info kost yang anda kelola</div>
      <v-card elevation="2" class="mt-4">
        <v-simple-table style="width: 100%">
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
            <tr v-if="loading">
              <td colspan="6" align="center" class="pa-4">
                <v-progress-circular indeterminate></v-progress-circular>
              </td>
            </tr>
            <tr v-for= "(item, i) in kostList" :key="i">
              <td>{{ item.nama }}</td>
              <td>{{ item.alamat }}</td>
              <td>{{ item.harga }}</td>
              <td>{{ JSON.parse(item.fasilitas.replace(/'/g, "\"")).join(', ') }}</td>
              <td>{{ item.gambar }}</td>
              <td>
                <div>
                  <v-btn
                    color="green"
                    dark
                    outlined
                    small
                    :to="`/admin/edit/${item.id}`"
                  >
                    Edit
                  </v-btn>
                  <v-btn
                    color="red"
                    dark
                    outlined
                    small
                    @click= "deleteInfo(i)"
                  >
                    Delete
                  </v-btn>
                </div>
              </td>
            </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card>
    </v-container>
</template>

<script>
import axios from '@nuxtjs/axios'


export default {
    name: 'ListInfo',
    data() {
        return {
            kostList: null,
            user: '',
            loading: false
        };
    },
    methods: {
        async deleteInfo(i){
            const idKost = this.kostList[i].id
            const url = '/api/indekos/info/'+idKost
            await this.$axios.delete(url)
                             .then(response => {
                                 alert("Delete Berhasil")
                                this.getdata();
                             })
                             .catch(e => {
                                 alert("Delete Gagal!")
                             })
        },
        async getdata() {
          try {
            this.loading = true;
            this.user = this.$route.query.idPemilik
            const url = '/api/indekos/info/admin'
            const dummy = await this.$axios.$get(url)
            this.kostList = dummy;
            this.loading = false;
          } catch (e) {
            alert("Error");
            console.log(e);
            this.loading = false;
          }
        }
    },
    mounted() {
      this.getdata();
    },
}
</script>
