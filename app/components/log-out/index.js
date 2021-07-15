import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import styles from "./style";
import UserModel from '../../model/user';

const performLogout = async dispatch =>{
    const status = await UserModel.logout();
    if(status == 200) dispatch({type: "UPDATEUSER"});
}

const Logout = props => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    return (
        <TouchableOpacity onPress={_=> performLogout(dispatch)} activeOpacity={.5}>
            <View style={styles.container}>
            <Text style={styles.logout}>Log out</Text>
        </View>
        </TouchableOpacity>
    )
}

export default Logout;