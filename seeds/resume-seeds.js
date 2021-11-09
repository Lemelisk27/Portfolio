const {Resume} = require("../models")

const resumeData = [
    {
        UserId: 1,
        title:"Web Development"
    }
]

const seedResume = () => Resume.bulkCreate(resumeData)

module.exports = seedResume