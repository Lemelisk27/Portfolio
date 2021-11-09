const {Project} = require("../models")

const projectData = [
    {
        title:"Regional Holiday Calendar",
        description:"This site was created to show what the status of COVID-19 is in other countries. The site shows the national holidays and COVID stats for a selected country.",
        img: "https://res.cloudinary.com/coder-mingle/image/upload/v1636339745/portfolio/avc75k72nwow2qkq54zo.png",
        github_url: "https://github.com/Lemelisk27/country-holiday",
        site_url: "https://lemelisk27.github.io/country-holiday/",
        primary: false,
        UserId: 1
    },
    {
        title:"Weather Dashboard",
        description:"A site that will show the current and 5-day forecast for a selected city.",
        img: "https://res.cloudinary.com/coder-mingle/image/upload/v1636339743/portfolio/hpr61takcpt72dcsjsop.png",
        github_url: "https://github.com/Lemelisk27/weather-dashboard",
        site_url: "https://lemelisk27.github.io/weather-dashboard/",
        primary: false,
        UserId: 1
    },
    {
        title:"Tech Blog",
        description:"A CMS-style blog where developers can publish their blog posts and comment on other developers’ posts as well. This app follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.",
        img: "https://res.cloudinary.com/coder-mingle/image/upload/v1636442009/portfolio/qrjbjuxsur4j2drxavt2.png",
        github_url: "https://github.com/Lemelisk27/tech-blog",
        site_url: "https://vast-fjord-09411.herokuapp.com/",
        primary: false,
        UserId: 1
    },
    {
        title:"Coder Mingle",
        description:"A dating website for people who code.",
        img: "https://res.cloudinary.com/coder-mingle/image/upload/v1636441775/portfolio/szo9opaqb7uewwejdn1y.png",
        github_url: "https://github.com/Project2-Team-5/Coder-Mingle",
        site_url: "https://coder-mingle.herokuapp.com/",
        primary: true,
        UserId: 1
    }
]

const seedProjects = () => Project.bulkCreate(projectData)

module.exports = seedProjects