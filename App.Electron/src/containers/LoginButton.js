import React, {Component} from 'react';
import {connect} from 'react-redux';
import {login} from '../actions/index';
import {RaisedButton} from "material-ui";

class LoginButton extends Component {
    constructor(props) {
        super(props);
        this.onLoinPress = this.onLoinPress.bind(this);
    }

    onLoinPress(){
        this.props.dispatch(login());
    }

    render() {
        return (
            <RaisedButton style={{margin:10}} onClick={this.onLoinPress} label={'Enter'}/>
        );
    }
}
export default connect()(LoginButton);