import express, {Request, Response} from 'express';
import { connectDB } from './dbconnection';
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.listen(PORT, () => {
        console.log(`Server is running at ${PORT}`);
})
connectDB(); 