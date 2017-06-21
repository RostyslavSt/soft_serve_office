import Hunter from "./hunter.js";

let hunter1 = new Hunter('Tom', 57);
let hunter2 = new Hunter('Jack', 19);
let hunter3 = new Hunter('Mike', 45);
// let listHunters = [hunter1, hunter2, hunter3];

let initialState = {
    location: {
        x: 10,
        y: 20
    },
    hunters: [hunter1, hunter2, hunter3]
}
export default function Reducer(state = initialState, action) {
    switch (action.type) {
        case "changeCoord":
            return Object.assign({}, state, {
                location: {
                    x: Math.round(Math.random() * (50 - 1) + 1),
                    y: Math.round(Math.random() * (50 - 1) + 1)
                }
            })

        case "addHunter":
        // let newHun
            return Object.assign({}, state, {
                hunters: [{
                    name: "John",
                    age: 22
                }]
            })

        default:
            return state;
    }
}