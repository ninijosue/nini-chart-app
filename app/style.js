import { StyleSheet, Dimensions } from 'react-native';
import  colors from './constants/colors/index';
import { customWidth } from './helper/screen';

const { width, height } = Dimensions.get("window");


export default StyleSheet.create({
    appContainer: {
        backgroundColor: colors.primaryColor,
        width: width,
        height: height
    },
    headStyles: {
        backgroundColor: "transparent",
        elevation: 0
    },
    headTitle: {
        fontSize: customWidth(4.5),
        color: colors.loyalGray,
    },
    backNavigationBtn: {
        color: colors.loyalGray
    }
})