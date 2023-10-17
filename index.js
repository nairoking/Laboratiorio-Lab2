import express from 'express';
import { Sequelize } from 'sequelize';

// Resto del código...


const app = express();

const sequelize = new Sequelize('laboratorio_integrador','root','',{
    host:'localhost',
    dialect:'mysql',
})

sequelize.authenticate()
.then(()=>{
    console.log('contectado a la base')
}).catch(err =>{
    console.log('no se conecto '+ err);
})


app.use(express.json());


// servidor en el puerto 3000
app.listen(3000, ()=>{
    console.log("servidor inicado en puerto 3000")
});
