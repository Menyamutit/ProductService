const productShema = require('./Product/Product.js')
const product = require('./service/serviceProduct.js')

class PostController {
    async add(req, res) {
        product.add(req, res)

    }

    async getAll(req, res) {
        const result = await product.getAll()
        return res.json(result);
    }
    async update(req, res) {
        const result = await product.update(req, res)
        return res.json(result);


    }
    async delete(req, res) {

        const result = await product.delete(req, res)
        return res.json(result);

    }
}
module.exports = new PostController()

