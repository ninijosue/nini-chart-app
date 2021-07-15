import React from "react";
import { Image, Text, View } from "react-native";
import LargeHeightSpacing from "../../components/Large-space";
import PostComponent from "../../components/post";
import styles from "./style";

const HomeScreen = () => {
    return (
        <View>
            <View style={styles.logoContiner}>
                <Image source={require("../../assets/Nini.png")} />
            </View>
            <LargeHeightSpacing />
            <PostComponent />
        </View>
    )
}

export default HomeScreen;
