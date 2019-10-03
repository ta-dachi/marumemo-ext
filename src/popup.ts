import { browser } from "webextension-polyfill-ts";

console.log("popup.ts");
// console.log(browser.extension.getBackgroundPage());
// browser.tabs.executeScript({ file: "page-eater.js" });
document.getElementById("myButton").addEventListener("click", sendMessage);

console.log(document.getElementById("myButton"));

function sendMessage() {
  console.log("test");

  // var port = browser.runtime.connect("knock knock");
  // port.postMessage({ joke: "Knock knock" });
  // port.onMessage.addListener(function(msg) {
  //   if (msg.question == "Who's there?") port.postMessage({ answer: "Madame" });
  //   else if (msg.question == "Madame who?")
  //     port.postMessage({ answer: "Madame... Bovary" });
  // });
}

// browser.runtime.sendMessage({ popup: true });

// var port = browser.runtime.connect("knock knock");
// port.postMessage({ joke: "Knock knock" });
// port.onMessage.addListener(function(msg) {
//   if (msg.question == "Who's there?") port.postMessage({ answer: "Madame" });
//   else if (msg.question == "Madame who?")
//     port.postMessage({ answer: "Madame... Bovary" });
// });

document
  .getElementById("notifyButton")
  .addEventListener("click", notifyExtension);

async function notifyExtension() {
  await browser.runtime.sendMessage({ notify: true });
}

//for listening any message which comes from runtime
// browser.runtime.onMessage.addListener(messageReceived);

// function messageReceived(msg) {
//   console.log(msg);
// }

// (async () => {
//   await browser.runtime.sendMessage({ greeting: "hello" });
// })();
