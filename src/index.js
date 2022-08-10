import express from "express"
import morgan from "morgan"
import v1UsersRoutes from "./v1/routes/user.js"
// import v1PostsRoutes from "./v1/routes/post.js"
const app = express()

//variables
app.set("port", process.env.PORT || 3000)

//midlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan("tiny"))

//routes
app.use("/user", v1UsersRoutes)
// app.use("/post", )

app.listen(app.get("port"), ()=>{
    console.log("Servidor en el puerto 3000"), app.get("port")
})