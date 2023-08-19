let variable = 'hello' // Define strict variable

// Throws an error
// variable = 54 

let ageWithType: number;

ageWithType = 54

let testString: string;

let testStringOrNumber: string | number; // string or number

// Array
let names = ['john', 'jane', 'tom']

let testStringArray: string[]

let testNumberArray: number[]

let testStringOrNumberArray: (string | number)[]

// objects -> Have to define all properties (like an interface)
let userObj : {
    username: string,
    age:number,
    isAdmin:boolean,
    phone?:string // Is not required
}

// ANY type
let testAny: any // only when note sure about type


// Functions -> Specify return type after bracket
let sayHi = ():string => {
    return 'hi'
}

// Define param & return type, but the return type it can infer
let multiple = (num: number):number => {
    return 5
}

let newFunc = (num: number): void => {

}
// Optional param
let sum = (num1:number, num2: number, another?:number) => {
    return num1+num2
}

// Long and clunky
let func = (user: {username:string, age:number, phone?:string}) => {

}

// Type Alias

type UserType = {
    username: string;
    age:number;
    phone?:string;
}

let betterFunc = (user:UserType) => {

}

type myFunc = (a:number, b:string) => void

// Define func 
let write: myFunc = (num, str) => {

}

type UserType2 = {
    username: string;
    age:number;
    phone?:string;
    theme: 'dark' | 'light'
}

const userWithTheme : UserType2 = {
    username:'john',
    age: 43,
    theme: "dark" // ctrl + space shows only options
}

// Interfaces -> Note equals sign 
interface IUser {
    username: string
    email:string
    age: number
}

// Has everything IUser has but with more
interface IEmployee extends IUser {
    employeeId: number
}

const emp : IEmployee = {
    username: 'tom',
    email:'email@email.com',
    age: 43,
    employeeId: 1
}

const client:IUser = {
    username:'tom',
    email:'email.com',
    age:43
}

// Generics 

interface IAuthor {
    id:number,
    username:string
}

interface ICategory {
    id:number,
    title:string
}

interface IPost {
    id:number,
    title:string,
    desc:string,
    extra : IAuthor[] | ICategory[] // I want array of IAuthor or ICategory in this post
}

// Better with generics 
interface IPostBetter<T> {
    id:number,
    title:string,
    desc:string,
    extra : T[]
}

const testMe: IPostBetter<String> = {
    id:5,
    title:'hi',
    desc:'yo',
    extra : ['str', 'str2']
}

// Can't use string number or boolean here because we extend object
interface IPostEvenBetter <T extends object> {
    id:number,
    title:string,
    desc:string,
    extra : T[]
}

// {id:number, username:string}
const testMe2: IPostEvenBetter<IAuthor> = {
    id:5,
    title:'hi',
    desc:'yo',
    extra : [{id:1, username:'john'}]
}