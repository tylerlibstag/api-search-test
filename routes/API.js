const userCrit = require("../models/userCrit");

app.use("/api", apiRoutes);

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
      