import { browser } from "webextension-polyfill-ts";

// Onetime call on install to create context menu items.
browser.runtime.onInstalled.addListener(function() {
  console.log("ContextMenus browser.runtime.onInstalled event");
  let contextMenuItem: any = {
    id: "eatpage",
    title: "eat-page"
  };

  let notifyMenuItem: any = {
    id: "notify",
    title: "notify"
  };

  let messagePopup: any = {
    id: "messagePopup",
    title: "messagePopup"
  };

  browser.contextMenus.create(contextMenuItem);
  browser.contextMenus.create(notifyMenuItem);
  browser.contextMenus.create(messagePopup);
});

browser.contextMenus.onClicked.addListener(async function(info, tab) {
  if (info.menuItemId == "messagePopup") {
    try {
      const result = await browser.tabs.executeScript({
        file: "message-popup.js"
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
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
  if (info.menuItemId == "notify") {
    try {
      const result = await browser.tabs.executeScript({
        file: "notify.js"
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
});

console.log("contextMenus loaded.");
