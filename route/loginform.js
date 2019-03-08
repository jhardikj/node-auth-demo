const router = require("express").Router();
const loginform = require("../models/loginform");
const logincontroller = require("../controllers/loginform");
const auth = require("../middleware/auth");

router.get("/loginrecord", auth, logincontroller.logingetdata);

router.post("/signup", logincontroller.signin);

router.post("/login", auth, logincontroller.login);

router.delete("/removelogin/:id", auth, logincontroller.deletelogin);

// router.put("/update/:id", auth, function(req, res) {
//   loginform
//     .findOneAndUpdate({ _id: req.params.id }, req.body)
//     .then(book =>
//       res.json({
//         message: "Sucessfully Update record"
//       })
//     )
//     .catch(err =>
//       res.status(422).json({
//         message: "Not Found"
//       })
//     );
// });

module.exports = router;
