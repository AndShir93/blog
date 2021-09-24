export type TIdDay = "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";

export type TNameDay = "Понедельник" | "Вторник" | "Среда" | "Четверг" | "Пятница" | "Суббота" | "Воскресенье";

export interface IWeekday {
    id: TIdDay,
    name: TNameDay,
}

interface IAuthor {
    name?: String,
}

export interface IData {
    authorId: number,
    createdAt: string,
    day: string,
    description: string,
    done: boolean,
    id: number,
    text: string,
    author: IAuthor,
}

export interface IFormData {
    name: string,
    email: string,
    password: string,
    repeatPassword: string,
}

export interface IValidFields {
    name?: boolean,
    email?: boolean,
    password?: boolean,
    repeatPassword?: boolean,
}

export interface IUser {
    id: number,
    name: string,
    email: string,
    createdAt: string,
    password: string,

    map(param: (user) => any): string;
}

