//Создание экземпляра класса
const productShema = require('../Product/Product.js')



class acceptanse {
//Функция добаления
    async add(req, res) {

        try {
            //Инициализация значений
            const { idClietns, positionNumberProduct, barcodeProduct, supplierArticl, nameProduct, brand, photoBrand, colorBrand, sizeRange, width, height,
                depth, weight, compound, manufacturer, manufacturerCountry, adressManufacturer, dateOfManufacture } = req.body
                //Добавление значений в переменную
            const Servise = await productShema.create({
                idClietns, positionNumberProduct, barcodeProduct, supplierArticl, nameProduct, brand, photoBrand, colorBrand, sizeRange, width, height,
                depth, weight, compound, manufacturer, manufacturerCountry, adressManufacturer, dateOfManufacture
            })
            //Отправка данных на сервер
            res.status(200).json(Servise)
        } catch (e) {
            //Вывод эксепшена
            console.log(e);
        }
    }

//Функция получения
    async getAll() {
        try {
            //Инициализация и отправка полученных данных
            const Servise = await productShema.find()
            return Servise;

        } catch (e) {
            //Вывод эксепшена
            console.log(e);
        }

    }

    //Функция изменения
    async update(req, res) {
        try {
            const Servise = req.body
            //Проверка на наличие id в теле запроса
            if (!Servise._id) {
                //Вывод эксепшена
                res.status(400).json({ message: "id не указан" })
            }
            //Передача айдишника и тела запроса на сервер
            const updateServise = await productShema.findByIdAndUpdate(Servise._id, Servise, { new: true })
            return updateServise;
        } catch (e) {
            //Вывод эксепшена
            console.log(e);
        }


    }

//Функция удаления
    async delete(req, res) {
        try {
            //Инициализация айдишника
            const { id } = req.params
            //Передача айдишника в функцию нахождения и удаления
            const Servise = await productShema.findByIdAndDelete(id)
            //Проверка на наличие id в теле запроса
            if (!Servise._id) {
                //Вывод эксепшена
                res.status(400).json({ message: "id не указан" })
            }
            return Servise;
        } catch (e) {
            //Вывод эксепшена
            console.log(e);
        }


    }
}
module.exports = new acceptanse();