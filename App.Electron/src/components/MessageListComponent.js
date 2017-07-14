import React, {Component} from 'react';
import moment from 'moment';
import {Avatar, List, ListItem} from "material-ui";


const Message = ({msg, ownName}) => (
        <ListItem leftAvatar={<Avatar src={msg.author.avatar}/>} primaryText={msg.author.name} secondaryText={msg.text}
                  style={{borderRadius:15, backgroundColor: ownName !== msg.author.name ? '#e8f0ff' : '#dbffe8', padding:'10px', margin:'10px', width:'70%', float:ownName !== msg.author.name ? 'right' : 'left'}}/>
);

const MessageListComponent = ({messages, ownName, onLayout}) => (
    <List style={{overflow: 'scroll', height:'70%', width:'100%', overflowX:'hidden', position:'fixed'}}>
        {messages.map((msg) => <Message msg={msg} ownName={ownName}/>)}
    </List>
);

export default MessageListComponent;