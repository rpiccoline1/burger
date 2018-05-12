var express = require("express");
var router = express.Router();
var burgers = require("../models/burger.js")



router.get("/", function(req, res){
	burgers.all(function(data){
		var hbsObject = {burgers: data};

		console.log(hbsObject);

		res.render("index", hbsObject);
	});
});

router.post("/create", function(req, res){
  console.log(req.body.burger_name);
	burgers.create(["burger_name"], [req.body.burger_name], function(data){
		res.redirect("/")
	});
});

router.put("/update/:id", function(req, res){
	console.log(res);
	
	var condition = "id = " + req.params.id;

	burgers.updateOne("burgers", { devoured: "true" }, condition, function(data){
		res.redirect("/");
	});
});

module.exports = router;