"use strict";
console.log("Hello from render Process");
let tab1 = document.getElementById("chat");
let tab2 = document.getElementById("find");
let tab3 = document.getElementById("settings");
let chatcontent = document.getElementById("chatcontent");
let findcontent = document.getElementById("findcontent");
//@ts-expect-error
document.getElementById("settingscontent").innerHTML += "<h1>Settings</h1>";
