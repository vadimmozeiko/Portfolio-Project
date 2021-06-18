function mobileMenu() {
  const menuList = document.getElementById("list");
  const menuButton = document.getElementById("list-button");
  const hambuger = document.querySelector('.hamburger');

  menuList.style.maxHeight = "0px";

  menuButton.addEventListener("click", () => {
    if (menuList.style.maxHeight == "0px") {
      menuList.style.maxHeight = "250px";
    } else {
      menuList.style.maxHeight = "0px";
    }
    hambuger.classList.toggle('change');
  });
}

export { mobileMenu };
