import express, {Request, Response} from "express"
import { routeHello, routeApiNames, routeWeather } from "./router.js"

const server = express()
const port = 3000

server.get('/hello', (req: Request, res: Response) => {
    const response = routeHello()
    res.send(response)
})

server.get('/api/names', async(req: Request, res: Response) => {

    let response: string;
    try {
        response = await routeApiNames()
        res.send(response)
    } catch (error) {
        console.log(error)
    }
})

server.get('/api/weather/:zipcode', (req: Request, res: Response) : void => {

    const response =  routeWeather({zipcode: req.params.zipcode})
    res.send(response)
})

server.listen(port, () : void => {
    console.log(`Server is running on the port : ${port}`)
})