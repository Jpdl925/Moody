export interface ILogin {
    username: string,
    password: string
}

export interface IRegister {
    id: number,
    userName: string,
    password: string
}

export interface ICalendarDay{
    id: number,
    mood: string,
    comment: string,
    date: Date
    userId: number
}