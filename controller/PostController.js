const productShema = require('../Product/Product.js')
const product = require('../service/serviceProduct.js')

class PostController {
    //Запрос на добавление
    async add(req, res) {
        product.add(req, res)
    }
    //Запрос на получение
    async getAll(req, res) {
        const result = await product.getAll()
        return res.json(result);
    }
    //Запрос на изменение
    async update(req, res) {
        const result = await product.update(req, res)
        return res.json(result);
    }
    //Запрос на удаление
    async delete(req, res) {
        const result = await product.delete(req, res)
        return res.json(result);
    }
}
module.exports = new PostController()

