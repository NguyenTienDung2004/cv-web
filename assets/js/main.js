import { attach } from "./redux/store.js";
import app from "./component/app.js";
attach(app, document.querySelector('.cvapp'))