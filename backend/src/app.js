import express from "express"
import products from "./routes/products"
import cors from "cors"



const app = express();

app.use(cors({
    origin: "*",
    methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
    credentials: true 
}));


app.use(express.json());
app.use(products);


export default app