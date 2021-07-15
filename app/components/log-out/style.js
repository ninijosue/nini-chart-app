import { StyleSheet } from 'react-native';
import { customHeight, customWidth } from '../../helper/screen';
import colors from "../../constants/colors/index";

export default StyleSheet.create({
    logout: {
        fontSize: customWidth(3.5),
        color: colors.primaryColor,
    },
    container: {
        padding: customWidth(1),
        backgroundColor: colors.secondaryColor,
        right: customWidth(2),
        paddingVertical: customHeight(2),
        paddingHorizontal: customWidth(4),
        borderRadius: customWidth(1)
    }
})