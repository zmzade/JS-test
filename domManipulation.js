const myButton = document.createElement("button");
document.body.appendChild(myButton);
myButton.innerHTML = "Button";
myButton.addEventListener("click", getRandImage);
const imgArray = ["images/1.jpg", "images/2.jpg", "images/3.jpg"];
function getRandImage() {
  let randImg = Math.floor(Math.random * imgArray.length);
  const imgTag = document.createElement("img");
  document.body.appendChild(imgTag);
  imgTag.setAttribute("src", randImg);
}
