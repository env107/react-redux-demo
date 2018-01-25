import React from 'react';
import PropTypes from 'prop-types';


class Todo extends React.Component{

    render(){

        const {text,complete,index,TodoClick} = this.props;

        const style = {
            textDecoration:(complete?"line-through":"none"),
            cursor:(complete?"default":"pointer"),
        };

        return (
            <div>
                <a onClick={TodoClick} style={style}>
                    {index+1} {text} -{complete?"完成":"未完成"}
                </a> 
            </div>
        );
    }

}

export default Todo;

Todo.propTypes = {
    TodoClick:PropTypes.func.isRequired,
    complete:PropTypes.bool.isRequired,
    index:PropTypes.number.isRequired,
    text:PropTypes.string.isRequired,
}