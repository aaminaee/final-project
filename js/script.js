let photoOne = document.getElementById("photo1");
let photoTwo = document.getElementById("photo2");
let photoThree = document.getElementById("photo3");
let photoFour = document.getElementById("photo4");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let first = document.getElementById("first");
let second = document.getElementById("second");
let third = document.getElementById("third");
let forth = document.getElementById("forth");
let btn = document.getElementById("btnMore");
let div = document.getElementById("more");
let btnL = document.getElementById("btnLess");
let btnT = document.getElementById("top");
let myBtn=document.getElementById("top-1")
let hmb = document.getElementById("hmblogo");
let hmbDiv = document.getElementById("hmbmenu");
let close = document.getElementById("close");

next.addEventListener("click", function () {
  if (first.className === "on") {
    second.classList.add("on");
    first.classList.remove("on");
    photoOne.classList.add("fadeout");
    photoOne.classList.add("photo-2");
    photoOne.classList.remove("fadeinprev");
    photoTwo.classList.remove("photo-1");
    photoTwo.classList.remove("fadeoutprev");
    photoTwo.classList.remove("fadeout");
    photoTwo.classList.add("fadein");
    photoOne.classList.remove("fadein");
    photoFour.classList.remove("fadeout");
    photoFour.classList.remove("photo-2");
    photoFour.classList.add("photo-1");
  } else if (second.className === "on") {
    third.classList.add("on");
    second.classList.remove("on");
    photoTwo.classList.add("fadeout");
    photoTwo.classList.add("photo-2");
    photoTwo.classList.remove("fadeinprev");
    photoTwo.classList.remove("fadein");
    photoThree.classList.remove("photo-1");
    photoThree.classList.add("fadein");
    photoThree.classList.remove("fadeoutprev");
    photoThree.classList.remove("fadeout");
    photoTwo.classList.remove("fadein");
    photoOne.classList.remove("fadeout");
    photoOne.classList.remove("photo-2");
    photoOne.classList.add("photo-1");
  } else if (third.className === "on") {
    forth.classList.add("on");
    third.classList.remove("on");
    photoThree.classList.add("fadeout");
    photoThree.classList.add("photo-2");
    photoFour.classList.remove("photo-1");
    photoFour.classList.add("fadein");
    photoFour.classList.remove("fadeoutprev");
    photoThree.classList.remove("fadein");
    photoThree.classList.remove("fadeinprev");
    photoTwo.classList.remove("fadeout");
    photoTwo.classList.remove("photo-2");
    photoTwo.classList.add("photo-1");
  } else if (forth.className === "on") {
    first.classList.add("on");
    forth.classList.remove("on");
    photoFour.classList.add("fadeout");
    photoOne.classList.remove("photo-1");
    photoOne.classList.add("fadein");
    photoOne.classList.remove("fadeout");
    photoOne.classList.remove("fadeinprev");
    photoFour.classList.add("photo-2");
    photoFour.classList.remove("fadein");
    photoFour.classList.remove("fadeinprev");
    photoThree.classList.remove("fadeout");
    photoThree.classList.remove("photo-2");
    photoThree.classList.add("photo-1");
    photoOne.classList.remove("fadeoutprev");
  }
});
prev.addEventListener("click", function () {
  if (first.className === "on") {
    forth.classList.add("on");
    first.classList.remove("on");
    photoOne.classList.add("fadeoutprev");
    photoOne.classList.add("photo-1");
    photoFour.classList.add("fadeinprev");
    photoFour.classList.remove("photo-1");
    photoFour.classList.remove("photo-2");
  } else if (second.className === "on") {
    first.classList.add("on");
    second.classList.remove("on");
    photoOne.classList.add("fadeinprev");
    photoOne.classList.remove("photo-1");
    photoOne.classList.remove("photo-2");
    photoTwo.classList.remove("fadeinprev");
    photoTwo.classList.add("photo-1");
    photoTwo.classList.add("fadeoutprev");
    photoThree.classList.remove("fadeoutprev");
    photoThree.classList.remove("fadeout");
  } else if (third.className === "on") {
    second.classList.add("on");
    third.classList.remove("on");
    photoOne.classList.remove("fadeinprev");
    photoTwo.classList.add("fadeinprev");
    photoTwo.classList.remove("photo-1");
    photoTwo.classList.remove("photo-2");
    photoTwo.classList.remove("fadeoutprev");
    photoThree.classList.add("fadeoutprev");
    photoThree.classList.add("photo-1");
    photoThree.classList.remove("fadeinprev");
    photoThree.classList.remove("fadeinprev");
    photoThree.classList.remove("fadein");
    photoFour.classList.remove("fadeoutprev");
    photoFour.classList.remove("fadein");
  } else if (forth.className === "on") {
    third.classList.add("on");
    forth.classList.remove("on");
    photoOne.classList.remove("fadeoutprev");
    photoOne.classList.remove("fadein");
    photoFour.classList.add("fadeoutprev");
    photoFour.classList.remove("fadeinprev");
    photoFour.classList.remove("fadeout");
    photoFour.classList.add("photo-1");
    photoThree.classList.add("fadeinprev");
    photoThree.classList.remove("photo-1");
    photoThree.classList.remove("photo-2");
  }
});
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
