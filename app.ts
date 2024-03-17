const Product = require('./user');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
import express, {Request, Response} from 'express';
import { dbconnection } from './src/Book.Infrastructure/ConfigureInfrastructure';
const app = express();
const PORT = process.env.PORT || 3000;
require('dotenv').config();

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/products', async(req, res) => {
        try {
                const products = await Product.find({});
                res.status(200).json(products).end();
        } catch (error) {
                
        }
})

app.get('/product/:id', async(req, res) => {
        try {
                const {id} = req.params;
                const product = await Product.findById(id);
                res.status(200).json(product).end();
        } catch (error) {
                
        }
})
app.post('/product', async(req, res) => {
        try {
                const {name, quantity, price} = req.body;
                const product = await Product.create(req.body)
                res.status(200).end();
        } catch{
                res.status(500).end();
        }
})
app.put('/product/:id', async(req, res) => {
        try {
                const {id} = req.params;
                const product = await Product.findByIdAndUpdate(id, req.body);
                if(!product) {
                        return res.status(404).json({message: `Cannot find product with id: ${id}`}).end();
                }
                const result = await Product.findById(id);
                res.status(200).json(result).end();
        } catch (error) {
                
        }
})
app.delete('/product/:id', async(req, res) => {
        try {
                const {id} = req.params;
                const product = await Product.findByIdAndDelete(id);
                if(!product){
                        return res.status(404).json({message: `Cannot find product with id: ${id}`})
                }
                res.status(200).json(product);
        } catch (error) {
        }
})
app.listen(PORT, () => {
        console.log(`Server is running at ${PORT}`);
})
dbconnection(); 