import React from "react";
import { Text, SafeAreaView, StyleSheet, Dimensions, View } from "react-native";
import HomeScreen from "./screens/home/index";
import colors from "./constants/colors/index";
import UploadScreen from "./screens/upload/index"
import MessagesList from "./screens/messages";
import ChatRoom from "./screens/chat-room";
import Login from "./screens/login";
import Logup from "./screens/logup";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import navigationStyles from './constants/navigation-bar-styles';
import styles from "./style";
import Logout from "./components/log-out";
import { useDispatch, useSelector } from "react-redux";
import store from "./redux/store";

const Stack = createStackNavigator();

const SignedInComponents = _ => (
    <>
        <Stack.Screen name="Messages" component={MessagesList} options={{
            headerStyle: styles.headStyles,
            headerTitleStyle: styles.headTitle,
            headerRight: _ => <Logout />
        }} />
        <Stack.Screen name="Chart room" component={ChatRoom} options={{
            headerStyle: styles.headStyles,
            headerTitleStyle: { ...styles.headTitle, marginLeft: -20 },
        }} />
    </>
)

const SignedOutComponents = _ => (
    <>
        <Stack.Screen name="login" component={Login} options={{
            headerStyle: { height: 0 },
            headerTitleStyle: { color: "transparent" },
            headerLeft: _ => <View />
        }} />

        <Stack.Screen name="logup" component={Logup} options={{
            headerStyle: { height: 0 },
            headerTitleStyle: { color: "transparent" },
            headerLeft: _ => <View />
        }} />
    </>
)

const App = () => {
    const dispatch = useDispatch();
    dispatch({ type: "UPDATEUSER" });
    const user = useSelector(state => state.user);

    return (
        <NavigationContainer>

            <SafeAreaView >
                <View style={styles.appContainer}>

                    <Stack.Navigator>
                        {!user ? SignedOutComponents() : SignedInComponents()}
                    </Stack.Navigator>
                </View>
            </SafeAreaView>
        </NavigationContainer>


    )
}


export default App;