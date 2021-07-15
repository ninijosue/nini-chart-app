import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';
import { customHeight, customWidth } from '../../helper/screen';

export default StyleSheet.create({
    field: {
        backgroundColor: colors.accentColor,
        height: customHeight(15),
        marginVertical: customHeight(3),
        borderRadius: customHeight(2),
        elevation: 20,
        paddingHorizontal: customWidth(4)
    }
})