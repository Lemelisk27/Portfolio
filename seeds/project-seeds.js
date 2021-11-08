const {Project} = require("../models")

const projectData = [
    {
        title:"Regional Holiday Calendar",
        description:"This site was created to show what the status of COVID-19 is in other countries. The site shows the national holidays and COVID stats for a selected country.",
        img: "https://res.cloudinary.com/coder-mingle/image/upload/v1636339745/portfolio/avc75k72nwow2qkq54zo.png",
        github_url: "https://github.com/Lemelisk27/country-holiday",
        site_url: "https://lemelisk27.github.io/country-holiday/",
        primary: true,
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
        title:"Work Day Scheduler",
        description:"A Simple Calender App for Scheduling your Work day.",
        img: "https://res.cloudinary.com/coder-mingle/image/upload/v1636339742/portfolio/sd6uyplosvprp9fb0iwr.png",
        github_url: "https://github.com/Lemelisk27/work-day-scheduler",
        site_url: "https://lemelisk27.github.io/work-day-scheduler/",
        primary: false,
        UserId: 1
    }
]

const seedProjects = () => Project.bulkCreate(projectData)

module.exports = seedProjects