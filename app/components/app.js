import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Filter from './Filter';
import {statics}  from '../init';
import {add_todo,toggle_todo,show_filter} from '../action/index';
class App extends React.Component{

    render(){

        const { dispatch, todos, filter } = this.props

        return (
            <div>
                <div>APP Container 2.3</div>
                <AddTodo AddTodoClick={(text)=>dispatch(add_todo(text))} />
                <TodoList todos={todos} TodoClick={(index)=>dispatch(toggle_todo(index))} />
                <Filter filter={filter} FilterClick={(filter)=>dispatch(show_filter(filter))} />
            </div>
        );
    }

}

//过滤
function getTodoList(todos,filter){
    if(filter == statics.FILTER.SHOW_ALL){
        return todos;
    }else if(filter == statics.FILTER.SHOW_COMPLETED){
        return todos.filter((todo)=>todo.complete);
    }else if(filter == statics.FILTER.SHOW_UNDONE){
        return todos.filter((todo)=>!todo.complete);
    }
}
//注入
function injectState(state){
    return {
        filter:state.filter,
        todos:getTodoList(state.todos,state.filter)
    }   
}


export default connect(injectState)(App);