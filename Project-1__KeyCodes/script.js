const insert = document.getElementById("insert");

window.addEventListener("keydown", (event) => {
  console.log("The key", event.key);
  console.log("The code", event.code);
  console.log("The keyCode", event.keyCode);

  insert.innerHTML = `
    <div class="insert_key">
    <p>key:</p>
    ${event.key === " " ? "Space" : event.key}
    </div>
    <div class="insert_key">
    <p>keyCode:</p>
    ${event.keyCode}
    </div>
    <div class="insert_key">
    <p>code:</p>
    ${event.code}
    </div>
    `;
});
