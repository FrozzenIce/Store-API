require('dotenv').config()

const connectDB = require('./DB/connectDB')
const Product = require('./models/DBmodel')

const jsonProducts = require('./products.json')

const start = async () => {
    try{
        await connectDB(process.env.MONGO_DB_URI)
        await Product.deleteMany()
        await Product.create(jsonProducts)
        console.log("SUCCESS")
        process.exit(0)
    } catch (error) {
        console.log(error)
        process.exit(0)
    }
}
start()