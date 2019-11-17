<template>
    <v-container fluid fill-height>
        <v-row dense
            justify="space-between"
        >
            <v-col  
                cols= "12"
                md= "9"
            >
                <v-row 
                    v-for= "(item,i) in kostList"
                    :key= "i"
                    justify="space-between" 

                >   
                    <v-card
                        class="mx-auto ma-3"
                        max-width="1000"
                        color="teal lighten-4"
                        raised
                        tile                
                    >
                        <div class="d-flex flex-no-wrap justify-space-between">
                            <div>
                                <v-card-title
                                    class= "headline"
                                    v-text= "item.nama"
                                ></v-card-title>

                                <v-card-subtitle v-text= "item.harga"></v-card-subtitle>

                                <v-card-actions>
                                    <v-btn text>Details</v-btn>
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
                </v-row>
            </v-col>
            <v-col  
                cols= "12"
                md= "3"
            >
            
            </v-col>
        </v-row>
    </v-container>
</template>


<script>
import axios from '@nuxtjs/axios'

export default {
    name: 'LandingPage',
    data() {
        return {
            kostList: null
        };       
    },
    methods: {
        async dummy() {
            const tester = await this.$axios.$get('http://localhost:4040/info')
            console.log(tester)
        }
    },
    async mounted() {
        await this.$axios.$get('http://localhost:4040/info')
             .then(response => (this.kostList = response))
    }
}
</script>