const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
	// -- Метод render позволяет рендерить страницы
	// -- Для передачи динамических параметров в метод render вторым параметром передается объект с данными
	res.render("index.hbs", {
		title: "Todos list",
		isIndex: true,
	});
});

router.get("/create", (req, res) => {
	res.render("create.hbs", {
		title: "Create todo",
		isCreate: true,
	});
});

module.exports = router;
