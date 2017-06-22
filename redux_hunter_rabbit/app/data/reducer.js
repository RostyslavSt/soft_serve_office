import Hare from "./hare.js";
import Hunter from "./hunter.js";

let hare = new Hare(3, 4);
let hunter1 = new Hunter('Tom', 57);
let hunter2 = new Hunter('Jack', 19);

let listHunters = [hunter1, hunter2];

let initialState = {
    location: {
        x: hare.x,
        y: hare.y
    },
    hunters: listHunters
}


export default function Reducer(state = initialState, action) {
    switch (action.type) {
        case "changeCoord":
            return Object.assign({}, state, {
                location: {
                    x: Math.round(Math.random() * (600 - 1) + 1),
                    y: Math.round(Math.random() * (600 - 1) + 1)
                }
            })

        case "addHunter":
            let newHunter = new Hunter(action.name);
            state.hunters.push(newHunter);
            console.log(action.name);

            return Object.assign({}, state, {
                hunters: state.hunters
            })

        default:
            return state;
    }
}