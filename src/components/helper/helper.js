
export const loginIn = data =>{
    return fetch('http://localhost:8000/api/login',{
        method:"POST",
        headers:{
            Accept : "*/*",
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    }).then(response =>{
        console.log(response)
        return response.json()
    }).catch(error =>{
        console.log(error)
    })
}


export const authenticate = (data, next) =>{
    if(typeof window !== "undefined"){
        localStorage.setItem("data",JSON.stringify(data))
        next()
    }
}

export const isAuthenticated = () =>{
    if (typeof window === "undefined"){
        return false
    }
    if (localStorage.getItem("data")){
        return (JSON.parse(localStorage.getItem("data")));
    }
    else{
        return false
    }
}

export const isLoggedIn = () =>{
    if (typeof window === "undefined"){
        return false
    }
    if (localStorage.getItem("data")){
        return true
    }
    else{
        return false
    }
}

export const endSession = (data) =>{
    
    localStorage.setItem("userData",JSON.stringify(data))
    if(typeof window !== "undefined"){
        localStorage.removeItem("data")
        if(localStorage.getItem("points")){
            localStorage.removeItem("points")
        }
    }
    return fetch("http://localhost:8000/api/logout",{
        method:"GET"
    }).then(response =>{
        return response.json()
    }).catch(error =>{
        console.log(error)
    });
}

export const getPoints = () =>{
    if(localStorage.getItem("points")){
        return localStorage.getItem("points")
    }
}

export const removePoinyts = next =>{
    if(localStorage.getItem("points")){
        localStorage.removeItem("points")
        next()
    }
}

export const getUserData = () =>{
    if(localStorage.getItem("userData")){
        return JSON.parse(localStorage.getItem("userData"))
    }
}