import Beignet from "./images/beignet.jpg";

function createMenuPage() {
  let body = document.createElement("div");
  body.id = "menu";
  body.classList.add("flex");
  body.classList.add("justify-evenly");
  body.classList.add("items-center");
  body.classList.add("mt-20");

  let beignet = new Image(500);
  beignet.src = Beignet;

  let textDiv = document.createElement("div");

  let description = document.createElement("p");
  description.innerText = "Box of 9";
  description.classList.add("font-bold");
  description.classList.add("text-4xl");
  description.classList.add("font-mono");
  description.classList.add("text-white");

  let price = document.createElement("p");
  price.innerText = "$30";
  price.classList.add("font-bold");
  price.classList.add("text-4xl");
  price.classList.add("font-mono");
  price.classList.add("text-white");

  let caption = document.createElement("p");
  caption.innerText = "Comes with complimentary advice";
  caption.classList.add("font-bold");
  caption.classList.add("text-2xl");
  caption.classList.add("font-mono");
  caption.classList.add("text-white");

  let note = document.createElement("p");
  note.innerText = "* Does not contain poison";
  note.classList.add("font-bold");
  note.classList.add("text-xl");
  note.classList.add("font-mono");
  note.classList.add("text-red-500");

  textDiv.appendChild(description);
  textDiv.appendChild(price);
  textDiv.appendChild(caption);
  textDiv.appendChild(note);

  body.appendChild(beignet);
  body.appendChild(textDiv);

  return body;
}

function renderMenuPage() {
  let main = document.getElementById("main");
  main.appendChild(createMenuPage());
}

export default renderMenuPage;
