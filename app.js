const navbar = document.querySelector(".navbar");

const buttonString = `
  <button type="button" id="mobile-menu-toggle">
    <img src="./assets/images/icon-menu.svg" alt="mobile menu icon" />
  </button>
`;
const linksString = `
  <ul>
    <li>
      <a href="/">Home</a>
    </li>
    <li>
      <a href="/">New</a>
    </li>
    <li>
      <a href="/">Popular</a>
    </li>
    <li>
      <a href="/">Trending</a>
    </li>
    <li>
      <a href="/">Categories</a>
    </li>
  </ul>
`;
let toggleBtn;
let viewportWidth = window.innerWidth;

if (viewportWidth < 1440) {
  navbar.insertAdjacentHTML("beforeend", buttonString);
  toggleBtn = document.getElementById("mobile-menu-toggle");
  toggleBtn.addEventListener("click", showMenu);
} else {
  navbar.insertAdjacentHTML("beforeend", linksString);
}

window.addEventListener("resize", () => {
  if (window.innerWidth < 1440) {
    navbar.removeChild(navbar.lastElementChild);
    navbar.insertAdjacentHTML("beforeend", buttonString);
    toggleBtn = document.getElementById("mobile-menu-toggle");
    toggleBtn.addEventListener("click", showMenu);
  } else {
    navbar.removeChild(navbar.lastElementChild);
    navbar.insertAdjacentHTML("beforeend", linksString);
    toggleBtn = null;
  }
});

function showMenu() {
  document.body.style = "overflow: hidden";
  document.body.insertAdjacentHTML(
    "afterbegin",
    `
<div class="modal-wrapper">
  <div class="modal-backdrop"></div>
  <div class="modal-body">
    <button id="modal-close-btn" type="button" title="menu close">
      <img src="./assets/images/icon-menu-close.svg" alt="menu close icon" />
    </button>
    ${linksString}
  </div>
</div>
`
  );
  const closeBtn = document.getElementById("modal-close-btn");
  const backdrop = document.querySelector(".modal-backdrop");
  closeBtn.addEventListener("click", () => {
    document.body.removeChild(document.body.firstElementChild);
    document.body.removeAttribute("style");
  });

  backdrop.addEventListener("click", () => {
    document.body.removeChild(document.body.firstElementChild);
    document.body.removeAttribute("style");
  });
}
