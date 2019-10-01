import { browser } from "webextension-polyfill-ts";

document.body.textContent = "";

var header = document.createElement("h1");
header.textContent = "This page has been eaten";
document.body.appendChild(header);

console.log("page-eater.js used");

browser.tabs.sendMessage(tabs[0].id, {
  command: "notify",
  message: "page-eater used"
});
