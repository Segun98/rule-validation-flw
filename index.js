const express = require('express')
const app = express()

//json middlewares
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))
//routes imports
const home = require("./Routes")
const ruleValidation = require("./Routes/rule_validation")


//home route
app.use("/", home)
//validate rule route
app.use("/validate-rule", ruleValidation)


const PORT = process.env.PORT || 8080

app.listen(PORT, () => console.log(`Server has started on http://localhost:${PORT}`))