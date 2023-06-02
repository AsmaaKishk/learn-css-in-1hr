const buy = document.getElementById("buy");
buy.style.color = "red";
buy.style.backgroundColor = "gold";
console.log(buy);

const myheader = document.querySelector("header");
console.log(myheader);

// myheader.remove();\


const title = document.createElement('h1')
const sec = document.getElementById('sec')
const main = document.getElementById('main')
title.classList.add('mb')
title.innerText= "Miss "
title.style.fontWeight ="bold"
// title.classList.remove('mb')
main.prepend(title)


const del = document.getElementById('del')
const doit = document.createElement('h3')
doit.classList.add('classnew')
doit.setAttribute('id', 'myidbyasmaa')
doit.innerText= 'العنصر الجديد اهو'
del.prepend(doit)
// del.remove()