import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';
import { customHeight, customWidth } from '../../helper/screen';

export default StyleSheet.create({
    container: {
        height: "100%",
        padding: customWidth(5),
        marginTop: customHeight(10),
    },
    logo: {
        marginBottom: customHeight(13)
    },
    createAccountSugestionWords: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: customHeight(10)
    },
    logupWords: {
        color: colors.loyalGray,
        fontSize: customWidth(3.2)
    },
    fieldsContainer: {
        width: "100%",
        marginTop: customHeight(3)
    },
    minWideSpace: {
        height: customHeight(2)
    },
    logupBtn: {
        width: customWidth(30)
    },
    submitBtnContainer: {
        alignItems: "flex-end",
        marginTop: customHeight(10)
    }
})