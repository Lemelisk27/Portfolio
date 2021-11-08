const updateBtn = document.querySelector("#updateBtn")
const deleteBtn = document.querySelector("#deleteBtn")
const projectId = document.querySelector("#updateBtn").dataset.index

updateBtn.addEventListener("click", (e)=>{
    e.preventDefault()
    const userObj = {
        id:projectId,
        title:document.querySelector("#title").value,
        description:document.querySelector("#description").value,
        github_url:document.querySelector("#githubUrl").value,
        site_url:document.querySelector("#siteUrl").value
    }
    fetch("/api/projects/updateproject",{
        method:"PUT",
        body:JSON.stringify(userObj),
        headers: {
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

deleteBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    const userObj = {
        id:projectId
    }
    fetch("/api/projects/deleteproject",{
        method:"DELETE",
        body:JSON.stringify(userObj),
        headers: {
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