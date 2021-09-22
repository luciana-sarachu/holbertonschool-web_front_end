function createClassRoom(numbersOfStudents) {
    function studentSeat(seat) {
        return function() {
            return seat;
        }
    }
    let students = [];
    for (let i = 0; i < numbersOfStudents; i++) {
        students[i] = studentSeat(i + 1);
    }
    return students;
}
classRoom = createClassRoom(10);