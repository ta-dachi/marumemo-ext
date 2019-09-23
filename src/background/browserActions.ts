import { browser } from "webextension-polyfill-ts";

browser.browserAction.onClicked.addListener(function(tab) {
  browser.tabs.executeScript(null, { file: "save-page.js" }); // null defaults to the activeTab
});
