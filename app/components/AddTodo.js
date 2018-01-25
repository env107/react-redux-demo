import React from 'react';
import PropTypes from 'prop-types';

class AddTodo extends React.Component{


    handleClick(e){
        let input = this.input;
        var text = input.value.trim(); 
        //通过上一层方法到属性中，添加代办事务
        this.props.AddTodoClick(text);
        input.value = '';
    }

    render(){
        return (
            <div>
                <input type="text" placeholder="在此处输入待办事务" ref={(input)=>this.input=input} />
                <button onClick={(e)=>this.handleClick(e)} >添加</button>
            </div>
        );
    }
}

export default AddTodo;

//指定相关属性的类型
AddTodo.propTypes = {
    AddTodoClick:PropTypes.func.isRequired
}