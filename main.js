const express = require('express')

const mongoose = require('mongoose')

const router = require('./router/router.js')

const PORT = 5000;
const app = express()

app.use(express.json())
app.use("/api", router)






async function starApp() {
	try {
		//Подключение к бд
		await mongoose.connect('mongodb+srv://dimagordienkog:123@cluster0.krqptta.mongodb.net/?retryWrites=true&w=majority', { useUnifiedTopology: true, useNewUrlParser: true })
		//Лог сервера с успешным подключением
		app.listen(PORT, () => console.log("start server " + PORT))
	} catch (e) {
		//Вывод эксепшена
		res.status(500,).json(e)
	}
}



starApp()