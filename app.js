const btns = document.querySelectorAll(".item");
const del = document.querySelector("#item8");
const evaluet = document.querySelector("#evaluet");
let screen = document.querySelector(".screen");
const clean = document.querySelector("#item");
const cyan = document.querySelector("#cyan");
const green = document.querySelector("#green");
const red = document.querySelector("#red");
const blue = document.querySelector("#blue");
const cal = document.querySelector(".calculator");
const h1 = document.querySelector("h1");

let string = "";
let a = true;

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    string = string + e.target.innerHTML;
    screen.value = string;
    if (e.target.innerHTML == "Del") {
        // string = string + e.target.innerHTML;
    string = string.slice(0, -4);
    screen.value = string;
    }
   if ( screen.value == "") {
      screen.value = "Nothing to delete"
    }
  });

  clean.addEventListener("click", () => {
    string = "";
    screen.value = string;
  });



  evaluet.addEventListener("click", () => {
    try {
      string = eval(string);
      screen.value = string;
    } catch (error) {
      string = "Syntax Error";
      screen.value = string;
    }
  });
});

// del.addEventListener("click", () => {
//   string = string.slice(0, -1);
//   screen.value = string;
// });

// setting part
const theme = document.querySelector(".theme");
const setting = document.querySelector(".setting");
theme.addEventListener("click", () => {
  setting.classList.toggle("setting2");
  theme.classList.toggle("theme2");
});

// theme part

//Cyan
cyan.addEventListener("click", () => {
  h1.classList.remove("greenClr");
  cal.classList.remove("green");
  btns.forEach((btn) => {
    btn.classList.remove("greenBtn");
  });
  evaluet.classList.remove("greenBtn");
  h1.classList.remove("redClr");
  cal.classList.remove("red");
  btns.forEach((btn) => {
    btn.classList.remove("redBtn");
  });
  evaluet.classList.remove("redBtn");
  h1.classList.remove("blueClr");
  cal.classList.remove("blue");
  btns.forEach((btn) => {
    btn.classList.remove("blueBtn");
  });
  evaluet.classList.remove("blueBtn");
});
//Green
green.addEventListener("click", () => {
  h1.classList.add("greenClr");
  cal.classList.add("green");
  btns.forEach((btn) => {
    btn.classList.add("greenBtn");
  });
  evaluet.classList.add("greenBtn");
  // delete red class
  //delete blue class

  h1.classList.remove("redClr");
  cal.classList.remove("red");
  btns.forEach((btn) => {
    btn.classList.remove("redBtn");
  });
  evaluet.classList.remove("redBtn");
  h1.classList.remove("blueClr");
  cal.classList.remove("blue");
  btns.forEach((btn) => {
    btn.classList.remove("blueBtn");
  });
  evaluet.classList.remove("blueBtn");
});
//End

// red
red.addEventListener("click", () => {
  h1.classList.add("redClr");
  cal.classList.add("red");
  btns.forEach((btn) => {
    btn.classList.add("redBtn");
  });
  evaluet.classList.add("redBtn");
  // delete green class
  //delete blue class

  h1.classList.remove("greenClr");
  cal.classList.remove("green");
  btns.forEach((btn) => {
    btn.classList.remove("greenBtn");
  });
  evaluet.classList.remove("greenBtn");
  h1.classList.remove("blueClr");
  cal.classList.remove("blue");
  btns.forEach((btn) => {
    btn.classList.remove("blueBtn");
  });
  evaluet.classList.remove("blueBtn");
});
// End

// Blue
blue.addEventListener("click", () => {
  h1.classList.add("blueClr");
  cal.classList.add("blue");
  btns.forEach((btn) => {
    btn.classList.add("blueBtn");
  });
  evaluet.classList.add("blueBtn");
  // delete green class
  // delete red class

  h1.classList.remove("greenClr");
  cal.classList.remove("green");
  btns.forEach((btn) => {
    btn.classList.remove("greenBtn");
  });
  evaluet.classList.remove("greenBtn");
  h1.classList.remove("redClr");
  cal.classList.remove("red");
  btns.forEach((btn) => {
    btn.classList.remove("redBtn");
  });
  evaluet.classList.remove("redBtn");
});
