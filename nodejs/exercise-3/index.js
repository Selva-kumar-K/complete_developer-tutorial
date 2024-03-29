var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from "express";
import { routeHello, routeApiNames, routeWeather } from "./router.js";
const server = express();
const port = 3000;
server.get('/hello', (req, res) => {
    const response = routeHello();
    res.send(response);
});
server.get('/api/names', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let response;
    try {
        response = yield routeApiNames();
        res.send(response);
    }
    catch (error) {
        console.log(error);
    }
}));
server.get('/api/weather/:zipcode', (req, res) => {
    const response = routeWeather({ zipcode: req.params.zipcode });
    res.send(response);
});
server.listen(port, () => {
    console.log(`Server is running on the port : ${port}`);
});
