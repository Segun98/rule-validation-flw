const router = require("express").Router()

router.get("/", (req, res) => {

    const data = {
        name: "Segun Olanitori",
        github: "@Segun98",
        email: "shegunolanitori@gmail.com",
        mobile: "08102679869",
        twitter: "@Segun_OS"
    }

    res.status(200).json({
        message: "My Rule-Validation API",
        status: "success",
        data
    })
})


module.exports = router