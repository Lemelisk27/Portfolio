const {Degree} = require("../models")

const degreeData = [
    {
        degree:"Associate of Arts - AA, General Studies",
        EducationId:1
    }
]

const seedDegree = () => Degree.bulkCreate(degreeData)

module.exports = seedDegree