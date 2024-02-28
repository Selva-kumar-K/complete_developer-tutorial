"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var calculate_1 = require("./calculate");
var data = (0, calculate_1.calculate)(1, "2");
console.log(data);
// const weather = "sunny"
// const getWeather = (weather : string) : string => {
//     return weather
// }
// console.log(getWeather(weather))
var stringType = "Selva";
var numberType = 234;
var booleanType = true;
var nullType = null;
var undefinedType = undefined;
console.log(nullType, undefinedType);
var strArray = [];
strArray.push("Selva");
strArray.push("Arun");
strArray.push("Nandha");
console.log(strArray);
var genericArray = []; //Never data type assigned to genericArray
var weatherData = {
    weather: "Sunny",
    temperature: 25.33,
    location: "Coimbatore"
};
console.log(weatherData);
// let validTuple : [string, number] = ["bar", 1]
// let invalidTuple : [string, number] = [1, "bar"]
var test = function (msg) {
    console.log(msg);
};
test("data");
var getWeather = function (props) {
    console.log(props.location);
};
getWeather({ weather: 'Sunny', zipcode: 641108, location: 'Coimbatore' });
