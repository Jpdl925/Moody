import { ILogin, IRegister } from "./Interfaces";

const url = "http://localhost:5295/"

export const Login = async (loginData: ILogin) => {
    const res = await fetch(url + 'User/Login', {
        method: 'POST',
        headers : {
             "Content-Type": "application/json"
        },
        body: JSON.stringify(loginData)
    })
    const data = await res.json();
    console.log(data);
    return data;
}

export const Register = async (registerData: IRegister) => {
    const res = await fetch(url + 'User/AddUsers', {
        method: 'POST',
        headers : {
            "Content-Type": "application/json"
       },
       body: JSON.stringify(registerData)
    })

    const data = await res.json();
    console.log(data);
    return data;
}