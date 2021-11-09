const User = require("./User")
const Image = require("./Image")
const Project = require("./Project")
const Resume = require("./resume")
const Skill = require("./skill")

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

module.exports={
    User,
    Image,
    Project,
    Resume,
    Skill
}