let btn = document.getElementById("btnMore");
let div = document.getElementById("more");
let btnL = document.getElementById("btnLess");
let btnT = document.getElementById("top");
let myBtn = document.getElementById("top-1");
let divShop = document.getElementById("scroll-shop");
let img = document.querySelector(`div#image>img`);
let images = document.querySelectorAll(`div#images>img`);
let hmb = document.getElementById("hmblogo");
let hmbDiv = document.getElementById("hmbmenu");
let close = document.getElementById("close");
btn.addEventListener("click", function () {
  btn.style.display = "none";
  div.style.height = "max-content";
  btnL.style.display = "flex";
});
btnL.addEventListener("click", function () {
  btnL.style.display = "none";
  div.style.height = "94px";
  btn.style.display = "flex";
});
btnT.addEventListener("click", function () {
  document.documentElement.scrollTop = 0;
});
myBtn.addEventListener("click", function () {
  document.documentElement.scrollTop = 0;
});
function scroll() {
  if (
    document.documentElement.scrollTop > 1000 &&
    document.documentElement.clientWidth >= 1024
  ) {
    divShop.style.display = "flex";
  } else if (
    document.documentElement.scrollTop < 1000 &&
    document.documentElement.clientWidth >= 1024
  ) {
    divShop.style.display = "none";
  } else {
    divShop.style.display = "flex";
  }
}
window.onscroll = function () {
  scroll();
};
images.forEach((elem) => {
  elem.addEventListener("click", function () {
    img.src = `${elem.src}`;
  });
});
hmb.addEventListener("click", function () {
  if (document.documentElement.clientWidth <= 640) {
    hmbDiv.style.width = "95vw";
    hmbDiv.style.boxShadow = " 0 0 0 5000px rgba(88, 88, 88, 0.652)";
  } else if (
    document.documentElement.clientWidth <= 798 &&
    document.documentElement.clientWidth >= 640
  ) {
    hmbDiv.style.width = "60vw";
    hmbDiv.style.boxShadow = " 0 0 0 5000px rgba(88, 88, 88, 0.652)";
  } else if (
    document.documentElement.clientWidth <= 1024 &&
    document.documentElement.clientWidth >= 798
  ) {
    hmbDiv.style.width = "40vw";
    hmbDiv.style.boxShadow = " 0 0 0 5000px rgba(88, 88, 88, 0.652)";
  }
});
close.addEventListener("click", function () {
  hmbDiv.style.width = "0";
  hmbDiv.style.boxShadow = "unset";
});
