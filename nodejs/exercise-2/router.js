import fetch from "node-fetch"

const routeHello = async(req,res) => {
    res.send('Hello world!')
}

const routeApiNames = async(req,res) => {
    let data
    try {
        const res = await fetch("https://www.usemodernfullstack.dev/api/v1/users")
        data = await res.json()
    } catch (error) {
        console.log(error)
    }

    const names = data.map((item) => {
        return `id: ${item.id}, name: ${item.name}`
    }).join("<br>")

    res.send(names)    
}

export {routeHello, routeApiNames}