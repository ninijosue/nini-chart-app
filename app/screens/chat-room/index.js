import React, { Component, useEffect, useState } from 'react'
import { View, Text, Image, TextInput, TouchableOpacity, Keyboard, FlatList } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";
import { customHeight, customWidth } from '../../helper/screen';
import { connect, useDispatch } from "react-redux";
import styles from "./style";
import MessagesModel from '../../model/messages';
import colors from "../../constants/colors/index";
import LinearIndicatorProgress from '../../components/indicatorBarLoading';
import { Snackbar } from 'react-native-paper';

class ChatRoom extends Component {
    constructor() {
        super();
        this.state = {
            keyboardHeight: 0,
            messages: [],
            isLoading: false,
            message: "",
            isVisible: false,
            snackData: {
                isVisible: false,
                message: "",
                backgroundColor: colors.successColor
            }
        }
    }

    keyboardDisplayed(evt) {
        const kebordOccupiedSpace = evt.endCoordinates.height.toFixed(1);
        const keyboardHeight = Number(kebordOccupiedSpace) + customHeight(11);
        this.setState({ keyboardHeight });
    }

    perfomKeyboardEffects() {
        Keyboard.addListener("keyboardDidShow", evt => this.keyboardDisplayed(evt));
        Keyboard.addListener("keyboardDidHide", evt => this.setState({ keyboardHeight: 0 }));
    }

    async getMessages() {
        const data = {
            friendId: this.props.currentViewingPasonalId,
            requesterId: this.props.currentUser
        }
        this.setState({ isLoading: true });
        const messages = await MessagesModel.getPersonalMessages(data);
        this.setState({ messages, isLoading: false });
    }

    componentDidMount() {
        this.perfomKeyboardEffects();
        this.getMessages();
    }

    async sendMessage() {
        if (message == "") return;
        const state = this.state;
        const props = this.props;
        const message = state.message;
        const smsTxtId = new Date().getTime();
        const data = {
            senderId: props.currentUser,
            recieverId: props.currentViewingPasonalId,
            text: message,
            smsTxtId,
            creationTime: new Date()
        }
        this.setState({ isLoading: true });
        const res = await MessagesModel.sendMessage(data);
        this.setState({ isLoading: false });
        if (res.status !== 200) return this.setState({
            snackData: {
                isVisible: true,
                message: res.message,
                backgroundColor: colors.errorColor
            }
        });
        this.getMessages();
    }

    onDismissSnackBar() {
        this.setState({
            snackData: {
                isVisible: false,
                message: "",
                backgroundColor: colors.successColor
            }
        });
    }

    messagesRender(message ) {
        const senderId = message.senderId;
        const currentUser = this.props.currentUser;
        const isSelfSentMessage = senderId == currentUser;
        return (
            <View>
                {
                    !isSelfSentMessage
                        ? (
                            <View style={styles.geoustRow}>
                                <Image style={styles.personalProfilIdentifier} source={require("../../assets/profil.png")} />
                                <View style={styles.geoustMessage} >
                                    <Text style={styles.geoustMessageText}>{message.text}</Text>
                                </View>
                            </View>
                        )
                        : (
                            <View style={styles.selfMessageContainer}>
                                <View style={styles.selfMessage}>
                                    <Text style={styles.selfMessageText}>{message.text}</Text>
                                </View>
                            </View>
                        )
                }

            </View>
        )
    }

    render() {
        const state = this.state;
        const messageFieldPosition = -customHeight(140) + this.state.keyboardHeight;
        const messegeContainerPosition = customHeight(135) - this.state.keyboardHeight;
        const messages = state.messages;
        return (
            <View >
                <Snackbar onDismiss={_ => this.onDismissSnackBar()} style={{ left: customWidth(4), backgroundColor: state.snackData.backgroundColor }}
                    visible={state.snackData.isVisible}>{state.snackData.message}</Snackbar>
                {this.state.isLoading ? <LinearIndicatorProgress /> : <View />}
                <View style={styles.chatRoomMessagesContainer}>
                    <FlatList style={{...styles.messageDisplayer, height: messegeContainerPosition }} data={messages} renderItem={({item} )=> this.messagesRender(item)} keyExtractor={item => item.ref.id} />
                    <View style={{ ...styles.sendMessageRow, bottom: messageFieldPosition }}>
                        <TextInput value={state.message} onChangeText={message => this.setState({ message })} placeholder="Message . . ." style={styles.messageField} />
                        <View style={styles.submitionBtnSection}>
                            <TouchableOpacity onPress={_ => this.sendMessage()} activeOpacity={0.8}>
                                <View style={styles.submitButton} >
                                    <Icon style={styles.sendIcon} size={customWidth(7)} name="send" />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
};

const mapStateToProps = state => ({
    currentViewingPasonalId: state.currentViewingPasonalId,
    currentUser: state.user.uid
});

const mapDispatchToProps = dispatch => ({
    updateCurrentMessagingUser: id => dispatch({ id, type: "CURRENTVIEWINGMESSAGEPERSONALID" })
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom);