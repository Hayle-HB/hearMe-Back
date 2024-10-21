const router = require("express").Router();

const { Router } = require("express");
// controllers

const { getPosts, postHandler } = require("../controllers/postControllers.js");

router.get("/posts", getPosts);
router.post('/posts', postHandler )

module.exports = router;
