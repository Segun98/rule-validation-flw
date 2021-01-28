// i/ eq: Means the field value should be equal to the condition value
// ii/ neq: Means the field value should not be equal to the condition value
// iii/ gt: Means the field value should be greater than the condition value
// iv/ gte: Means the field value should be greater than or equal to the condition value
// v/ contains: Means the field value should contain the condition value

= EX2 =
{
"rule": {
"field": "0"
"condition": "eq",
"condition_value": "a"
},
"data": "damien-marley"
}

Response: (HTTP 400)
{
"message": "field 0 failed validation."
"status": "error",
"data": {
"validation": {
"error": true,
"field": "0",
"field_value": "d",
"condition": "eq",
"condition_value: "a"
}
}
}

= EX3 =
{
"rule": {
"field": "5"
"condition": "contains",
"condition_value": "rocinante"
},
"data": ["The Nauvoo", "The Razorback", "The Roci", "Tycho"]
}

Response: (HTTP 400)
{
"message": "field 5 is missing from data."
"status": "error",
"data": null
}

{
"rule": {
"field": "missions"
"condition": "gte",
"condition_value": 30
},
"data": {
"name": "James Holden",
"crew": "Rocinante",
"age": 34,
"position": "Captain",
"missions": 45
}
}
