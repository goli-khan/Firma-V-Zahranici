const express = require("express");
require("dotenv").config();
const cors = require("cors");
const router = require("./Routes/routes.js");
const connection = require("./Connection/connection.js");
const app = express();

connection();

app.use(
	cors({
		origin: "*",
		methods: ["POST", "GET", "PUT", "DELETE"],
		credentials: true,
	}),
);

app.use(express.json());

app.use("/auth/api", router);

const port = process.env.PORT;

app.listen(port, () => {
	console.log(`server is running on port ${port}`);
});
