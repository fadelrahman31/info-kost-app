import axios from "axios";
import Axios from "axios";
import authMiddleware from '../auth-middleware';

const router = require('express').Router();
router.use(authMiddleware());

router.get("/place", async (req, res)=>{
    //get gmaps url from string
    const url = "https://placedetails.api.indekos.xyz/url?key=AIzaSyC7VZFbamp-hvfH-_Qlke0RaarlHMYO1tM&query="+req.query.alamat
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
