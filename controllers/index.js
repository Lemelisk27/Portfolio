const router = require('express').Router();
const apiRoutes = require("./api")
const frontEndRoutes = require("./frontEnd-routes")

router.use(frontEndRoutes)
router.use("/api",apiRoutes)

module.exports = router