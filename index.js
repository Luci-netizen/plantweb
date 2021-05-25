"use strict";
// alphabetical order
function sortUL(selector) {
  var $ul = $(selector);
  $ul
    .find("li")
    .sort(function (a, b) {
      var upA = $(a).text().toUpperCase();
      var upB = $(b).text().toUpperCase();
      return upA < upB ? -1 : upA > upB ? 1 : 0;
    })
    .appendTo(selector);
}

$(document).ready(function () {
  sortUL(".list-alphabetically-1");
  sortUL(".list-alphabetically-2");
});

$("philodendron").add("");

const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
