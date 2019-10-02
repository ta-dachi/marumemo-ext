console.log("popup.ts");
console.log(chrome.extension.getBackgroundPage());
document.getElementById("myButton").addEventListener("click", sendMessage);

console.log(document.getElementById("myButton"));

function sendMessage() {
  console.log("test");
}
// var port = browser.runtime.connect("knock knock");
// port.postMessage({ joke: "Knock knock" });
// port.onMessage.addListener(function(msg) {
//   if (msg.question == "Who's there?") port.postMessage({ answer: "Madame" });
//   else if (msg.question == "Madame who?")
//     port.postMessage({ answer: "Madame... Bovary" });
// });

// browser.runtime.sendMessage({ popup: true });

// var port = browser.runtime.connect("knock knock");
// port.postMessage({ joke: "Knock knock" });
// port.onMessage.addListener(function(msg) {
//   if (msg.question == "Who's there?") port.postMessage({ answer: "Madame" });
//   else if (msg.question == "Madame who?")
//     port.postMessage({ answer: "Madame... Bovary" });
// });

// document
//   .getElementById("notifyButton")
//   .addEventListener("click", notifyExtension);

// function notifyExtension() {
//   browser.runtime.sendMessage({ notify: true });
// }

//for listening any message which comes from runtime
// browser.runtime.onMessage.addListener(messageReceived);

// function messageReceived(msg) {
//   console.log(msg);
// }

// browser.runtime.sendMessage({ greeting: "hello" });
