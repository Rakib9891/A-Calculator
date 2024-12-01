const btns = document.querySelectorAll(".item");
const del = document.querySelector(".item2");
const evaluet = document.querySelector("#evaluet");
let screen = document.querySelector(".screen");
const clean = document.querySelector("#item");
let string = "";
let a = true;

btns.forEach((btn) => {
 
    btn.addEventListener("click", (e) => {
     
      string = string + e.target.innerHTML;
      screen.value = string;
     
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
