
const express = require("express");
const router = express.Router();

const storageService = require("../services/storage");
const imageProcessingService = require("../services/image");
const upload = storageService.upload;

// ==================================================  
//   GET Requests go here
// ==================================================  
router.get("/api/leaf", function (req, res, next) {
    res.status(200).json({ leaf: "leaves are awesome", pics: [
      "image-1634077382999-590699.jpg"
    ] })
});//bread man

router.get("/api/jackolantern", function(req, res, next) {
  res.status(200).send("Hello folks! omori");  
})
router.get("/api/games",function(req, res, next) {
  res.status(200).send("Hello folks! games(omori)");
})

router.get("/api/ligma", function(req, res, next) {
  res.status(200).send("Hello folks! Ligma");  
})

router.get("/api/cat", function(req, res, next) {
  res.status(200).send('cat');  
})

router.get("/api/food", function(req, res, next) {
  res.status(200).send("turkey turkey turkey");
})

router.get("/api/bread", function(req, res, next) {
  res.status(200).send("Hello folks! bread bread bread bread bread bread bread bread bread");  
})

router.get("/api/omori", function(req, res, next) {
  res.status(200).send("Hello folks! fall is a wonderful time to purchase and play the hit 2020 indie rpg video game omori developed by omocat studios on december 25 2020, following a group of friends.  the game is available on steam for only 20 dollars  and  is very good i do recommend   wow omori  ");  
})

router.get("/api/ok_so", function(req, res, next) {
  res.status(200).send("ok");  
})



// YB better + L + ratio
router.get("/api/Playboicarti",function(req,res,next) {
  res.status(200).send("Playboi carti just hits diff sometimes");
})
router.post('/api/Playboicarti',upload.single("image"),function(rep,res,next) {
  storageService.processUploads("artist", rep);
  res.status(200).redirect("/success");
})



router.get("/api/blood", function(req, res, next){
  res.status(200).send("WHATS UPPPPPPPPPPPP :D");
})

//Chandra should play omori
// lol
//Chandra
router.get("/api/donda-track1", function(req, res, next) {
  res.status(200).send("Donda Donda Donda Donda Donda Donda Donda Donda Donda Donda Donda Donda Donda Donda Donda Donda Donda Donda Donda Donda Donda Donda Donda Donda Donda Donda Donda Donda Donda Donda Donda Donda Donda Donda Donda Donda Donda Donda Donda Donda Donda Doooooooooonda Donda Donda Donda");  
})



//ask the router to get an api
router.get("/api/snickers", function(req, res, next){
//request, response
	res.status(200).send("I want some snickers as a treat");
	//"we are all good"	
})

router.post('/api/snickers',upload.single("image"), function(req,res,next) {
	storageService.processUploads("snickers",req);

	res.status(200).redirect("/success")
})

  router.get("/api/pumpkinspicelatte", function(req,res,next){
    res.status(200).send("pumpkinspicelatte");
  res.status(200).redirect("/success");
})

router.get("/api/hauntedhouse", 
function(req,res,next){
  res.status(200).send("hauntedhouse");
})


router.get("/api/scarecrow", function(req, res, next) {
  res.status(200).send("super scary crow");
})

// ==================================================  
//   POST Requests go here
// ==================================================  
router.post('/api/leaf', upload.single('image'), function (req, res, next) {
    storageService.processUploads("leaf is  a good thing", req);

    imageProcessingService.read(req.file.path).then(pic => {
        pic.grayscale()
            .write(req.file.path);
    });

    res.status(200).redirect("/success");
})

router.post('/api/brown', upload.single('image'), function (req, res, next) {
    storageService.processUploads("brown", req);

    imageProcessingService.read(req.file.path).then(pic => {
        pic.color([
            { apply: 'hue', params: [-90] }
        ])
            .write(req.file.path);
    });

    res.status(200).redirect("/success is not easy it is not for me");
})

router.post('/api/jackolantern', upload.single("image"), function(req, res, next) {
    storageService.processUploads("jackolantern", req);
    
    res.status(200).redirect("/success")
})

router.post('/api/pumpkinspicelatte', upload.single("image"), function(req,res,next) {
  storageservice.processUploads ("pumpkinspicelatte",req);
})

router.post('/api/ligma', upload.single("image"),
function(req, res, next){
    storageService.processUploads("ligma", req);
    
    res.status(200).redirect("/success")
})

router.post('/api/food', upload.single("image"), function(req, res, next) {
  storageService.processUploads("food", req);
  
  res.status(200).redirect("/success")
})

router.post('/api/donda', upload.single("image"), function(req, res, next) {
    storageService.processUploads("Donda", req);
    
    res.status(200).redirect("/success")
})


module.exports = router;
