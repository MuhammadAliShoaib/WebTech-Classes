const express = require("express")
const app = express();
const path = require("path")
const PORT = process.env.PORT || 3000


app.set("views",path.join(__dirname,"views"))
app.set("view engine","vash")
app.use(express.json())
app.use(express.urlencoded({extended:true}))   
app.use(express.static(path.join(__dirname,"public")))

const indexRoute = require("./routes/index")

app.get("*",(req,res,next)=>{
    next();
})

app.use('/',indexRoute)

app.listen(PORT,()=>console.log(`Server is listening on port ${PORT}`))