const submitBtn = document.querySelector("#submitBtn")
const imgUrl = document.querySelector("#userImg").src

submitBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    const project = document.querySelector("#project").value
    const userObj = {
        img:imgUrl,
        title:project
    }
    fetch("/api/projects/projectimg",{
        method:"PUT",
        body:JSON.stringify(userObj),
        headers: {
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
            location.href = "/api/viewimages"
        }
        else {
            console.log("An Error Occured")
        }
    })
})