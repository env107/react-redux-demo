//Todo Reducer
import {statics}  from '../init';

function todoReducer(state = [],action){
    switch (action.type){

        case statics.ADD_TODO:{
            return [...state,
                {
                    text:action.text,
                    complete:false
                }
            ]
        }

        case statics.TOGGLE_TODO:{
     
            return state.map((todo,index)=>{
                if(index== action.index){
                    return Object.assign({},todo,{
                        complete:!todo.complete
                    });
                }
                return todo;
            });
        }

        default:{
            return state;
        }
    }
};

export default todoReducer;