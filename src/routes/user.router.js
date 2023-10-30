const { getAll, create, getOne_2, remove, update } = require('../controllers/user.controllers');
const express = require('express');

const userRouter = express.Router();

userRouter.route("/")
	.get(getAll)
	.post(create)

	userRouter.route("/:id")
	.get(getOne_2)
	.delete(remove)
	.put(update)


module.exports = userRouter;