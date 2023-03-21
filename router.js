
const Router = require('express')
const PostController = require('./PostController.js')

const router = new Router()

router.post("/add", PostController.add)
router.get("/all", PostController.getAll)
router.put("/update", PostController.update)
router.delete("/delete/:id", PostController.delete)

module.exports = router