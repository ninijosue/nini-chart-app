import React, { Component, useEffect, useState } from 'react'
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import LinearIndicatorProgress from '../../components/indicatorBarLoading';
import { connect } from "react-redux";
import MessagesModel from '../../model/messages';
import UserModel from '../../model/user';
import styles from "./style";
import { customHeight } from '../../helper/screen';

class MessagesList extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: false,
            users: []
        }
    }

    async getUsers() {
        this.setState({ isLoading: true })
        const users = await MessagesModel.getAllUsers();
        this.setState({ users, isLoading: false });
    }

    componentDidMount() {
        this.getUsers();
    }

    chatHandler(id) {
        this.props.updateCurrentMessagingUser(id);
        this.props.navigation.navigate("Chart room");
    }

    renderItem({ item }) {
        const id = item.ref.id;
        const user = this.props.user;
        if(user && user.uid == id) return<View />;
        return (
            <TouchableOpacity activeOpacity={0.5} onPress={_ => this.chatHandler(id)}>
                <View style={styles.messagesListPersonalChat}>
                    <Image style={styles.personalChatList} source={require("../../assets/profil.png")} />
                    <View style={styles.personalChatIdentifier}>
                        <Text style={styles.personalChatNames} numberOfLines={1}>{item.username}</Text>
                        <Text style={styles.personalMessage} numberOfLines={1}>{item.email}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    render(props) {
        return (
            <View>
                {this.state.isLoading ? <LinearIndicatorProgress /> : <View />}
                <View style={styles.messagesChatList}>
                    <FlatList data={this.state.users} renderItem={item => this.renderItem(item)} keyExtractor={item => item.ref.id} />
                </View>
            </View>
        )
    }
};

const mapStateToProps = state=>({user: state.user})

const mapDispatchToProps = dispatch => ({
    updateCurrentMessagingUser: id => dispatch({ id, type: "CURRENTVIEWINGMESSAGEPERSONALID" })
})

export default connect(mapStateToProps,mapDispatchToProps)(MessagesList)