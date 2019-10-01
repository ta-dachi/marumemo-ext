import { browser } from "webextension-polyfill-ts";

// Onetime call on install to create context menu items.
browser.runtime.onInstalled.addListener(function() {
  console.log("notify browser.runtime.onInstalled event");
  browser.runtime.onMessage.addListener(message => {
    if (message.command === "notify") {
      console.log(`content script sent a message: ${message}`);
    }
  });

  console.log("notify loaded");
});
