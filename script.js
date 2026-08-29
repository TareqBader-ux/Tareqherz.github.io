let savedName = localStorage.getItem("Playername");

if (savedName) {
    window.location.href = "./index1.html";
}

function printname() {
    let name = document.getElementById("name").value;

    if (name === "") {
        name = "Player";
    }

    localStorage.setItem("Playername", name);

    window.location.href = "./index1.html";
}