import React from 'react';
import { View } from "react-native";
import { LinearProgress } from "react-native-elements";
import colors from "../../constants/colors";
import styles from "./style";

const LinearIndicatorProgress = () => (
    <View>
        <LinearProgress style={styles.loading} color={colors.secondaryColor} />
    </View>
)

export default LinearIndicatorProgress;