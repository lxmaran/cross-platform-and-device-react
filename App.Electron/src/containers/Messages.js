import React from 'react';
import {connect} from 'react-redux';

import MessageListComponent from '../components/MessageListComponent';
import {updateMessagesHeight} from '../actions';
import {CircularProgress} from "material-ui";

const mapStateToProps = (state) => ({
    messages: state.chatroom.messages,
    isFetching: state.chatroom.meta.isFetching,
    ownName: state.user.name
});

const Messages = connect(
    mapStateToProps
)(({messages, ownName, isFetching, dispatch}) => {
    if (isFetching) {
        return (
            <CircularProgress size={80} thickness={5} style={{marginLeft:'35%'}}/>
        )
    } else {
        return <MessageListComponent messages={messages}
                                     ownName = {ownName}
                                     style={{minHeight: 100}}
                                     onLayout={(event) => dispatch(updateMessagesHeight(event))}/>
    }
});
export default Messages;
