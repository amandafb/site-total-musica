document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav__toggle");
  var menu = document.querySelector(".nav__menu");

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      menu.classList.toggle("is-open");
      var expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", !expanded);
    });

    document
      .querySelectorAll(".nav__link:not(.nav__link--dropdown)")
      .forEach(function (link) {
        link.addEventListener("click", function () {
          menu.classList.remove("is-open");
          toggle.setAttribute("aria-expanded", "false");
        });
      });
  }

  var dropdowns = document.querySelectorAll(".nav__dropdown");
  dropdowns.forEach(function (dropdown) {
    var trigger = dropdown.querySelector(".nav__link--dropdown");
    if (trigger) {
      trigger.addEventListener("click", function (e) {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          dropdown.classList.toggle("is-expanded");
        }
      });
    }
  });

  var nav = document.querySelector(".nav");
  if (nav) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        nav.classList.add("nav--scrolled");
      } else {
        nav.classList.remove("nav--scrolled");
      }
    });
  }

  document.querySelectorAll(".footer__bottom small").forEach(function (el) {
    el.innerHTML = el.innerHTML.replace(
      /2016–\d{4}/,
      "2016–" + new Date().getFullYear(),
    );
  });
});
