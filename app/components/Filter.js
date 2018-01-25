import React from 'react';
import PropTypes from 'prop-types';
import {statics} from "../init";
class Filter extends React.Component{

    //判断元素是否可以点击
    getFilterEle(filter,name){
        if(filter == this.props.filter){
            //当前过滤元素
            return name;
        }
        return (
            <a href="javascript:void(0)"
                onClick={(e)=>{
                    e.preventDefault();
                    this.props.FilterClick(filter)
                }}
            >
                {name}
            </a>
        );
    }

    render(){

         const {filter} = this.props;

        return (
            <div>
                过滤:
                {this.getFilterEle(statics.FILTER.SHOW_ALL,"所有")}
                {' '}
                {this.getFilterEle(statics.FILTER.SHOW_COMPLETED,"已完成")}
                {' '}
                {this.getFilterEle(statics.FILTER.SHOW_UNDONE,"未完成")}
            </div>
        );
    }
}

export default Filter;

Filter.propTypes = {
    FilterClick:PropTypes.func.isRequired,
    filter:PropTypes.oneOf([
        statics.FILTER.SHOW_ALL,
        statics.FILTER.SHOW_COMPLETED,
        statics.FILTER.SHOW_UNDONE
    ]).isRequired
}