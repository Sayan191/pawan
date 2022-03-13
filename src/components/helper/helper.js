/*
login function works to login to planning poker page
data passed contains , userName, taemName, is Manager not.
if data gets saved in DB succesfully then it return the json response or else error
*/

export const loginIn = (data) => {
  return fetch(`${process.env.REACT_URL}/login`, {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
};

/*
it check whether the window is empty or not then
it saves the daata recieved from the login function into localstorage
*/

export const authenticate = (data, next) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("data", JSON.stringify(data));
    next();
  }
};
/*
it check if the the window is undefined or not. it returns false if window is undef
if localstorage is not undef then it check fro key value "data" and return the data in parsed form
else return false
*/

export const isAuthenticated = () => {
  if (typeof window === "undefined") {
    return false;
  }
  if (localStorage.getItem("data")) {
    return JSON.parse(localStorage.getItem("data"));
  } else {
    return false;
  }
};
/*
it check if the the window is undefined or not. it returns false if window is undef
if localstorage is not undef then it check fro key value "data" and return true
else return false
*/

export const isLoggedIn = () => {
  if (typeof window === "undefined") {
    return false;
  }
  if (localStorage.getItem("data")) {
    return true;
  } else {
    return false;
  }
};
/*
this function is to end the session
first set data in in localstorage with key name of "userData"
checks if window is undef 
then removes key value "data"
then check for keyvalue "point" and removes it
and make api call to backend server to end the session
*/

export const endSession = (data) => {
  localStorage.setItem("userData", JSON.stringify(data));
  if (typeof window !== "undefined") {
    localStorage.removeItem("data");
    if (localStorage.getItem("points")) {
      localStorage.removeItem("points");
    }
  }
  return fetch(`${process.env.REACT_URL}/logout`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
};
/*
search for key value "points" from localstorage and return it 
*/

export const getPoints = () => {
  if (localStorage.getItem("points")) {
    return localStorage.getItem("points");
  }
};
/*
search for key value "points" from localstorage and remove it from local storage
*/

export const removePoinyts = (next) => {
  if (localStorage.getItem("points")) {
    localStorage.removeItem("points");
    next();
  }
};
/*
search for key value "userData" from localstorage and return it 
*/

export const getUserData = () => {
  if (localStorage.getItem("userData")) {
    return JSON.parse(localStorage.getItem("userData"));
  }
};
