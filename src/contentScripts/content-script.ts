let btn = document.createElement("BUTTON");
document.body.appendChild(btn);
let greeting = "hola, ";
btn.setAttribute("id", "btn_id");
btn.setAttribute("value", "hola");
btn["person_name"] = "Roberto";
btn.addEventListener(
  "click",
  function() {
    alert(greeting + btn["person_name"] + ".");
  },
  false
);

console.log("content-script.js used");
