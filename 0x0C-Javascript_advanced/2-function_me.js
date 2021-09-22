function welcomeMessage(fullname) {
    return function() {alert("welcome" + fullname)};
}
let guillaume = welcomeMessage("Guillaume");
let alex = welcomeMessage("Alex");
let fred = welcomeMessage("Fred");