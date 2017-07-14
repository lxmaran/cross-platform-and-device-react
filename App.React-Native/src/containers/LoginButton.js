import React, {Component} from 'react';
import {connect} from 'react-redux';
import {login} from '../actions/index';
import {Text, TouchableHighlight} from "react-native";
import {Button} from "native-base";

class LoginButton extends Component {
    constructor(props) {
        super(props)
        this.onLoinPress = this.onLoinPress.bind(this);
    }

    onLoinPress(){
        this.props.dispatch(login());
    }

    render() {
        return (
            <Button rounded block info onPress={this.onLoinPress}>
                <Text>Enter</Text>
            </Button>
        );
    }
}
export default connect()(LoginButton);