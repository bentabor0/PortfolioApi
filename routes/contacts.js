const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

///////////////////////////////// Create mongoose schema and Zoo const /////////////////////////////////

const contactSchema = new Schema({
    name: {
        type: String,
        required: 'Enter a name'
    },
    phoneNumber: {
        type: String
    },
    email: {
        type: String,
        required: 'Enter an email'
    },
    comments: {
        type: String
    },
    createdDate: {
        type: Date,
        default: Date.now()
    }
});

const Contact = mongoose.model('Contact', contactSchema);

///////////////////////////////// Create controls /////////////////////////////////

// Add new contact
const addContact = (req, res) => {
    let newContact = new Contact(req.body);

    newContact.save((err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
}

// Get all contacts
const getContacts = (req, res) => {
    Contact.find({}, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
}

///////////////////////////////// Create routes /////////////////////////////////

// Middleware ran in each route
let middleware = (req) => {
    console.log(`Request from: ${req.originalUrl}`)
    console.log(`Request type: ${req.method}`)
};

// // Zoo help page
// router.get('/', (req, res, next) => {
//     res.send(`<!DOCTYPE html>
//         <html lang="en">
//         <head>
//           <meta charset="UTF-8">
//           <meta http-equiv="X-UA-Compatible" content="IE=edge">
//           <meta name="viewport" content="width=device-width, initial-scale=1.0">
//           <title>Zoo express api</title>
//         </head>
//         <body>
//           <h1>Zoo Api</h1>
//           <h2>List of avaliable requests, the type of request followed by the route</h2>
//           <p>GET --- /zoos: gets all zoos</p>
//           <p>GET --- /zooID/"zooID": replece "zooID" with zoo id value, returns a zoo</p>
//           <p>POST --- /zoos: with zoo json body will add a zoo to the database</p>
//           <p>PUT --- /zooID/"zooID": replece "zooID" with zoo id value, updates a zoo</p>
//           <p>DELETE --- /zooID/"zooID": replece "zooID" with zoo id value, deletes a zoo</p>
//         </body>
//         </html>`)
// });

// Get all contacts, /contact
router.get('/', (req, res, next) => {
    middleware(req);
    next();
}, getContacts);

// Post a new contact, /new
router.post('/new', (req, res, next) => {
    middleware(req);
    next();
}, addContact);


module.exports = router;