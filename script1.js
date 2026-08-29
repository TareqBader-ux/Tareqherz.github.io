let name = localStorage.getItem("Playername");
let firstVisit = localStorage.getItem("firstVisit");

if (firstVisit === "true") {
    document.getElementById("welcomeback").textContent =
        `Welcome, ${name}!`;

    localStorage.setItem("firstVisit", "false");
} else {
    document.getElementById("welcomeback").textContent =
        `Welcome back, ${name}!`;
}