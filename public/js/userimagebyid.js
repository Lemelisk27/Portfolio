const profileBtn = document.querySelector("#profileBtn")
const deleteBtn = document.querySelector("#deleteBtn")
const applyBtn = document.querySelector("#applyBtn")
const imgId = document.querySelector("#userImg").dataset.index
const imgUrl = document.querySelector("#userImg").src

profileBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    const userObj = {
        profile_pic:imgUrl
    }
    fetch("/api/users",{
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
            console.log("Unable to Complete Request.")
        }
    })
})

applyBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    location.href = "/api/applytoproject/" + imgId
})

deleteBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    const userObj = {
        id:imgId
    }
    fetch("/api/images",{
        method:"DELETE",
        body:JSON.stringify(userObj),
        headers: {
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
            location.href = "/api/viewimages"
        }
        else {
            console.log("Unable to Complete Request")
        }
    })
})