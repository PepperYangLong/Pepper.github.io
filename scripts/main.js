var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
var iceCream = 'chocolate';
if (iceCream === 'chocolate') {
    alert('Yay, I love chocolate ice cream!');
} else {
    alert('Awwww, but chocolate is my favorite...');
}
function multiply(num1, num2) {
    var result = num1 % num2;
    return result;
}
//document.querySelector('html').onclick = function () {
//    alert(multiply(8,2).toString());
//}

var myImage = document.querySelector('img');

myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute('src', 'images/firefox2.png');
    } else {
        myImage.setAttribute('src', 'images/firefox-icon.png');
    }
}
function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
}
if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
myButton.onclick = function () {
    setUserName();
}