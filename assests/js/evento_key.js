const key = document.getElementById("key");
let contenedor_div = document.getElementById("contenedor_div");

let div = document.createElement("div");
div.style.width = "200px";
div.style.height = "200px";
div.style.border = "3px black solid";

let div2 = document.createElement("div");
div2.style.width = "200px";
div2.style.height = "200px";
div2.style.border = "3px black solid";

let div3 = document.createElement("div");
div3.style.width = "200px";
div3.style.height = "200px";
div3.style.border = "3px black solid";

document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    key.style.backgroundColor = "pink";
  } else if (event.key === "s") {
    key.style.backgroundColor = "orange";
  } else if (event.key === "d") {
    key.style.backgroundColor = "cyan";
  } else if (event.key === "q") {
    div.style.backgroundColor = "purple";
    contenedor_div.appendChild(div);
  } else if (event.key === "w") {
    div2.style.backgroundColor = "gray";
    contenedor_div.appendChild(div2);
  } else if (event.key === "e") {
    div3.style.backgroundColor = "brown";
    contenedor_div.appendChild(div3);
  }
});
