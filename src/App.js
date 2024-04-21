"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("bootstrap/dist/css/bootstrap.min.css");
require("./App.scss");
const footer_1 = __importDefault(require("./components/footer/footer"));
const header_1 = __importDefault(require("./components/header/header"));
const email_1 = __importDefault(require("./components/email/email"));
function App() {
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "App" }, { children: [(0, jsx_runtime_1.jsx)(header_1.default, {}), (0, jsx_runtime_1.jsx)(email_1.default, {}), (0, jsx_runtime_1.jsx)(footer_1.default, {})] })));
}
exports.default = App;
