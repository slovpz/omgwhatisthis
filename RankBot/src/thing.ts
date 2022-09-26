import {setCookie} from 'noblox.js';
import {config} from 'dotenv';
import { exit } from 'process';
import { setGroup } from './rankStuff';


function start() {
    if(process.env.cookie != undefined) {
        setCookie(process.env.cookie, true);
        setGroup(8151834);
        console.log("Cookie set");
    } else {
        console.log("Cookie was not found");
        exit(-1);
    }
}

start();
