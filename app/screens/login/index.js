import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import InputField from '../../components/input-field';
import RecentButton from '../../components/RecentButton/index';
import { emailValidatorPerttan } from '../../constants/variables';
import getKeyboardHeight from '../../helper/generators/keyboardHeight';
import onDismissSnackBar from '../../helper/other/dismissSnackBar';
import { customHeight, customWidth } from '../../helper/screen';
import colors from "../../constants/colors";
import styles from "./style";
import UserModel from '../../model/user';
import { Snackbar } from 'react-native-paper';
import LinearIndicatorProgress from '../../components/indicatorBarLoading';
import { useDispatch } from 'react-redux';


const performEffects = setKeyboardHeight => {
    getKeyboardHeight(setKeyboardHeight)
}

const performLogin = 
async (data, isLoading, setLoading, setSnackData, dispatch) => {

    const email = data.email;
    const password = data.password;

    if(isLoading) return;
    if(!password || password == "" || !email || email == "") return;
    if(emailValidatorPerttan.test(data)) return setSnackData({
        isVisible: true,
        message: "You provided an invalid email. Please check!",
        backgroundColor: colors.errorColor
    });

    setLoading(true)
    const res = await UserModel.login(data);
    setLoading(false);

    if(res.status !== 200) return setSnackData({
        isVisible: true,
        message: res.message,
        backgroundColor: colors.errorColor
    });
    dispatch({type: "UPDATEUSER"});
    
}

const Login = props => {
    useEffect(_ => performEffects(setKeyboardHeight));
    const navigation = useNavigation();
    const [snackData, setSnackData] = useState({
        isVisible: false,
        message: "",
        backgroundColor: colors.successColor
    });
    const [data, setData] = useState();
    const [isLoading, setLoading] = useState(false);
    const [keyboardHeight, setKeyboardHeight] = useState(0);
    const marginBottom = keyboardHeight !== 0 ? customHeight(100) : 0;
    const dispatch = useDispatch();
    

    return (
        <ScrollView>
            
            {isLoading ? <LinearIndicatorProgress /> : <View />}
            
            <View style={{ ...styles.container, marginBottom }}>
            <Snackbar onDismiss={_ => onDismissSnackBar(setSnackData)} style={{left: customWidth(4), backgroundColor: snackData.backgroundColor }}
                visible={snackData.isVisible}>{snackData.message}</Snackbar>
                <Image style={styles.logo} source={require("../../assets/Nini.png")} />
                <View style={styles.createAccountSugestionWords}>
                    <Text style={styles.loginWords}>Login with your account if not, </Text>
                    <TouchableOpacity onPress={_ => navigation.navigate("logup")}>
                        <Text style={styles.createAccountPort}>create account</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.fieldsContainer}>
                    <InputField onChangeText={text=>setData({...data, email: text})} keyboardType="email-address" placeholder="Email" />
                    <View style={styles.minWideSpace} />
                    <InputField onChangeText={text=>setData({...data, password: text})} secureTextEntry={true} placeholder="Password" />
                </View>
                <View style={styles.submitBtnContainer}>
                    <RecentButton onPress={_ => performLogin(data, isLoading, setLoading, setSnackData, dispatch)} 
                    mainStyle={styles.loginBtn} text="Login" />
                </View>
            </View>
        </ScrollView>
    )
}

export default Login;