import {statics}  from '../init';

function filterReducer(state = statics.FILTER.SHOW_ALL,action){
    switch(action.type){

        case statics.SHOW_TODO_FILTER:{
            return action.filter;
        }

        default:{
            return state;
        }
    }
}

export default filterReducer;