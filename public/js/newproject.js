const submitBtn = document.querySelector("#submitBtn")

submitBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    const userObj = {
        title:document.querySelector("#title").value,
        description:document.querySelector("#description").value,
        github_url:document.querySelector("#githubUrl").value,
        site_url:document.querySelector("#siteUrl").value
    }
    fetch("/api/projects/newproject",{
        method:"POST",
        body:JSON.stringify(userObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
            location.href = "/api/viewprojects"
        }
        else {
            console.log("An Error Occured")
        }
    })
})