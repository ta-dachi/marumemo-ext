import { browser } from "webextension-polyfill-ts";

console.log("page-eater.js");

console.log(browser);

let contextMenuItem: any = {
  id: "test",
  title: "test"
};

browser.contextMenus.create(contextMenuItem);

browser.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId == "test") {
    browser.tabs.executeScript({
      file: "page-eater.js"
    });
  }
});
