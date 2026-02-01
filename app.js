require("dotenv").config()
// Async errors

const express = require("express")
const app = express()

const connectDB = require("./DB/connectDB")

const notFoundMiddleware = require("./middleware/not-found")
const errorHandlerMiddleware = require("./middleware/error-handler")

app.use(express.json())
// app.use("/api/v1/")

//routes
app.get("/", (req, res) => {
    res.send('<h1>Store API</h1><a href="/api/v1/products">Products route</a>')
})

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const PORT = process.env.PORT || 3000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_DB_URI)
        app.listen(PORT, console.log(`Server is listening on PORT ${PORT}`))
    } catch (error) {
        console.log(error);
    }
}

start()