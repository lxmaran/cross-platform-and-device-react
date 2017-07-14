import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Card, CardHeader, CircularProgress, Divider, Paper, Snackbar, TextField} from "material-ui";
import InputContainer from "../containers/InputContainer";
import {setUserAvatar, setUserName} from "../actions/index";
import LoginButton from "../containers/LoginButton";
import isElectron from 'is-electron';

const mapStateToProps = (state) => ({
    authorizing: state.user.authorizing,
    avatar: state.user.avatar
});

class LoginComponent extends Component {
    render() {
        return (
            <Card style={{padding: 200, flex: 1, width: '100%'}}>
                <CardHeader titleColor={'#ffffff'}
                            title="Welcome to water cooler chat"
                            style={{
                                backgroundImage: `url('http://www.starrywonders.com/horseheadcomposite.jpg')`,
                                width: '50%',
                                marginLeft: '25%'
                            }}/>
                <Paper zDepth={5} rounded={false}
                       style={{padding: '20px', color: 'grey200', width: '50%', marginLeft: '25%'}}>
                    {!this.props.authorizing ?
                        <div>
                            {isElectron() ?
                                <div>
                                    <InputContainer placeholder="Give us an avatar URL" submitAction={setUserAvatar}/>
                                    <Divider/>
                                </div> : null}
                            <InputContainer placeholder="Type a funny name" submitAction={setUserName}/>
                            <Divider insert={true} style={{color: 'grey200'}}/>
                            <LoginButton />
                        </div> : <CircularProgress size={80} thickness={5} style={{marginLeft:'35%'}}/>}
                </Paper>
                <Snackbar
                    open={!isElectron()}
                    message={'Since you are in a web browser you will not be able to add an avatar'}
                    autoHideDuration={10000}
                />
            </Card>
        )
    }
}
export default connect(mapStateToProps)(LoginComponent);
