"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const database_1 = require("./configuration/database");
const app = (0, express_1.default)();
dotenv_1.default.config();
const port = process.env.PORT;
database_1.database.sync({}).then(() => {
    console.log(`Database connected`);
}).catch((err) => {
    console.log(err);
});
app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});
