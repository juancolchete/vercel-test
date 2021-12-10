const fs = require('fs')
const customer = process.env.JSON_CONFIG
const jsonString = JSON.stringify(customer)
fs.writeFile('./newCustomer.json', jsonString, err => {
    if (err) {
        console.log('Error writing file', err)
    } else {
        console.log('Successfully wrote file')
    }
})