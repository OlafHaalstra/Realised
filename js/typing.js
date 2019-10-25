var element = document.querySelector('#promo');
var logo = document.querySelector('#logo');
var words = ['Sustainable innovation', 'Your Campus', 'Your Data', 'Our Future'];
var logoVisible = false;

function type(words, index) {
  index = index ? index : 0;
  (function writer(i) {
    var string = words[index];
    if (string.length <= i++) {
      element.innerText = string;
      if (words[index] != words[words.length - 1]) {
        if (!logoVisible) {
          logo.classList.add("visible");
        }
        setTimeout(function () {
          reverseType(words, index);
        }, 3000);
      } else {
        setTimeout(function () {
          reverseType(words, index);
        }, 3000);
      }
      return;
    }
    element.innerText = string.substring(0, i);
    var rand = Math.floor(Math.random() * (30)) + 50;
    setTimeout(function () { writer(i); }, rand);
  })(0)
}

function reverseType(words, index) {
  index = index ? index : 0;
  setTimeout(function () {
    element.classList.add("selected");
  }, 1000);
  setTimeout(function () {
    element.innerText = "";
    element.classList.remove("selected");
    if (words[index] != words[words.length - 1]) {
      type(words, index + 1);
    } else {
      type(words, 0);
    }
    return;
  }, 2000)
}

type(words);