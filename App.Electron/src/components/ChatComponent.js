import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {connect} from 'react-redux';
import {
    AppBar, Avatar, BottomNavigation, BottomNavigationItem, Card, CommunicationChatBubble, FlatButton, List, ListItem,
    Paper,
    RaisedButton,
    Subheader, TextField
} from "material-ui";
import {sendMessage} from '../actions';

import Messages from '../containers/Messages';


const mapStateToProps = (state) => ({
    chatHeight: state.chatroom.meta.height,
    user: state.user
});

class ChatComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollViewHeight: 0,
            inputHeight: 0,
            text: ''
        };

        this.onChangeText = this.onChangeText.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
    }

    onChangeText(event) {
        this.setState({text: event.target.value});
    }

    sendMessage = () => {
        this.props.dispatch(this.state.text ? sendMessage(this.state.text, this.props.user) : () => {
        });
        this.setState({text: ''});
    };

    render() {
        return (
            <div>
                <AppBar
                    title="Water cooler chat"
                    iconElementLeft={
                        <Avatar src={this.props.user.avatar}/>
                    }
                />
                <Card style={{flex: 1, width: '100%', display: 'block'}}>
                    <Messages/>
                    <BottomNavigation style={{top: '80%', position: 'fixed'}}>
                        <Paper style={{padding:'10px'}}>
                            <TextField onChange={this.onChangeText}
                                       value={this.state.text}
                                       style={{width: '84%', borderRadius: 15, height: '100%'}}
                                       placeholder={'Start typing...'}/>
                            <RaisedButton label="Send" style={{width: '15%', height: '100%', marginLeft:'5'}}
                                          secondary={false}
                                          onClick={this.sendMessage}
                                          icon={<FontIcon className="muidocs-icon-custom-github"/>}
                            />
                        </Paper>

                    </BottomNavigation>
                </Card>
            </div>
        )
    }
}
export default connect(mapStateToProps)(ChatComponent);