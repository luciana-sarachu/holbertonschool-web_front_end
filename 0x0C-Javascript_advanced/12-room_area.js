let roomDimensions = {
    width: 50,
    length: 100,
    getArea: function () {
        return this.width * this.length;
    }
};
let boundGetArea = roomDimensions.getArea.bind(roomDimensions);

// print to see if it works
// console.log(roomDimensions.getArea()) 