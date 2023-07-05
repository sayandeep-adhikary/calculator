const btnClick = new Audio("button_click.mp3");
const buttons = document.querySelectorAll("button");
let str = "";

const playClickSound = () => {
  btnClick.play();
};

buttons.forEach((button) => {
  let id = button.getAttribute("id");
  button.addEventListener("click", () => {
    playClickSound();
    navigator.vibrate(100);
    if(id === "="){
      str = eval(str);
      str = str.toString();
      document.getElementsByTagName("p")[0].innerHTML = str;
    }
    else if (id !== "backspace" && id !== "clearAll" && id !== "=") {
      if(str.length <= 15){
        document.getElementsByTagName("p")[0].innerHTML += id;
        str += id;
        console.log("String :", str);
      }
    } else if (id === "clearAll") {
      str = "";
      document.getElementsByTagName("p")[0].innerHTML = str;
    } else if (id === "backspace") {
      let l = str.length;
      str = str.substring(0, l - 1);
      document.getElementsByTagName("p")[0].innerHTML = str;
    }
    console.log(id, "is clicked");
    console.log(str, "is the new string and it's type is", typeof str);
  });
});

document.addEventListener("keydown", (event) => {
  let s = event.key;
  console.log(s, "is pressed ");
  let key = Number.parseInt(event.key);
  if (
    (key >= 0 && key <= 9) ||
    (s === "+") ||
    (s === "-") ||
    (s === "*") ||
    (s === "/") ||
    (s === ".") ||
    (s === "=") ||
    (s === "Backspace") ||
    (s === "Delete") ||
    (s === "Enter")
  ) {
    playClickSound();
  }

  if(s === "=" || s === "Enter"){
    str = eval(str);
    str = str.toString();
    document.getElementsByTagName("p")[0].innerHTML = str;
  }
  else if (
    (key >= 0 && key <= 9) ||
    (s === "+") ||
    (s === "-") ||
    (s === "*") ||
    (s === "/") ||
    (s === ".")
  ) {
    if(str.length <= 15){
      document.getElementsByTagName("p")[0].innerHTML += event.key;
      str += event.key;
      console.log("String :", str);
    }
  } else if (s === "Delete") {
    str = "";
    document.getElementsByTagName("p")[0].innerHTML = str;
  } else if (s === "Backspace") {
    l = str.length;
    str = str.substring(0, l - 1);
    document.getElementsByTagName("p")[0].innerHTML = str;
  }
});
