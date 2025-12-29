// frontend/main.js
fetch("/api/greet")
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("greeting").innerText = data.message;
  })
  .catch(() => {
    document.getElementById("greeting").innerText = "Hello Swati (offline)";
  });
