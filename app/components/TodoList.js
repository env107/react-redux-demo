import React from 'react';
import PropTypes from 'prop-types';
import Todo from "./Todo";
class TodoList extends React.Component{

    render(){

        const todos = this.props.todos;

        const items = todos.map((todo,index)=>{
            return <Todo key={index} {...todo} TodoClick={()=>{this.props.TodoClick(index)}} index={index}  />
        });
  

        return (
            <div>
                <ul>
                    {items}
                </ul>
            </div>
        );
    }
}

export default TodoList;

//指定相关属性的类型
TodoList.propTypes = {
    todos:PropTypes.arrayOf(PropTypes.shape({
        text:PropTypes.string.isRequired,
        complete:PropTypes.bool.isRequired
    })),
    TodoClick:PropTypes.func.isRequired
}