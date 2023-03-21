const productShema = require('../Product/Product.js')



class acceptanse {

    async add(req, res) {

        try {
            const { idClietns, positionNumberProduct, barcodeProduct, supplierArticl, nameProduct, brand, photoBrand, colorBrand, sizeRange, width, height,
                depth, weight, compound, manufacturer, manufacturerCountry, adressManufacturer, dateOfManufacture } = req.body
            const Servise = await productShema.create({
                idClietns, positionNumberProduct, barcodeProduct, supplierArticl, nameProduct, brand, photoBrand, colorBrand, sizeRange, width, height,
                depth, weight, compound, manufacturer, manufacturerCountry, adressManufacturer, dateOfManufacture
            })
            res.status(200).json(Servise)
        } catch (e) {
            console.log(e);
        }
    }


    async getAll() {
        try {
            const Servise = await productShema.find()
            return Servise;

        } catch (e) {
            console.log(e);
        }

    }

    async update(req, res) {
        try {
            const Servise = req.body
            if (!Servise._id) {
                res.status(400).json({ message: "id не указан" })
            }
            const updateServise = await productShema.findByIdAndUpdate(Servise._id, Servise, { new: true })
            return updateServise;
        } catch (e) {
            console.log(e);
        }


    }


    async delete(req, res) {
        try {
            const { id } = req.params
            const Servise = await productShema.findByIdAndDelete(id)
            if (!Servise._id) {
                res.status(400).json({ message: "id не указан" })
            }

            return Servise;
        } catch (e) {
            console.log(e);
        }


    }
}
module.exports = new acceptanse();