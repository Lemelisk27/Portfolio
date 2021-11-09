let firstName 
let lastName
let street
let city
let state
let zip
let phone
let email
let github
let linkedin
let bio
let portfolio
let submitBtn = document.querySelector("#submitBtn")

document.getElementById("firstName").addEventListener("change",()=>{
    firstName = document.getElementById("firstName").value
})
document.getElementById("lastName").addEventListener("change",()=>{
    lastName = document.getElementById("lastName").value
})
document.getElementById("street").addEventListener("change",()=>{
    street = document.getElementById("street").value
})
document.getElementById("city").addEventListener("change",()=>{
    city = document.getElementById("city").value
})
document.getElementById("state").addEventListener("change",()=>{
    state = document.getElementById("state").value
})
document.getElementById("zip").addEventListener("change",()=>{
    zip = document.getElementById("zip").value
})
document.getElementById("phone").addEventListener("change",()=>{
    phone = document.getElementById("phone").value
})
document.getElementById("email").addEventListener("change",()=>{
    email = document.getElementById("email").value
})
document.getElementById("github").addEventListener("change",()=>{
    github = document.getElementById("github").value
})
document.getElementById("linkedin").addEventListener("change",()=>{
    linkedin = document.getElementById("linkedin").value
})
document.getElementById("bio").addEventListener("change",()=>{
    bio = document.getElementById("bio").value
})
document.getElementById("portfolio").addEventListener("change",()=>{
    portfolio = document.getElementById("portfolio").value
})

submitBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    const userObj={
        first_name:firstName,
        last_name:lastName,
        street:street,
        city:city,
        state:state,
        zip:zip,
        phone:phone,
        email:email,
        github:github,
        linkedin:linkedin,
        bio:bio,
        portfolio:portfolio
    }
    fetch("/api/users",{
        method:"PUT",
        body:JSON.stringify(userObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
            location.href = "/api/profile"
        }
        else {
            console.log("An Error Occured")
        }
    })
})