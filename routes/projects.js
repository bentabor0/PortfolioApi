var express = require('express');
var router = express.Router();

let projects = [
    {
        // Software Architecture 
        name: "Software Architecture Project",
        link: "https://budgetplanner-2021.azurewebsites.net",
        src: "photo-BudgetPlannerPhoto.png"
    },
    {
        // example
        name: "Zoo Api",
        link: "https://clientsidedevapi.azurewebsites.net/",
        src: "test.png"
    },
    {
        // example
        name: "example project",
        link: "",
        src: "https://cdn.freecodecamp.org/testable-projects-fcc/images/tic-tac-toe.png"
    }
];


// return projects array
router.get('/', (req, res, next) => {
    res.json(projects);
});

module.exports = router;
   