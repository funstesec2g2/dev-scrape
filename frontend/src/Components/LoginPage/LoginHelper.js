import {jwtDecode as jwt_decode} from "jwt-decode";

export const setCookie = (name, value, email, days) => {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + days);

  const storedValue = JSON.stringify({ accessToken: value, email: email });
  console.log(email);
  console.log(storedValue);

  localStorage.setItem(name, storedValue);
};

export const getCookie = (name) => {
  const storedValue = localStorage.getItem(name);

  if (storedValue) {
    const parsedValue = JSON.parse(storedValue);
    return parsedValue.accessToken; // Assuming you want to retrieve the 'accessToken' property
  }

  return null;
};

  export const deleteCookie = (name) => { 
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    localStorage.removeItem(name);
  }


  export const getUserEmail = () =>{

    const token = getCookie('user');
    if (token){
        const payload = jwt_decode(token);
        console.log(payload, 'the payload')
        return payload?.email;
    }

    return null;
  }

  export const getUserRole = () =>{
    console.log("this is the getUserRole function")

    const token = getCookie('user');
    console.log(token, 'the token ')

    if (token){
        const payload = jwt_decode(token);
        console.log(payload, 'the payload')
        console.log(payload?.roles, 'the roles')
        return payload?.roles;
    }   

    
    return null;
  }

  export const isLogged = () => {
    const token = getCookie('user');
    if (token){
        const payload = jwt_decode(token);
        const isLoggedin = Date.now() < payload.exp * 1000;
        return isLoggedin;
    }
  }
