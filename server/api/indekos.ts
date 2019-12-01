import Axios from "axios";
import authMiddleware from '../auth-middleware';

const router = require('express').Router();
router.use(authMiddleware());

interface RequestBody {
    //Todo Request Body attributes
    id: string;
    id_pemilik: string;
    nama: string;
    alamat: string;
    fasilitas: string;
    harga: string;
    gambar: string;
}

router.get("/info", async (req, res) => {
    const response = await Axios.get('https://indekos.api.indekos.xyz/info');
    const kostData = response.data;
    var kostList = kostData.map(function(x){
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
    res.send(kostList);
})

router.get("/info/:id", async (req, res)=>{
    const url = 'https://indekos.api.indekos.xyz/info?id=' + req.params.id;
    const response = await Axios.get(url);
    const resp = response.data;
    var objResp = resp.map(function(x){
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
    var result = objResp[0];
    const facils = result.fasilitas;
    let convFacils = facils.replace(/'/g,'"');
    const fixedFacils = JSON.parse(convFacils);
    result.fasilitas = fixedFacils;

    res.send(result)
})

router.get("/info/admin/:idPemilik", async (req, res)=>{
    const url = 'https://indekos.api.indekos.xyz/info?id_pemilik=' + req.params.idPemilik
    const response = await Axios.get(url);
    const kostData = response.data;
    var kostList = kostData.map(function(x){
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
    res.send(kostList);
})

router.post("/info", async (req,res) => {
    const url = "https://indekos.api.indekos.xyz/info"
    Axios.post(url, req.body)
               .then(response => {
                   res.send(response.data)
               })
               .catch(e => {
                   res.status(500)
                   res.send("Error")
               })
})

router.put("/info/:id", async (req, res)=>{
    //todo put request with id Kost

})

router.delete("/info/:id", async (req,res)=>{
    //todo delete request with id
    const url = "https://indekos.api.indekos.xyz/info?id="+req.params.id
    Axios.delete(url)
         .then(response => {
             res.send("Succeed")
         })
         .catch(e => {
            res.status(500)
            res.send("Error")
         })
})

export default router
