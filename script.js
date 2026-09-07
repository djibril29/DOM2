// Wait until the HTML is fully loaded before touching the page
document.addEventListener("DOMContentLoaded", function () {
  // --------------------------------------------------
  // 1. Select the box and the button by their ids
  // --------------------------------------------------
  var colorBox = document.getElementById("color-box");
  var changeColorBtn = document.getElementById("change-color-btn");

  // --------------------------------------------------
  // 2. Generate a random hexadecimal color
  //    Example result: "#3A7BD5"
  // --------------------------------------------------
  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    var i;

    for (i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
  }

  // --------------------------------------------------
  // 3. When the button is clicked, paint the box
  //    with a new random color
  // --------------------------------------------------
  changeColorBtn.addEventListener("click", function () {
    colorBox.style.backgroundColor = getRandomColor();
  });
});
