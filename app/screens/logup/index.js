import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native';
import { View, Text, Image, Keyboard } from 'react-native';
import InputField from '../../components/input-field';
import RecentButton from '../../components/RecentButton/index';
import { emailValidatorPerttan } from '../../constants/variables';
import getKeyboardHeight from '../../helper/generators/keyboardHeight';
import { customHeight } from '../../helper/screen';
import styles from "./style";
import colors from '../../constants/colors';
import UserModel from '../../model/user';
import { Snackbar } from 'react-native-paper';
import LinearIndicatorProgress from '../../components/indicatorBarLoading';
import onDismissSnackBar from '../../helper/other/dismissSnackBar';
import { useDispatch } from 'react-redux';


const performEffects = setKeyboardHeight => {
    getKeyboardHeight(setKeyboardHeight)
}

const setValue = (key, value, data, setData) => {
    switch (key) {
        case "email":
            setData({ ...data, email: value });
            break;
        case "password":

            setData({ ...data, password: value });
            break;
        default:
            setData({ ...data, [key]: value });
            break;
    }
}

const performSubmition = 
async (data, setSnackData, isLoading, setLoading, dispatch) => {
    if(isLoading) return;
    const email = data.email;
    const password = data.password;
    const confirmPassword = data.confirmPassword;
    const isValidEmail = emailValidatorPerttan.test(email);
    if (!isValidEmail) return setSnackData({
        isVisible: true,
        message: "The provided email is not valid. Please check!",
        backgroundColor: colors.errorColor
    });

    if (password.lenght < 6) return setSnackData({
        isVisible: true,
        message: "Password must be more than 5 characters.",
        backgroundColor: colors.errorColor
    });
    if (password !== confirmPassword) return setSnackData({
        isVisible: true,
        message: "Password do not match!",
        backgroundColor: colors.errorColor
    });
    delete data.confirmPassword;
    setLoading(true)
    const res = await UserModel.createAccount(data);
    setLoading(false);
    if(res.status !== 200) return setSnackData({
        isVisible: true,
        message: res.message,
        backgroundColor: colors.errorColor
    });
    dispatch({type: "UPDATEUSER"});
}

const Logup = props => {
    useEffect(_ => performEffects(setKeyboardHeight));

    const [snackData, setSnackData] = useState({
        isVisible: false,
        message: "",
        backgroundColor: colors.successColor
    });
    const dispatch = useDispatch();
    const [keyboardHeight, setKeyboardHeight] = useState(0);
    const [data, setData] = useState({});
    const [isLoading, setLoading] = useState(false);

    const marginBottom = keyboardHeight !== 0 ? customHeight(100) : 0;
    return (
        <ScrollView >
         <Snackbar onDismiss={_=>onDismissSnackBar(setSnackData)} style={{backgroundColor: snackData.backgroundColor}} visible={snackData.isVisible}>{snackData.message}</Snackbar>
           {isLoading? <LinearIndicatorProgress /> : <View />}
            <View style={{ ...styles.container, marginBottom }}>
                <Image style={styles.logo} source={require("../../assets/Nini.png")} />
                <View style={styles.createAccountSugestionWords}>
                    <Text style={styles.logupWords}>Join nini app by creating new account </Text>
                </View>
                <View style={styles.fieldsContainer}>
                    <InputField onChangeText={(text) => setValue("email", text, data, setData)} keyboardType="email-address" placeholder="Email" />
                    <View style={styles.minWideSpace} />
                    <InputField onChangeText={text => setValue("username", text, data, setData)} placeholder="Username" />
                    <View style={styles.minWideSpace} />
                    <InputField onChangeText={text => setValue("password", text, data, setData)}
                        secureTextEntry={true} placeholder="Password" />
                    <View style={styles.minWideSpace} />
                    <InputField onChangeText={text => setValue("confirmPassword", text, data, setData)} secureTextEntry={true} placeholder="Confirm password" />
                </View>
                <View style={styles.submitBtnContainer}>
                    <RecentButton onPress={_ => performSubmition(data, setSnackData,isLoading, setLoading,dispatch)} mainStyle={styles.logupBtn} text="Logup" />
                </View>
            </View>
        </ScrollView>
    )
}

export default Logup;