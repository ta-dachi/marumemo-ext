import { browser } from "webextension-polyfill-ts";

browser.browserAction.onClicked.addListener(tab => {
  browser.tabs.executeScript(null, { file: "save-page.js" }); // null defaults to the activeTab
});

console.log("browserActions loaded.");
