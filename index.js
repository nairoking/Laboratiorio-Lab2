import express from "express";

const app = express();

app.use(express.json());

// servidor en el puerto 3000
app.listen(3000, ()=>{
    console.log("servidor inicado en puerto 3000")
});
