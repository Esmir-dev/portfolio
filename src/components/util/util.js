function defaultOption() {
  let lang = localStorage.getItem("lang");

  if (lang === "en") {
    let option = document.querySelector("option#en");
    option.setAttribute("selected", "true");
  } else if (lang === "bh") {
    let option = document.querySelector("option#bh");
    option.setAttribute("selected", "true");
  }
}

export { defaultOption };
