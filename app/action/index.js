/*动作创建函数 */
import {statics}  from '../init';

export const add_todo = (text)=>{
    return {
        type:statics.ADD_TODO,
        text
    }
};

export const toggle_todo = (index)=>{
 
    return {
        type:statics.TOGGLE_TODO,
        index
    };
};

export const show_filter = (filter)=>{
    return {
        type:statics.SHOW_TODO_FILTER,
        filter
    };
};