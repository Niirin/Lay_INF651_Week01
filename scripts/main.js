let myHeading = document.querySelector("h1");
let myButton = document.querySelector("button");

  
myHeading.textContent= "Hello World!"
//This is how you comment in JS
const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox2.jpg");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
};


function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName){
        setUserName();
    }
    else {
        localStorage.setItem("name", myName);
        myHeading.textContent= `Mozilla is so cool, ${myName}`;    
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName=localStorage.getItem("name");
    myHeading.textContent= `Mozilla is so cool, ${storedName}`;
}

myButton.onclick = function() {
    setUserName();
  };
