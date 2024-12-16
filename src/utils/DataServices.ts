import { ICalendarDay, ILogin, IRegister } from "./Interfaces";

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
    // console.log(data);
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

export const GetCalendarDays = async (userId: number ) => {
    const res = await fetch(url + `Calendar/CalendarByUserId/${userId}`);
    const data: ICalendarDay[] = await res.json();
    return data;
}

export const CreateCalendarDay = async (newCalanderDay: ICalendarDay) => {
    const res = await fetch(url + 'Calendar/AddDay', {
        method: 'POST',
        headers : {
            "Content-Type": "application/json"
       },
       body: JSON.stringify(newCalanderDay)
    })
    const data = await res.json();
    return data
}
export const UpdateDay = async (newCalanderDay: ICalendarDay) => {
    const res = await fetch(url + 'Calendar/UpdateDay', {
        method: 'POST',
        headers : {
            "Content-Type": "application/json"
       },
       body: JSON.stringify(newCalanderDay)
    })
    const data = await res.json();
    return data
}