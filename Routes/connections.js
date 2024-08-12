const Alien = require("../model/schema");
const exp = require("express");
const router = exp.Router();
router.get("/", async (req, res) => {
  console.log("alien router");
//   res.send("alien router");
  try {
      const aliens=await Alien.find()
      res.json(aliens)
  } catch (error) {
      res.send("error")

  }
});
router.post("/", async (req, res) => {
  const a = new Alien({
    name: req.body.name,
    tech: req.body.tech,
    sub: req.body.sub,
  });
  console.log(a)
  try {
    const aliens = await a.save();
    res.send(aliens);
  } catch (error) {
    res.send("error");
  }
});
router.get("/:name", async (req, res) => {
    const name=req.params.name;
    try {
        const aliens=await Alien.find({name:name})
        res.send(aliens)
    } catch (error) {
        res.send("error")
  
    }
  });
module.exports = router;
router.delete("/:name", async (req, res) => {
    const name=req.params.name;
    try {
        const aliens=await Alien.deleteOne({name:name})
        res.send(aliens)
    } catch (error) {
        res.send("error")
  
    }
  });
  router.patch("/:name", async (req, res) => {
    // const name=req.params.name;
    try {
        const aliens=await Alien.findOne({name:req.params.name})
        // console.log(aliens);
        aliens.sub=req.body.sub
        // console.log(aliens)
        const a1= await aliens.save()
        res.send(aliens)
    } catch (error) {
        res.send(error)
  
    }
  });
module.exports = router;
