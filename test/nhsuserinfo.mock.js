const express = require("express")
const bodyParser = require("body-parser")

const app = express()

app.use(bodyParser.json())

const nhsNumberMap = {
    "9690964704": {
        family_name: "ELSTON",
        given_name: "Don",
        nhs_number: "9690964704",
        birthdate: "1939-09-25",
    },
    "9449310629": {
        family_name: "APPIAH-KUBI",
        given_name: "Naazim",
        nhs_number: "9449310629",
        birthdate: "1973-01-01",
    },
    "9449303371": {
        family_name: "QUICK-DODWITHTIME",
        given_name: "Newton",
        nhs_number: "9449303371",
        birthdate: "2011-07-21",
    },
    "9690966235": {
        family_name: "ROWLEY",
        given_name: "Rubin",
        nhs_number: "9690966235",
        birthdate: "2004-08-04",
    },
    "9449303983": {
        family_name: "KURTZ-WILLIAMS",
        given_name: "Parris",
        nhs_number: "9449303983",
        birthdate: "2010-10-15",
    },
}

app.get("/userinfo", (req, res) => {
    const { nhsNumber } = req.query

    res.status(200).send(
        JSON.stringify(nhsNumberMap[nhsNumber])
    )
})

app.post("/userinfo", (req, res) => {
    const { nhsNumber } = req.body

    console.log(nhsNumber)
    console.log(JSON.stringify(nhsNumberMap[nhsNumber]))

    res.status(200).send(
        JSON.stringify(nhsNumberMap[nhsNumber])
    )
})

app.listen(9999)
