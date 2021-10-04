function changeMode(size, weight, transform, background, color) {
    return function () {
        document.documentElement.style.fontSize = size;
        document.documentElement.style.fontWeight = weight;
        document.documentElement.style.textTransform = transform;
        document.documentElement.style.backgroundColor = background;
        document.documentElement.style.color = color;
    };
}

function main() {
    let spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    let darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    let screamMode = changeMode(12, "normal", "lowercase", "white", "black");

    let paragraph = document.createElement("p");
    paragraph.innerText = "Welcome Holberton!";
    document.body.appendChild(paragraph);

    let buttonSpooky = document.createElement("button");
    buttonSpooky.innerText = "Spooky";
    buttonSpooky.setAttribute("id", "spooky");
    document.body.appendChild(buttonSpooky);
    document.getElementById("spooky").addEventListener("click", spooky);

    let buttonDark = document.createElement("button");
    buttonDark.innerText = "Dark Mode";
    buttonDark.setAttribute("id", "darkmode");
    document.body.appendChild(buttonDark);
    document.getElementById("darkmode").addEventListener("click", darkMode);

    let bttonScream = document.createElement("button");
    bttonScream.innerText = "Scream Mode";
    bttonScream.setAttribute("id", "screammode");
    document.body.appendChild(bttonScream);
    document.getElementById("screammode").addEventListener("click", screamMode);
}
main();