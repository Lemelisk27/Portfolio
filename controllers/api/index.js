const router = require('express').Router();
const frontEndApi = require("./frontEndApi-routes")
const userRoutes = require("./user-routes")
const imageRoutes = require("./image-routes")
const projectRoutes = require("./project-routes")
const resumeRoutes = require("./resume-routes")

router.use(frontEndApi)
router.use("/users",userRoutes)
router.use("/images",imageRoutes)
router.use("/projects",projectRoutes)
router.use("/resumes",resumeRoutes)

module.exports = router