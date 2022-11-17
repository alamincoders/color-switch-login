let btn = document.getElementById("btn");
let textEl = document.querySelector(".text");

// color change
function changeColor(color) {
  document.body.style.background = color;
  btn.style.background = color;
  textEl.style.borderColor = color;

  //   mark as active selected color
  document.querySelectorAll("span").forEach((item) => {
    item.classList.remove("active");
  });
  event.target.classList.add("active");
}
