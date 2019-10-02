import { browser } from "webextension-polyfill-ts";
import "./contextMenus";
import "./browserActions";
import "./notify";

console.log("background loaded");

// browser.runtime.onMessage.addListener(function(message, sender) {
//   if (message.popup) {
//     console.log(sender);
//     console.log("message recieved");
//   }
// });

browser.runtime.onMessage.addListener(notify);

function notify(message) {
  browser.notifications.create({
    type: "basic",
    title: "You clicked a link!",
    message: message.notify
  });
}

browser.runtime.onInstalled.addListener(function() {
  browser.runtime.onConnect.addListener(function(port) {
    console.assert(port.name == "knockknock");
    port.onMessage.addListener(function(msg) {
      if (msg.joke == "Knock knock")
        port.postMessage({ question: "Who's there?" });
      else if (msg.answer == "Madame")
        port.postMessage({ question: "Madame who?" });
      else if (msg.answer == "Madame... Bovary")
        port.postMessage({ question: "I don't get it." });
    });
  });

  console.log("port knockknock ready");
});
