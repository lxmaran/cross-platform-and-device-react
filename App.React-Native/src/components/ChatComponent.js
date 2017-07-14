import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native'

import Messages from '../containers/Messages';
import InputContainer from '../containers/InputContainer';
import {sendMessage} from '../actions';

import {connect} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
    Body, Button, Container, Content, Footer, FooterTab, Header, Icon, Input, Item, Left, Thumbnail,
    Title
} from "native-base";
import ReactNative from 'react-native';

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
            text: null
        };
    }

    componentDidMount() {
        this.scrollToBottom(false);
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    onScrollViewLayout = (event) => {
        const layout = event.nativeEvent.layout;
        this.setState({
            scrollViewHeight: layout.height
        });
    };

    onInputLayout = (event) => {
        const layout = event.nativeEvent.layout;

        this.setState({
            inputHeight: layout.height
        });
    }

    onChangeText = text => {
        console.log(text);
        this.setState({text: text})
        console.log(this.state.text)
    };

    scrollToBottom(animate = true) {
        const { scrollViewHeight, inputHeight } = this.state,
            { chatHeight } = this.props;

        const scrollTo = chatHeight - scrollViewHeight + inputHeight;

        if (scrollTo > 0) {
            this.refs.scroll.scrollToPosition(0, scrollTo, animate)
        }
    }

    _scrollToInput(reactRef) {
        // this.refs.scroll.scrollToFocusedInput(ReactNative.findNodeHandle(reactRef));
    }


    sendMessage = () => {
        this.props.dispatch(this.state.text ? sendMessage(this.state.text, this.props.user) : () => {
        })
    };

    render() {
        return (
            <Container>
                <Header style={{backgroundColor: '#9791FF'}} androidStatusBarColor="#4f4f4f">
                    <Left>
                        <Thumbnail small
                                   source={{uri: this.props.user.avatar}}/>
                    </Left>
                    <Body>
                    <Title>Water cooler chat</Title>
                    </Body>
                </Header>
                <Content style={{flex: 1}}>
                    <KeyboardAwareScrollView ref="scroll" onLayout={this.onScrollViewLayout}>
                        <Messages/>
                    </KeyboardAwareScrollView>
                </Content>
                <Footer>
                    <FooterTab style={{backgroundColor:"white"}}>
                        <Button full transparent onLayout={this.onInputLayout}>
                            <Item rounded>
                                <Input
                                    ref="input"
                                    onLayout={this.onInputLayout}
                                    onFocus={this._scrollToInput.bind(this)}
                                    style={{backgroundColor: '#cddcf4'}}
                                    onChangeText={(text) => this.onChangeText(text)}
                                    submitAction={this.sendMessage}
                                    placeholder="Say something cool ..."/>
                                <Button round transparent onPress={this.sendMessage}>
                                    <Icon name="send"/>
                                </Button>
                            </Item>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        )
    }
}
export default connect(mapStateToProps)(ChatComponent);