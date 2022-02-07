
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

export const endSession = next =>{
    if(typeof window !== "undefined"){
        localStorage.removeItem("data")
        localStorage.removeItem("days")
        next()
    }
    return fetch("http://localhost:8000/api/logout",{
        method:"GET"
    }).then(response =>{
        return response.json()
    }).catch(error =>{
        console.log(error)
    });
}

export const getDays = () =>{
    if(localStorage.getItem("days")){
        return localStorage.getItem("days")
    }
}