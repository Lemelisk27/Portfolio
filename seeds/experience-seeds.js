const {Experience} = require("../models")

const experienceData = [
    {
        id:1,
        employer:"Internal Revenue Service",
        job_title:"Contact Representative",
        start_date:"2009-11-01",
        end_date:"2018-10-01",
        ResumeId:1
    },
    {
        id:2,
        employer:"Wilson Logistics",
        job_title:"Truck Driver",
        start_date:"2018-10-01",
        end_date:"2021-04-01",
        ResumeId:1
    }
]

const seedExperiences = () => Experience.bulkCreate(experienceData)

module.exports = seedExperiences