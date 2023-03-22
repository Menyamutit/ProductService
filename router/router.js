
const Router = require('express')
const PostController = require('../controller/PostController.js')

const router = new Router()

//Путь для добавления
router.post("/add", PostController.add)
//Путь для получения
router.get("/all", PostController.getAll)
//Путь для изменения
router.put("/update", PostController.update)
//Путь для удаления
router.delete("/delete/:id", PostController.delete)

module.exports = router