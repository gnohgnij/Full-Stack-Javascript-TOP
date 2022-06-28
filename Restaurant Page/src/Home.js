import Logo from "./images/logo.png";

function createHomePage() {
  let body = document.createElement("div");
  body.id = "home";
  body.classList.add("mt-20");

  let bodyText = document.createElement("h1");
  bodyText.innerText = "As seen on";
  bodyText.classList.add("text-6xl");
  bodyText.classList.add("text-white");
  bodyText.classList.add("text-center");
  bodyText.classList.add("font-bold");
  bodyText.classList.add("font-mono");

  let bodyImage = new Image();
  bodyImage.src = Logo;
  bodyImage.classList.add("my-0");
  bodyImage.classList.add("mx-auto");

  body.appendChild(bodyText);
  body.appendChild(bodyImage);

  return body;
}

function renderHomePage() {
  let main = document.getElementById("main");
  main.appendChild(createHomePage());
}

export default renderHomePage;
