const User = require("./User")
const Image = require("./Image")
const Project = require("./Project")
const Resume = require("./resume")
const Skill = require("./skill")
const Experience = require("./experience")
const Role = require("./role")

User.hasMany(Image, {
    onDelete: "CASCADE"
})

Image.belongsTo(User)

User.hasMany(Project,{
    onDelete: "CASCADE"
})

Project.belongsTo(User)

User.hasMany(Resume, {
    onDelete: "CASCADE"
})

Resume.belongsTo(User)

Resume.hasMany(Skill, {
    onDelete: "CASCADE"
})

Skill.belongsTo(Resume)

Resume.hasMany(Experience, {
    onDelete: "CASCADE"
})

Experience.belongsTo(Resume)

Experience.hasMany(Role, {
    onDelete: "CASCADE"
})

Role.belongsTo(Experience)

module.exports={
    User,
    Image,
    Project,
    Resume,
    Skill,
    Experience,
    Role
}