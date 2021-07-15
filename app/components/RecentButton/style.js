import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';
import { customHeight, customWidth } from '../../helper/screen';

export default StyleSheet.create({
    btnContainer: {
       backgroundColor: colors.secondaryColor,
       paddingVertical: customHeight(3.5),
       paddingHorizontal: customWidth(4),
       margin: customWidth(2),
       justifyContent: "center",
       alignItems: "center",
       borderRadius: customWidth(1),
       
    },
    text: {
        fontSize: customWidth(4),
        color: colors.accentColor,
        letterSpacing: customWidth(0.5)
    }
})