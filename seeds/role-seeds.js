const {Role} = require("../models")

const roleData = [
    {
        role:"Inspected my truck daily to ensure that any mechanical problems were fixed before dirving.",
        ExperienceId:2
    },
    {
        role:"Maintained a log of working hours to be in compliance with state and federal laws.",
        ExperienceId:2
    },
    {
        role:"Secured cargo, made sure that it was balanced, and ensured that the overall weight of the truck didn'texceed federal regulations..",
        ExperienceId:2
    },
    {
        role:"Obeyed and followed local and federal traffic laws.",
        ExperienceId:2
    },
    {
        role:"Coordinated my schedule with dispatchers.",
        ExperienceId:2
    },
    {
        role:"Drove a Truck for pickup and deliveries anywhere in the lower 48 states.",
        ExperienceId:2
    },
    {
        role:"Assisted taxpayers with setting up installment agreements in order to settle their outstanding tax liability.",
        ExperienceId:1
    },
    {
        role:"Gave occasional classes on various procedures and command codes during team meetings.",
        ExperienceId:1
    },
    {
        role:"Responsible for taking notes during team meetings then typing out those notes for distribution amongthe team.",
        ExperienceId:1
    },
    {
        role:"Referred and or transfers callers to the appropriate area for resolution and closure of issues that arebeyond the training and scope of the Contact Representative's position.",
        ExperienceId:1
    },
    {
        role:"Provided procedural explanations to specific inquiries initiated by the individual.",
        ExperienceId:1
    },
    {
        role:"Conducted telephone interviews with a wide range of individuals who have varying degrees ofunderstanding of tax requirements.",
        ExperienceId:1
    }
]

const seedRoles = () => Role.bulkCreate(roleData)

module.exports = seedRoles