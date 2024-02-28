type responseItemType = {
    id: string,
    name: string
}

type WeatherType = {
    zipcode: string,
    weather : string,
    temp? : number
}

interface WeatherQueryInterface {
    zipcode: string
}