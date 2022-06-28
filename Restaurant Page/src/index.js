import "./style.css";
import Mitch from "./images/mitch.png";
import renderHomePage from "./Home";
import renderMenuPage from "./Menu";
import renderContactPage from "./Contact";

function createHeader() {
  let header = document.createElement("header");
  header.classList.add("drop-shadow-lg");

  let titleDiv = document.createElement("div");
  titleDiv.classList.add("flex");
  titleDiv.classList.add("justify-evenly");
  titleDiv.classList.add("items-center");

  let title = document.createElement("h2");
  title.innerText = "Beignets By Mitch";
  title.classList.add("text-4xl");
  title.classList.add("text-left");
  title.classList.add("font-bold");
  title.classList.add("text-white");
  title.classList.add("font-mono");

  let image = new Image(80);
  image.src = Mitch;

  titleDiv.appendChild(image);
  titleDiv.appendChild(title);

  let navBar = createNavBar();

  let contentDiv = document.createElement("div");
  contentDiv.classList.add("flex");
  contentDiv.classList.add("justify-between");
  contentDiv.classList.add("w-full");
  contentDiv.classList.add("h-max");
  contentDiv.classList.add("bg-[#bab5a7]");
  contentDiv.classList.add("gap-x-96");
  contentDiv.appendChild(titleDiv);
  contentDiv.append(navBar);

  header.appendChild(contentDiv);

  return header;
}

function createNavBar() {
  let navBar = document.createElement("nav");
  navBar.classList.add("text-white");
  navBar.classList.add("font-mono");
  navBar.classList.add("items-center");
  navBar.classList.add("flex");

  let homeButton = document.createElement("button");
  homeButton.innerText = "Home";
  homeButton.classList.add("mx-2");
  homeButton.classList.add("text-xl");
  homeButton.classList.add("nav-item");
  homeButton.classList.add("active");
  homeButton.addEventListener("click", function (event) {
    if (event.target.classList.contains("active")) return;
    setActiveNav(event.target);
    removeContent();
    renderHomePage();
  });

  let menuButton = document.createElement("button");
  menuButton.innerText = "Menu";
  menuButton.classList.add("mx-2");
  menuButton.classList.add("text-xl");
  menuButton.classList.add("nav-item");
  menuButton.addEventListener("click", function (event) {
    if (event.target.classList.contains("active")) return;
    setActiveNav(event.target);
    removeContent(); //remove current content
    renderMenuPage();
  });

  let contactButton = document.createElement("button");
  contactButton.innerText = "Contact";
  contactButton.classList.add("mx-2");
  contactButton.classList.add("text-xl");
  contactButton.classList.add("nav-item");
  contactButton.addEventListener("click", function (event) {
    if (event.target.classList.contains("active")) return;
    setActiveNav(event.target);
    removeContent(); //remove current content
    renderContactPage();
  });

  navBar.appendChild(homeButton);
  navBar.appendChild(menuButton);
  navBar.appendChild(contactButton);

  return navBar;
}

function removeContent() {
  let main = document.getElementById("main");
  main.innerHTML = "";
}

function setActiveNav(element) {
  let navItems = document.querySelectorAll(".nav-item");
  navItems.forEach((item) => {
    if (item !== element) {
      item.classList.remove("active");
    }
  });

  element.classList.add("active");
}

function loadPage() {
  let content = document.getElementById("content");
  content.classList.add("bg-[#bab5a7]");
  content.classList.add("h-screen");

  let header = createHeader();

  let main = document.createElement("div");
  main.id = "main";

  content.appendChild(header);
  content.appendChild(main);

  renderHomePage();
}

loadPage();
