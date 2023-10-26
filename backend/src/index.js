import app from "./app"
import './database'

const port = app.listen(8080)

console.log(`server puerto ${port}`)