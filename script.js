(function () {
  var menuButton = document.querySelector(".menu-button");
  var sideRail = document.querySelector(".side-rail");
  var tocToggle = document.querySelector(".toc-toggle");
  var tocList = document.querySelector(".toc-list");
  var sections = document.querySelectorAll("[data-collapsible-section]");

  if (menuButton && sideRail) {
    menuButton.addEventListener("click", function () {
      var isHidden = sideRail.classList.toggle("is-hidden");
      menuButton.setAttribute("aria-expanded", String(!isHidden));
    });
  }

  if (tocToggle && tocList) {
    tocToggle.addEventListener("click", function () {
      var isCollapsed = tocList.classList.toggle("is-collapsed");
      tocToggle.textContent = isCollapsed ? "show" : "hide";
      tocToggle.setAttribute("aria-expanded", String(!isCollapsed));
    });
  }

  sections.forEach(function (section) {
    var button = section.querySelector(".collapse-toggle");

    if (!button) {
      return;
    }

    button.addEventListener("click", function () {
      var isCollapsed = section.classList.toggle("is-collapsed");
      button.textContent = isCollapsed ? "show" : "hide";
      button.setAttribute("aria-expanded", String(!isCollapsed));
    });
  });
})();
