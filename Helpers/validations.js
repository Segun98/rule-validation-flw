var validator = require('is-my-json-valid')
const {
    forEQ,
    forNEQ,
    forGT,
    forGTE,
    forCONTAINS
} = require("./conditionValues")

var validate = validator({
    required: true,
    type: 'object',
    properties: {
        field: {
            required: true,
            type: 'string'
        },
        condition: {
            required: true,
            type: 'string'
        },
        condition_value: {
            required: true,
            type: 'number'
        }
    }
})

module.exports = {
    //validations
    isRequired(body) {

        const {
            rule,
            data
        } = body

        if (!rule) {
            return {
                message: "rule is required.",
                status: "error",
                data: null
            }
        }

        if (typeof rule !== "object") {
            return {
                message: "rule should be an object.",
                status: "error",
                data: null
            }
        }

        //rule fields
        const {
            field,
            condition,
            condition_value
        } = rule

        //to determine what rule field isn't passed and return a message based on that
        let reqField = ""

        if (!field) {
            reqField = "field"
        } else if (!condition) {
            reqField = "condition"
        } else if (!condition_value) {
            reqField = "conditon value"

        }

        if (reqField) {
            return {
                message: `${reqField} is required.`,
                status: "error",
                data: null
            }
        }

        if (!data) {
            return {
                message: "data is required.",
                status: "error",
                data: null
            }
        }

        return {
            status: "success"
        }

    },

    //conditions
    conditions(body) {
        const {
            rule,
            data
        } = body



        //missing rule field in data
        let ruleField = rule.field

        if (ruleField && !data[ruleField]) {
            return {
                message: `field ${ruleField} is missing from data.`,
                status: "error",
                data: null
            }
        }


        const {
            condition
        } = rule

        switch (condition) {
            case "eq":
                return forEQ(data, rule)
            case "neq":
                return forNEQ(data, rule)
            case "gt":
                return forGT(data, rule)
            case "gte":
                return forGTE(data, rule)
            case "contains":
                return forCONTAINS(data, rule)
            default:
                return {
                    message: `invalid condition value passed, conditons can only be: "eq", "neq", "gt", "gte" and "contains".`,
                        status: "error",
                        data: null
                }
        }


    }
}