export default class Hunter {
    constructor(name, age) {
        this.name = name || 'hunter',
        this.age = age || 35;
    }
    
    // receiveCoordinates(data) {
    //     this.hareCoordinates = data;
    //     console.log(data);
    //     return (data) => console.log(`${this.name} said: "I see the hare. Hare is on: {x: ${data.x} y: ${data.y}}"`);
    // }
}