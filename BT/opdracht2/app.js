const p = document.getElementsByClassName("localStorage");
const button = document.getElementsByClassName("button");

console.log(p);
console.log(button)

button[0].addEventListener("click", getLocalStorageData);
button[1].addEventListener("click", getCookieStorageData);
// Local storage

let key = "item 1";
localStorage.setItem(key, "this comes from localStorage");

function getLocalStorageData() {
    let myItem = localStorage.getItem(key);
    p[0].innerHTML = myItem;
}

// Cookie storage
document.cookie = "name=Tristan; SameSite=None; Secure";
document.cookie = "lastname=Varewijck; SameSite=None; Secure;";

function getCookieStorageData() {
    p[1].innerHTML = document.cookie;
}