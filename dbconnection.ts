const mongoose = require("mongoose");
const _settings = require("./appsettings.json");

export async function connectDB(){
    try {
        const { ConnectionString, OtherOptions } = _settings.mongodb;
        await mongoose.connect(ConnectionString, OtherOptions);
        console.log("Connect to MongoDB successfully");
    } catch (error) {
        console.log("Fail to connect to MongoDB");
    }
}

