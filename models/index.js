const User = require("./User")
const Image = require("./Image")
const Project = require("./Project")

User.hasMany(Image, {
    onDelete: "CASCADE"
})

Image.belongsTo(User)

User.hasMany(Project,{
    onDelete: "CASCADE"
})

Project.belongsTo(User)

module.exports={
    User,
    Image,
    Project
}