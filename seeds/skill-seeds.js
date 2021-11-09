const {Skill} = require("../models")

const skillData = [
    {
        ResumeId: 1,
        title: "Other Skills",
        skills: "Independent projects, independent travel, CDL Class A, truck driving"
    },
    {
        ResumeId: 1,
        title: "Interpersonal Skills",
        skills: "Problem solving, customer service, creative problem solving, critical thinking, teamwork"
    },
    {
        ResumeId: 1,
        title: "Tools & Technologies",
        skills: "HTML, Cascading Style Sheets (CSS), JavaScript, Bootstrap, Git, API testing"
    },
    {
        ResumeId: 1,
        title: "Industry Knowledge",
        skills: "Programming, web development, web design, time management"
    }
]

const seedSkill = () => Skill.bulkCreate(skillData)

module.exports = seedSkill