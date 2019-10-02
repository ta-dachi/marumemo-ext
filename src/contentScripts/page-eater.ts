import { browser } from "webextension-polyfill-ts";

document.body.textContent = "";

var header = document.createElement("h1");
header.textContent = "This page has been eaten";
document.body.appendChild(header);

// browser.tabs.sendMessage(tabs[0].id, {
//   command: "notify",
//   message: "page-eater used"
// });
