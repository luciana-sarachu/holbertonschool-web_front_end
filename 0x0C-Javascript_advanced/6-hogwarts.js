function studentHogwarts() {
    let privateScore = 0;
    let name = null;
    function changeScoreBy(points) {
        privateScore += points;
    }
    this.setName = function (newName) {
        name = newName;
    };
    this.rewardStudent = function () {
        changeScoreBy(1);
    };
    this.penalizeStudent = function () {
        changeScoreBy(-1);
    };
    this.getScore = function () {
        return name + ": " + privateScore;
    };
}
let harry = new studentHogwarts();
harry.setName("Harry");
for (let i = 0; i < 4; i++) {
    harry.rewardStudent();
}
console.log(harry.getScore());

let draco = new studentHogwarts();
draco.setName("Draco");
draco.rewardStudent();
for (let i = 0; i < 3; i++) {
    draco.penalizeStudent();
}
console.log(draco.getScore());