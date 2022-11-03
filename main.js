const toTop = document.querySelector(".top");
window.onscroll = function () {
  if (this.scrollY > 100) {
    toTop.classList.add("active");
    console.log(this.scrollY);
  } else {
    toTop.classList.remove("active");
  }
};
// toTop.onclick = function () {
//   window.scrollTo({
//     top: 0,
//   });
// };
