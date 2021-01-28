const router = require("express").Router()
const RuleValidation = require("../Controllers/RuleValidationController")

//ROUTE: /validate-rule

router.post("/", RuleValidation)

module.exports = router