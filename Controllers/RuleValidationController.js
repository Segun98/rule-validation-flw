const {
    isRequired,
    conditions
} = require("../Helpers/validations")


function RuleValidation(req, res) {

    //response from "required" validation.
    const isRequiredRes = isRequired(req.body)

    if (isRequiredRes.status === "error") {
        return res.status(400).json(isRequiredRes)
    }

    //The condition to use for validating the rule
    const conditionsRes = conditions(req.body)

    if (conditionsRes.status === "error") {
        return res.status(400).json(conditionsRes)
    }


    res.status(200).json(conditionsRes)

}

module.exports = RuleValidation