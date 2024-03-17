require('dotenv').config();
const mongoose = require('mongoose');

// Connect to MongoDB using the connection string from .env
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;
const port = process.env.DB_PORT;
const MONGODB_URI = `mongodb://${username}:${password}@${host}:${port}/`

export async function dbconnection() {
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err: any) => console.error('Error connecting to MongoDB:', err));
}