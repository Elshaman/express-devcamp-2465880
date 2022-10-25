const express = require('express')

const router = express.Router()


//establecer las rutas de bootcamp
 // get: obtener datos Read
 router.get('/', (req , res) => {
    res.status(200).json(
     {
         "message" : "aqui se van a mostrar todos los users"  
     }
    )     
})


 // obtener recurso por id 
 router.get('/:id' , (req , res )=>{
    res.status(200).json(
        {
            "message" : `aqui va a mostrarse el user cuyo id es ${req.params.id }`  
        }
       )   
 } )

 
 //POST: crear un nuevo recurso
 router.post('/', (req , res)=>{
    res.status(201).json({
        "message": "aqui se va a crear user"
    })
 })

 
 //PUT - PATCH: actualizar
 router.put('/:id' , (req , res)=>{
    res.status(200).json(
        {
            "message": `aqui se va a actualizar el user ${req.params.id}`
        }
    )
 })

 //DELETE: borrar un bootcamp
 router.delete('/:id', (req, res)=>{
    res.status(200).json(
        {
            "message": `aqui se va a borrar el user ${req.params.id}`
        }
    )
 })

 module.exports = router



