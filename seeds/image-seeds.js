const {Image} = require("../models")

const imageData = [
    {
        UserId: 1,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1636331906/portfolio/me_rx9pyi.jpg"
    },
    {
        UserId: 1,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1636339745/portfolio/avc75k72nwow2qkq54zo.png"
    },
    {
        UserId: 1,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1636442009/portfolio/qrjbjuxsur4j2drxavt2.png"
    },
    {
        UserId: 1,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1636339743/portfolio/hpr61takcpt72dcsjsop.png"
    },
    {
        UserId: 1,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1636441775/portfolio/szo9opaqb7uewwejdn1y.png"
    }
]

const seedImages = () => Image.bulkCreate(imageData)

module.exports = seedImages