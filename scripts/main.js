const images = document.querySelector(".images");
const btns = document.querySelectorAll(".btns button");
const nextImage = (top_view, current_button) => {
  images.style.top = top_view + "vh";
  //Remove active class
  for (let i = 0; i < btns.length; i++) {
    btns[i].classList.remove("active");
  }
  if (current_button == 1) {
    btns[0].classList.add("active");
  } else if (current_button == 2) {
    btns[1].classList.add("active");
  } else if (current_button == 3) {
    btns[2].classList.add("active");
  }
};
