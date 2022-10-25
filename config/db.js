const sequelize = require('./seq')
const colors = require('colors')
//dependendencia a la funcion para crear modelo
const UserModel = require('../models/user')
//depencia a DataTypes
const { DataTypes } = require('sequelize')

//crear el modelo
const User = UserModel( sequelize  , DataTypes)



//crear funcion asyncrona para conexion
const connectDB = async () =>{
    try {
        await sequelize.authenticate()
        console.log('conexión establecida exitosamente'.bgMagenta.blue)
        //seleccionar los users: 
        //const users = await User.findAll();
        //console.log(users)
        //crear user 

    } catch (error) {
        console.error(error)
    }
} 

module.exports = connectDB