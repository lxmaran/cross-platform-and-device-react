/**
 * Created by Alex on 6/17/2017.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Input, Item, Label} from 'native-base';

class InputContainer extends Component {

    state = {
        text: null
    };

    constructor(props) {
        super(props);
    }

    onChangeText = text => {
        this.setState({text: text})
    };

    onSubmitEditing = () => {
        this.state.text ? this.props.dispatch(
            this.props.submitAction(this.state.text)
        ): null;

        if (!this.props.noclear) {
            this.setState({
                text: null
            });
        }
    }

    onFocus = (event) => {
        if (this.props.onFocus) {
            this.props.onFocus(this.refs.input);
        }
    }

    onBlur = () => {
        if (this.props.submitOnBlur) {
            this.onSubmitEditing();
        }
    }

    onLayout = (event) => {
        if (this.props.onLayout) {
            this.props.onLayout(event);
        }
    }

    render() {
        return (
            <Item style={{paddingLeft:10}}>
                <Input onChangeText={this.onChangeText}
                       placeholder={this.props.placeholder}
                       onSubmitEditing={this.onSubmitEditing}
                       onLayout={this.onLayout}
                       value={this.state.text}
                       onFocus={this.onFocus}
                       onBlur={this.onBlur}
                       ref="input"/>
            </Item>
        )
    }
}

export default connect()(InputContainer);