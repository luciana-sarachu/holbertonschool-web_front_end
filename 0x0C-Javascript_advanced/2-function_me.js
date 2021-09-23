function welcomeMessage(fullname){
    return function() {alert("welcome " + fullname)};
}
guillaume = welcomeMessage("Guillaume");
alex = welcomeMessage("Alex");
fred = welcomeMessage("Fred");