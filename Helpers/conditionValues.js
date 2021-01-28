//i/ eq: Means the field value should be equal to the condition value 
function forEQ(data, rule) {
    if (data[rule.field] === rule.condition_value) {
        return {
            message: `field ${rule.field} successfully validated.`,
            status: "success",
            data: {
                validation: {
                    error: false,
                    field: data.field,
                    field_value: data.missions,
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
                    field: data.field,
                    field_value: data.missions,
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
                    field: data.field,
                    field_value: data.missions,
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
                    field: data.field,
                    field_value: data.missions,
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
                    field: data.field,
                    field_value: data.missions,
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
                    field: data.field,
                    field_value: data.missions,
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
                    field: data.field,
                    field_value: data.missions,
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
                    field: data.field,
                    field_value: data.missions,
                    condition: rule.condition,
                    condition_value: rule.condition_value
                }
            }
        }
    }
}


// v/ contains: Means the field value should contain the condition value
function forCONTAINS(data, rule) {

    //missing rule field in data
    let ruleField = rule.field

    if (ruleField && !data[ruleField]) {
        return {
            message: `field ${ruleField} is missing from data.`,
            status: "error",
            data: null
        }
    } else {
        return {
            message: `field ${rule.field} successfully validated.`,
            status: "success",
            data: {
                validation: {
                    error: false,
                    field: data.field,
                    field_value: data.missions,
                    condition: rule.condition,
                    condition_value: rule.condition_value
                }
            }
        }
    }



}


module.exports = {
    forEQ,
    forNEQ,
    forGT,
    forGTE,
    forCONTAINS
}