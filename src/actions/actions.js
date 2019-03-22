import {GET_DATA, SET_PERSON_INFO} from "../consts/constants";

export const acGetData = (track) => {
    return {
        type: GET_DATA,
        track
    }
};

export const acSetPersonInfo = (data) => {
   return{
       type: SET_PERSON_INFO,
       personInfo: data
   }
};