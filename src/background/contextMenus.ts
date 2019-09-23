import { browser } from "webextension-polyfill-ts";

let contextMenuItem: any = {
  id: "eatpage",
  title: "eat-page"
};

browser.contextMenus.create(contextMenuItem);

browser.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId == "eatpage") {
    browser.tabs.executeScript({
      file: "page-eater.js"
    });
  }
});
