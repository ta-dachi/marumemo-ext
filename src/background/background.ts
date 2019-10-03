import { browser } from "webextension-polyfill-ts";
import "./contextMenus";
import "./browserActions";

function notify(message) {
  // console.log("background script received message");
  var title = "title";
  // console.log(title);
  var content = message.url;
  console.log(content);
  browser.notifications.create({
    type: "basic",
    iconUrl: browser.extension.getURL("icons/link-48.png"),
    title: title,
    message: content
  });
}

browser.runtime.onMessage.addListener(notify);

// browser.runtime.onInstalled.addListener(function() {
//   browser.runtime.onConnect.addListener(function(port) {
//     console.assert(port.name == "knockknock");
//     port.onMessage.addListener(function(msg) {
//       if (msg.joke == "Knock knock")
//         port.postMessage({ question: "Who's there?" });
//       else if (msg.answer == "Madame")
//         port.postMessage({ question: "Madame who?" });
//       else if (msg.answer == "Madame... Bovary")
//         port.postMessage({ question: "I don't get it." });
//     });
//   });

//   console.log("port knockknock ready");

// });

console.log("background loaded");
