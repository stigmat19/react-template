import {GET_DATA, SET_PERSON_INFO} from "../consts/constants";

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
        case SET_PERSON_INFO:{
            return{
                ...state, personInfo: action.personInfo
            };
        }
        default: return state;
    }
};

export default rdGetData;