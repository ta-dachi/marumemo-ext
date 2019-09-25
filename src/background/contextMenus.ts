import { browser } from "webextension-polyfill-ts";

let contextMenuItem: any = {
  id: "eatpage",
  title: "eat-page"
};

browser.contextMenus.create(contextMenuItem);

browser.contextMenus.onClicked.addListener(async function(info, tab) {
  if (info.menuItemId == "eatpage") {
    try {
      const result = await browser.tabs.executeScript({
        file: "page-eater.js"
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
});

console.log("contextMenus loaded.");
