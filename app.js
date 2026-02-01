require("dotenv").config()
// Async errors

const express = require("express")
const app = require(express())

const notFoundMiddleware = require("./middleware/error-handler")
const errorHandlerMiddleware = require("./middleware/error-handler")
const PORT = 3000

app.use(express.json())
app.use("/api/v1/")

//routes
app.get("/", (req, res) => {
    res.send('<h1>Store API</h1><a href="/api/v1/products>Products route</a>')
})


const start = () => {
    app.listen(PORT, `Server is listening on PORT ${PORT}`)
}