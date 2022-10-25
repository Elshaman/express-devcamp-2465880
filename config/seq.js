const Sequelize = require('sequelize')

//definir objeto sequelize de conexion:
const sequelize = new Sequelize(
    'devcamp-2465880',
    'root',
    '',
    {
        host:'localhost',
        dialect: 'mysql',
        port: '3306'
    }
)

module.exports = sequelize