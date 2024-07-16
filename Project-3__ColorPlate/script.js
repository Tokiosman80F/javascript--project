"use strict";

window.onload = () => {
  main();
};

function main() {
  const root = document.querySelector("#root");
  const output = document.querySelector("#output");
  const copyBtn = document.querySelector("#copy-btn");
  const changeBtn = document.querySelector("#change-btn");

  changeBtn.addEventListener("click", function(){
    const bgColor=generateRGB()
    root.style.backgroundColor=bgColor
    console.log("the bg color ", bgColor);
  });
}

/**
 * changeBtn addeventlistern
 * hexacode generate
 * rgb code generate
 * color change in bg
 */

const generateRGB = () => {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);
  console.log(red, green, blue);
  return `rgb(${red},${green},${blue})`;
};
// const generateHexa=()=>{
// }
