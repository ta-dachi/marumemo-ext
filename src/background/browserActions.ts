import { browser } from "webextension-polyfill-ts";

browser.browserAction.onClicked.addListener(action);

async function action() {
  await browser.tabs.executeScript(null, { file: "send-message.js" }); // null defaults to the activeTab
}

console.log("browserActions loaded.");
