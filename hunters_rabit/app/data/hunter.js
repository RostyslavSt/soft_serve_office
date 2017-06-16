export default class HunterStore {
    constructor(name) {
        this.count = 1;
        this.name = name || 'hunter' + this.count++;
        this.hareCoordinates = {};
    }
    receiveCoordinates(data) {
        this.hareCoordinates = data;
        return (data) => console.log(`${this.name} said: "I see the hare. Hare is on: {x: ${data.x} y: ${data.y}}" + ${data.x}`);
    }
}