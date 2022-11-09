"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const yelp_routes_1 = __importDefault(require("./routes/yelp-routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const baseUrl = '/api/web/v1';
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
app.use(`${baseUrl}/yelp`, yelp_routes_1.default);
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Spinning the wheel on port ${port}`);
});
