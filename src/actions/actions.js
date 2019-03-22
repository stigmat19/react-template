import {GET_DATA} from "../consts/constants";

export const acGetData = (track) => {
    return{
        type: GET_DATA,
        track
    }
};