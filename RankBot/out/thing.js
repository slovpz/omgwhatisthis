"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const noblox_js_1 = require("noblox.js");
const process_1 = require("process");
const rankStuff_1 = require("./rankStuff");
function start() {
    if (process.env.cookie != undefined) {
        (0, noblox_js_1.setCookie)(process.env.cookie, true);
        (0, rankStuff_1.setGroup)(8151834);
        console.log("Cookie set");
    }
    else {
        console.log("Cookie was not found");
        (0, process_1.exit)(-1);
    }
}
start();
