import {GET_DATA} from "../consts/constants";

const initialState = [
    'My home playlist',
    'My work playlist'
];

const rdGetData = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA:{
            return{
                ...state, test: action.track
            };
        }
        default: return state;
    }
};

export default rdGetData;