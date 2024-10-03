const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/Gfriend-PNG-Background-Image.png") {
    myImage.setAttribute("src", "images/Gfriend-PNG-Image-Transparent.png");
  } else {
    myImage.setAttribute("src", "images/Gfriend-PNG-Background-Image.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Gfriend Forever, ${myName}`;
    }
  }

if (!localStorage.getItem("name")) {
setUserName();
} else {
const storedName = localStorage.getItem("name");
myHeading.textContent = `Gfriend Forever, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
  };
  
  