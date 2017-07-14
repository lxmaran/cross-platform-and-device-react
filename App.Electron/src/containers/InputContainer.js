/**
 * Created by Alex on 6/17/2017.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {TextField} from "material-ui";

class InputContainer extends Component {

    state = {
        text: null
    };

    constructor(props) {
        super(props);
        this.onChangeText = this.onChangeText.bind(this);
    }
    onChangeText(event) {
        this.setState({text: event.target.value});
        this.state.text ? this.props.dispatch(
            this.props.submitAction(event.target.value)
        ): null;
    }

    render() {
        return (
        <TextField onInput={this.onChangeText}
                   hintText={this.props.placeholder}
                   floatingLabelText={this.props.placeholder}
                   multiLine={false}
                   rows={1}/>
        )
    }
}

export default connect()(InputContainer);