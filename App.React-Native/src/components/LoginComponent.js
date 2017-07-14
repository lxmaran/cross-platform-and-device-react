import React, {Component} from 'react';
// import {View, Text, TextInput, TouchableHighlight} from 'react-native'
import LoginButton from '../containers/LoginButton'
import {connect} from 'react-redux';
import InputContainer from "../containers/InputContainer";
import {setUserName, setUserAvatar} from "../actions/index";
import {Container, Body, Text, Spinner, Item, Content, Card, CardItem, Form, Input, Thumbnail} from "native-base";

const mapStateToProps = (state) => ({
    authorizing: state.user.authorizing,
    avatar: state.user.avatar
});

class LoginComponent extends Component {
    render() {
        return (
            <Container style={{alignItems: 'center', justifyContent: 'center'}}>
                {this.props.authorizing ?
                    <Content><Spinner style={{marginTop: 140}} color={'orange'}/></Content> :
                    <Content>
                        <Card style={{padding: 40, marginTop: 90, justifyContent: 'center', alignItems: 'center'}}>
                            <CardItem>
                                <Text>Welcome to the water cooler chat</Text>
                            </CardItem>
                            {<Thumbnail large round size={80} source={{uri: this.props.avatar}}/>}
                            <CardItem>
                                <InputContainer placeholder="Give us an avatar URL"
                                                submitAction={setUserAvatar}
                                                submitOnBlur
                                                noclear
                                                ref="avatar"/>
                            </CardItem>
                            <CardItem>
                                <InputContainer placeholder="Type a funny name" submitAction={setUserName}
                                                submitOnBlur
                                                noclear
                                                ref="username"/>
                            </CardItem>
                            <LoginButton />
                        </Card>
                    </Content>}
            </Container>
        )
    }
}
export default connect(mapStateToProps)(LoginComponent);