const mongoose = require("mongoose");

const dbConnect = async() => {
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect( process.env.MONGO_DB );
        console.log('Conectado a la Base de datos MONGO ');
    } catch (error) {
        
        throw new Error('Error a la hora de inizializar la BD MONGO');
    }
}

module.exports = { dbConnect }