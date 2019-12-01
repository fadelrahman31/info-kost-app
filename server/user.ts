import Axios from "axios";

const router = require('express').Router();

router.get("/auth", async (req, res) => {
  const token = req.query.token;
  res.cookie('token', token);
  res.redirect("/");
})

export default router
