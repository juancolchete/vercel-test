const fs = require('fs');
require('dotenv').config();
console.log(process.env.JSON_CONFIG);
const customer = process.env.JSON_CONFIG;
const jsonString = JSON.stringify(customer)
fs.writeFile('./serviceAccountKey.json', jsonString, err => {
    if (err) {
        console.log('Error writing file', err)
    } else {
        console.log('Successfully wrote file')
    }
})