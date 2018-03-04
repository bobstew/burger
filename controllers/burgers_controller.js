var express = require('express');
var router = express.Router();
var burger = require("../models/burger.js");

// setup of the routes

// index redirect

router.get('/', function(req, res)
{
	res.redirect('/index');
});

// index page

router.get('/index', function(req, res)
{
	burger.selectAll(function(data)
	{
		var hbsObject = { burgers: data};

		res.render('index', hbsObject);
	});
});

// create a new burger

router.post('/burger/create', function(req, res)
{
	burger.insertOne(req.body.burger_name, function()
	{
		res.redirect('/index');
	});
});

// devour a burger

router.post('/burger/eat/:id', function(req, res)
{
	burger.updateOne(req.params.id, function()
	{
		res.redirect('/index');
	});
});

module.exports = router;
