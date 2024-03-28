const { Router } = require("express");
const homecontroller = require("../controller/homeController");
const portfoliocontroller = require("../controller/portfolioController");
const skillcontroller = require("../controller/skillController");
const contactcontroller = require("../controller/contactController");


const router = Router()

router.get('/', homecontroller)
router.get('/portfolio', portfoliocontroller)
router.get('/skill', skillcontroller)
router.get('/contact', contactcontroller)

module.exports = router;