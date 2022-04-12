const express = require("express");
const mongoose = require("mongoose");
// -- Подключение пакета Express-HandleBars
const exphbs = require("express-handlebars");
const todoRoutes = require("./routes/todos");
const path = require("path");

const PORT = process.env.PORT || 8000;

const app = express();
// -- Настройка конфигурации шаблонизатора
const hbs = exphbs.create({
	// -- Название дефолтного шаблона
	defaultLayout: "main",
	// -- Сокращение написания HandleBars
	extname: "hbs",
});

// -- Регистрация движка HBS
app.engine("hbs", hbs.engine);
// -- Чтобы установить Handlebars в качестве движка представлений в Express, вызывается функция:
app.set("view engine", "hbs");
app.set("views", "views");

// -- Для регистрации роута обращаемся к методу use объекта app, который позволяет добавлять новые middleware
app.use(todoRoutes);
app.use(express.static(path.join(__dirname, "public")));

async function start() {
	try {
		await mongoose.connect(
			"mongodb+srv://ginoss:4140022admin@cluster0.zxzka.mongodb.net/todos",
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
			}
		);
	} catch (error) {
		console.log(error);
	}
}

start();

app.listen(PORT, () => {
	console.log(`Server run on port ${PORT}`);
});
