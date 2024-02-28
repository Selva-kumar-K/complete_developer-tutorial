import { calculate } from "./calculate";

const data = calculate(1,"2")
console.log(data)

// const weather = "sunny"

// const getWeather = (weather : string) : string => {
//     return weather
// }

// console.log(getWeather(weather))

let stringType : string = "Selva"
let numberType : number = 234
let booleanType : boolean = true
let nullType : null = null
let undefinedType : undefined = undefined

console.log(nullType, undefinedType)
let strArray : string[] = []

strArray.push("Selva")
strArray.push("Arun")
strArray.push("Nandha")
console.log(strArray)

let genericArray: [] = [] //Never data type assigned to genericArray

let weatherData : {
    weather : string,
    temperature : number,
    location : string
} = {
    weather : "Sunny",
    temperature: 25.33,
    location : "Coimbatore"
}

console.log(weatherData)

// let validTuple : [string, number] = ["bar", 1]
// let invalidTuple : [string, number] = [1, "bar"]

const test = (msg: string) : void =>{
    console.log(msg)
}

test("data")

interface WeatherType {
    weather: string,
    zipcode: number,
    location: string
}

const getWeather = (props: WeatherType) =>{
    console.log(props.location)
}

getWeather({weather : 'Sunny', zipcode: 641108, location: 'Coimbatore'})
