import express from "express"
import { routeHello, routeApiNames } from "./router.js"

const PORT =5000

const app = express()

app.get('/hello', routeHello)

app.get('/api/names', routeApiNames)

app.listen(PORT, () => {
    console.log(`Server is listening on the port no: ${PORT}`)
})