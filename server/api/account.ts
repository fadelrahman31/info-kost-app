const router = require('express').Router();
router.get("/user", async (req, res)=>{
  if (!req.user) {
    res.status(401).send({error: "Unauthorized"});
    return;
  }
  res.send(req.user);
})

export default router;
