function changeMode(size, weight, transform, background, color) {
    return function(){
        document.body.style.fontSize = size;
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    }
}
function main() {
spooky = changeMode(9, bold, uppercase, pink, green);
darkMode = changeMode(12, bold, capitalize, black, white);
screamMode = changeMode(12, normal, lowercase, white, black);
let paragraph = document.createElement("p");
let content = document.createTextNode("Welcome Holberton!");
paragraph.appendChild(content);
document.body.appendChild(paragraph);
}
