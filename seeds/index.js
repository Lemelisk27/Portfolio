const seedUsers = require("./user-seeds")
const seedImages = require("./image-seeds")
const seedProjects = require("./project-seeds")
const seedResume = require("./resume-seeds")
const seedSkill = require("./skill-seeds")

const sequelize = require("../config/connection")

const seedAll = async () => {
    await sequelize.sync({force: true})
    console.log('\n-----DATABASE SYNCED-----\n')
    await seedUsers()
    console.log('\n-----USERS SYNCED-----\n')
    await seedImages()
    console.log('\n-----IMAGES SYNCED-----\n')
    await seedProjects()
    console.log('\n-----PROJECTS SYNCED-----\n')
    await seedResume()
    console.log('\n-----RESUMES SYNCED-----\n')
    await seedSkill()
    console.log('\n-----SKILLS SYNCED-----\n')
    process.exit(0)
}

seedAll()