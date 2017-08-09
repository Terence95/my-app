/**
 * Created by Yuicon on 2017/6/25.
 */
import React, {Component} from 'react';
import {Button, Input, Menu} from "element-react";


export default class TestComponents extends Component {

    propTypes: {
            title:React.PropTypes.string.isRequired
        }
    render() {
        return <h1>hello world {this.props.title}</h1>
    }

}