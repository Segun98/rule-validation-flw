/* 
1. eq
2. neq
3. gt 
4. gte 
5. contains 
 */

//i/ eq: Means the field value should be equal to the condition value 
function forEQ(data, rule) {
    if (data[rule.field] === rule.condition_value) {
        return {
            message: `field ${rule.field} successfully validated.`,
            status: "success",
            data: {
                validation: {
                    error: false,
                    field: rule.field,
                    field_value: data[rule.field],
                    condition: rule.condition,
                    condition_value: rule.condition_value
                }
            }
        }

    } else {
        return {
            message: `field ${rule.field} failed validation.`,
            status: "error",
            data: {
                validation: {
                    error: true,
                    field: rule.field,
                    field_value: data[rule.field],
                    condition: rule.condition,
                    condition_value: rule.condition_value
                }
            }
        }
    }
}


// ii/ neq: Means the field value should not be equal to the condition value
function forNEQ(data, rule) {

    if (data[rule.field] !== rule.condition_value) {
        return {
            message: `field ${rule.field} successfully validated.`,
            status: "success",
            data: {
                validation: {
                    error: false,
                    field: rule.field,
                    field_value: data[rule.field],
                    condition: rule.condition,
                    condition_value: rule.condition_value
                }
            }
        }

    } else {
        return {
            message: `field ${rule.field} failed validation.`,
            status: "error",
            data: {
                validation: {
                    error: true,
                    field: rule.field,
                    field_value: data[rule.field],
                    condition: rule.condition,
                    condition_value: rule.condition_value
                }
            }
        }
    }
}

// iii/ gt: Means the field value should be greater than the condition value
function forGT(data, rule) {

    if (data[rule.field] > rule.condition_value) {
        return {
            message: `field ${rule.field} successfully validated.`,
            status: "success",
            data: {
                validation: {
                    error: false,
                    field: rule.field,
                    field_value: data[rule.field],
                    condition: rule.condition,
                    condition_value: rule.condition_value
                }
            }
        }

    } else {
        return {
            message: `field ${rule.field} failed validation.`,
            status: "error",
            data: {
                validation: {
                    error: true,
                    field: rule.field,
                    field_value: data[rule.field],
                    condition: rule.condition,
                    condition_value: rule.condition_value
                }
            }
        }
    }
}

// iv/ gte: Means the field value should be greater than or equal to the condition value
function forGTE(data, rule) {

    if (data[rule.field] >= rule.condition_value) {
        return {
            message: `field ${rule.field} successfully validated.`,
            status: "success",
            data: {
                validation: {
                    error: false,
                    field: rule.field,
                    field_value: data[rule.field],
                    condition: rule.condition,
                    condition_value: rule.condition_value
                }
            }
        }

    } else {
        return {
            message: `field ${rule.field} failed validation.`,
            status: "error",
            data: {
                validation: {
                    error: true,
                    field: rule.field,
                    field_value: data[rule.field],
                    condition: rule.condition,
                    condition_value: rule.condition_value
                }
            }
        }
    }
}


// v/ contains: Means the field value should contain the condition value
function forCONTAINS(data, rule) {
    //check if its an array
    let arr = Array.isArray(data)
    //check if its a string
    let isString = typeof data === "string"


    if (arr) {
        for (let i = 0; i < data.length; i++) {
            if (data[i] === rule.field) {
                return {
                    message: `field ${rule.field} successfully validated.`,
                    status: "success",
                    data: {
                        validation: {
                            error: false,
                            field: rule.field,
                            field_value: data[i],
                            condition: rule.condition,
                            condition_value: rule.condition_value
                        }
                    }
                }
            }

        }
    }

    if (isString) {
        if (rule.field === data) {
            return {
                message: `field ${rule.field} successfully validated.`,
                status: "success",
                data: {
                    validation: {
                        error: false,
                        field: rule.field,
                        field_value: data,
                        condition: rule.condition,
                        condition_value: rule.condition_value
                    }
                }
            }
        }
    }

    //missing rule field in data
    let ruleField = rule.field

    return {
        message: `field ${ruleField} is missing from data.`,
        status: "error",
        data: null
    }


}


module.exports = {
    forEQ,
    forNEQ,
    forGT,
    forGTE,
    forCONTAINS
}