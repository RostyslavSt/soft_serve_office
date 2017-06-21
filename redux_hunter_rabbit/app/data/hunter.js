export default class Hunter {
    constructor(name, age) {
        this.count = 1;
        this.name = name || 'hunter' + this.count++;
        this.age = age || 35;
        this.hareCoordinates = {};
    }
    receiveCoordinates(data) {
        this.hareCoordinates = data;
        console.log(data);
        return (data) => console.log(`${this.name} said: "I see the hare. Hare is on: {x: ${data.x} y: ${data.y}}"`);
    }
}