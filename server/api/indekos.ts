import Axios from "axios";

const router = require('express').Router();

interface RequestBody {
    //Todo Request Body attributes
}

router.get("/info", async (req, res) => {
    //const kostList = await Axios.get('https://indekos.api.indekos.xyz/info');
    const response = await Axios.get('http://localhost:4040/info');
    const kostList = response.data;
    res.send(kostList);
})

router.post("/info", async (req,res) => {
    const kostData = req.body as RequestBody;
    var infoKost;
    //todo post request body

    
})

router.put("/info/:id", async (req, res)=>{
    //todo put request with id Kost

})

router.delete("/info/:id", async (req,res)=>{
    //todo delete request with id
})

export default router