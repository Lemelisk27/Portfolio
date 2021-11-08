const submitBtn = document.querySelector("#submitBtn")

submitBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    const password = document.querySelector("#password").value
    const confPassword = document.querySelector("#confPassword").value
    if (password.length < 8) {
        alert("The Password Must be More then 8 Letters.")
        return
    }
    if (password != confPassword) {
        alert("The Passwords Must Match.")
        return
    }
    const userObj={
        password:password
    }
    fetch("/api/users",{
        method:"PUT",
        body:JSON.stringify(userObj),
        headers: {
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