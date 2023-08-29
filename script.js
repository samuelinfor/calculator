function insert(num) {
    document.querySelector(".screen").innerHTML += num;
}

function clean() {
    document.querySelector(".screen").innerHTML = "";
}

function delet() {
    let screen = document.querySelector(".screen").innerHTML;
    document.querySelector(".screen").innerHTML = screen.substring(0, screen.length - 1);
}

function plus() {
    let screen = document.querySelector(".screen").innerHTML;
    if (screen) {
      document.querySelector(".screen").innerHTML = eval(screen);
    } else {
      document.querySelector(".screen").innerHTML;
    }
  }