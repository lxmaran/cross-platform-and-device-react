/**
 * Created by Alex on 6/17/2017.
 */
import React, {Component} from 'react';
import moment from 'moment';
import {Body, Button, Left, List, ListItem, Right, Text, Thumbnail} from "native-base";

const Message = ({msg, ownName}) => (
        <ListItem avatar style={{margin: 5, paddingLeft: 3, backgroundColor: ownName !== msg.author.name ? '#e8f0ff' : '#dbffe8', borderRadius: 15}}>
            <Left>
                {ownName !== msg.author.name ? <Thumbnail small source={{uri: msg.author.avatar}}/> : null}
            </Left>
            <Body>
            <Text>{msg.author.name}</Text>
            <Text note>{msg.text}</Text>
            </Body>
            <Right>
                <Text note>{moment(msg.time).from(Date.now())}</Text>
            </Right>
        </ListItem>
);

const MessageListComponent = ({messages, ownName, onLayout}) => (
    <List dataArray={messages}
          autoHideHeader={true}
          renderRow={msg => <Message msg={msg} ownName={ownName}/>}
          onLayout={onLayout}
    />
);

export default MessageListComponent;