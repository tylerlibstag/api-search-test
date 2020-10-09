const userCrit = require("../models/userCrit");

const router = require("express").Router();

router.get("/api/userCrit", (req, res) => {
    userCrit.find({})
      
      .then(dbuserCrit => {
        res.json(dbuserCrit);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  //   module.exports = function(app){
//     app.get('/api/workouts', function (req, res) {
//        userCrit.find({}).then(doc => {
//           res.json(doc)
//         });
//       })
      