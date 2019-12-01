import Axios from "axios";
import authMiddleware from '../auth-middleware';

const router = require('express').Router();
router.use(authMiddleware());

const indekosApiUrl = process.env.INDEKOS_API_BASE_URL || "https://indekos.api.indekos.xyz"

interface RequestBody {
    id: string;
    nama: string;
    alamat: string;
    fasilitas: string;
    harga: string;
    gambar: string;
}

router.get("/info", async (req, res) => {
    const response = await Axios.get(`${indekosApiUrl}/info`);
    const kostData = response.data || [];
    const kostList = kostData.map(function(x){
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

router.get("/info/admin", async (req, res)=>{
  const url = `${indekosApiUrl}/info?id_pemilik=` + req.user.sub
  const response = await Axios.get(url);
  const kostData = response.data || [];
  const kostList = kostData.map(function(x){
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
    const url = `${indekosApiUrl}/info?id=${req.params.id}`;
    const response = await Axios.get(url);
    const resp = response.data || [];
    const objResp = resp.map(function(x){
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
    const result = objResp[0];
    const facils = result.fasilitas;
    let convFacils = facils.replace(/'/g,'"');
    const fixedFacils = JSON.parse(convFacils);
    result.fasilitas = fixedFacils;

    res.send(result)
})

router.post("/info", async (req,res) => {
    const url = `${indekosApiUrl}/info`
    let requestBody = {...req.body};
    requestBody.id_pemilik = `${req.user.sub}`;

    Axios.post(url, requestBody)
               .then(response => {
                   res.send(response.data)
               })
               .catch(e => {
                   res.status(500)
                   res.send("Error")
               })
})

router.put("/info/:id", async (req, res)=>{
  const url = `${indekosApiUrl}/info?id=${req.params.id}`;
  let requestBody = {...req.body};
  requestBody.id_pemilik = `${req.user.sub}`;
  requestBody.id = req.params.id;

  Axios.put(url, requestBody)
    .then(response => {
      res.send(response.data)
    })
    .catch(e => {
      console.log(e);
      res.status(500)
      res.send("Error")
    })
})

router.delete("/info/:id", async (req,res)=>{
    const url = `${indekosApiUrl}/info?id=${req.params.id}`
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
