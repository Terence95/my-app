/**
 * Created by Yuicon on 2017/6/25.
 */
import React, {Component} from 'react';
import {Button, Input, Menu} from "element-react";


export default class TestComponents extends Component {

    constructor(props) {
        super(props);
        this.state = {liked:false}
    }

    handleIconClick = () => {
        console.log('click');
        this.setState({liked: !this.state.liked});
    };

    render() {
        var text = this.state.liked ? 'like' : 'haven\'t liked';
        return(
        <div>
            <p onClick={this.handleIconClick}>
                You {text} this. Click to toggle.
            </p>
        </div>)
    }
}

TestComponents.defaultProps = {
    title: 'terence'
};
