import axios from "axios";
import Axios from "axios";
import authMiddleware from '../auth-middleware';

const router = require('express').Router();
router.use(authMiddleware());

const placedetailsApiUrl = process.env.PLACEDETAILS_API_BASE_URL || "https://placedetails.api.indekos.xyz"
const mapsApiKey = process.env.MAPS_API_KEY || "AIzaSyC7VZFbamp-hvfH-_Qlke0RaarlHMYO1tM";
router.get("/place", async (req, res)=>{
    //get gmaps url from string
    const url = `${placedetailsApiUrl}/url?key=${mapsApiKey}&query=${req.query.alamat}`
    Axios.get(url)
         .then(response => {
             res.send(response.data)
         })
         .catch(e => {
             res.status(500)
             res.send("Error")
         })
})

router.get("/place", async (req, res)=>{
    //get something motherfucker
})

export default router;
