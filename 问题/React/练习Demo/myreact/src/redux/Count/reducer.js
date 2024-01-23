import { ADD, SUBTRACTION } from './constent'
const initCount = 0
export default function reducer(preState = initCount, action) {
    console.log(preState);
    const { type, data } = action
    switch (type) {
        case ADD:
            return preState + data
        case SUBTRACTION:
            return preState - data
        default:
            return preState
    }
}