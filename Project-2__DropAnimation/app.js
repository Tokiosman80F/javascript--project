var container = document.querySelector(".container");
// drop function
function dropped() {
  const dropSpan = document.createElement("span");
  dropSpan.classList.add("drop");
  dropSpan.style.top = Math.random() * innerHeight + "px";
  dropSpan.style.left = Math.random() * innerWidth + "px";
  container.appendChild(dropSpan);
  setTimeout(() => {
    dropSpan.remove();
  }, 6000);
}

setInterval(dropped, 200);
