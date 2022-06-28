function createContactPage() {
  let body = document.createElement("div");
  body.id = "contact";
  body.classList.add("mt-20");
  body.classList.add("grid");
  body.classList.add("grid-cols-2");
  body.classList.add("place-items-center");

  let labels = document.createElement("div");

  let location = document.createElement("h1");
  location.classList.add("text-2xl");
  location.classList.add("text-white");
  location.classList.add("font-bold");
  location.classList.add("font-mono");
  location.innerText = "Location";

  let phone = document.createElement("h1");
  phone.classList.add("text-2xl");
  phone.classList.add("text-white");
  phone.classList.add("font-bold");
  phone.classList.add("font-mono");
  phone.innerText = "Telephone";

  labels.appendChild(location);
  labels.appendChild(phone);

  let details = document.createElement("div");

  let addr = document.createElement("h1");
  addr.classList.add("text-2xl");
  addr.classList.add("text-white");
  addr.classList.add("font-bold");
  addr.classList.add("font-mono");
  addr.innerText = "246 E Colden Ave";

  let num = document.createElement("h1");
  num.classList.add("text-2xl");
  num.classList.add("text-white");
  num.classList.add("font-bold");
  num.classList.add("font-mono");
  num.innerText = "213-202-9879";

  details.appendChild(addr);
  details.appendChild(num);

  body.appendChild(labels);
  body.appendChild(details);

  return body;
}

function renderContactPage() {
  let main = document.getElementById("main");
  main.appendChild(createContactPage());
}

export default renderContactPage;
