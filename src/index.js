import express from "express"
import morgan from "morgan"
import v1Routes from "./v1/routes/user.js"
const app = express()

//variables
app.set("port", process.env.PORT || 3000)

//midlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan("tiny"))

//routes
app.use("/", v1Routes)

app.listen(app.get("port"), ()=>{
    console.log("Servidor en el puerto 3000"), app.get("port")
})