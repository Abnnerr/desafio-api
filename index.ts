import express from "express";
import cors from "cors"
import usersRoutes from "./src/modules/users/users.routes.js"

const app = express()
const PORT = 3000

app.use(express.json())
app.use(cors())



app.use('/users', usersRoutes)




app.listen(PORT, () => {
    console.log(`rodando http://localhost:${PORT}`)
})