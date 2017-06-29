import Hare from "../data/hare.js";
import Hunter from "../data/hunter.js";
import {
    listHunterLogoPath
} from "../data/hunterLogoPath.js"

let hare = new Hare(3, 4);
let hunter1 = new Hunter('Tom', 57);
let hunter2 = new Hunter('Jack', 19);

let listHunters = [hunter1, hunter2];

let initialState = {
    location: {
        x: hare.x,
        y: hare.y
    },
    hunters: listHunters,
    hunterLogoPath: listHunterLogoPath
}

export default function Reducer(state = initialState, action) {
    switch (action.type) {
        case "changeCoord":
            return Object.assign({}, state, {
                location: {
                    x: Math.round(Math.random() * (1000 - 1) + 1),
                    y: Math.round(Math.random() * (500 - 1) + 1)
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