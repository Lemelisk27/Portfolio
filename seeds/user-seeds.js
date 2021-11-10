const {User} = require("../models")

const userData = [
    {
        first_name: "Zach",
        last_name: "Smith",
        username: "Lemelisk27",
        email: "Lemelisk27@gmail.com",
        password: "password",
        profile_pic: "https://res.cloudinary.com/coder-mingle/image/upload/v1636331906/portfolio/me_rx9pyi.jpg",
        bio: "I am in the process of obtaining a Web Development Certificate from the University of Washington. My years as a long distance truck driving have given me the ability to work independently, with minimal supervision, while still completing goals and deadlines. When I worked for the IRS I gave me the ability to work in a diverse environment with people from all walks of life.",
        phone: "425-698-5340",
        linkedin: "Lemelisk27",
        github: "Lemelisk27",
        portfolio: "https://lemelisk27.herokuapp.com/",
        street: "23403 SE 262nd ST",
        city: "Maple Valley",
        state: "WA",
        zip: 98038
    }
]

const seedUsers = () => User.bulkCreate(userData,{individualHooks:true})

module.exports = seedUsers