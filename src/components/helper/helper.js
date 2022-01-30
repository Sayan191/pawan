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
        next()
    }
}