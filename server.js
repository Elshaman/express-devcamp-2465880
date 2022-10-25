const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')

//dependencia a la conexion a bd
const connectDB = require('./config/db')

//dependencias a las rutas
const bootcampRoutes = require('./routes/BootcampRoutes')
const UserRoutes = require('./routes/UserRoutes')


//establecer el archivo de configuracion
// con variables de entorno del proyecto
dotenv.config({
    path: './config_env/config.env'
})


//1 crear el objeto app
const app = express()

//ejecutar la conexion a db
connectDB()

app.use('/api/v1/bootcamps' , bootcampRoutes )
app.use('/api/v1/users' , UserRoutes )

//3. ejecutar servidor de 
//   desarrollo de express
app.listen( process.env.PORT , ()=>{
    console.log(`Servidor iniciado en puerto:${ process.env.PORT }`.bgGreen.blue)
})
