let savedName = localStorage.getItem("Playername");

if (savedName) {
    window.location.href = "./index1.html";
}

function printname() {
    let name = document.getElementById("name").value;

    if (name === "") {
        name = "Player";
    } if (name==="Mada")  {
        documenl.body.innerHTML= ("<h1>wait are you Mada, like the school?</h1>");
        document.body.innerHTML= (`<button> <a href="./index1.html">Yes</a> </button>`);
          }

    }

    localStorage.setItem("Playername", name);

    window.location.href = "./index1.html";




















    console.log("There is nothing here, turn around");