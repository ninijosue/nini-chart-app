import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';
import { customHeight, customWidth } from '../../helper/screen';

export default StyleSheet.create({
    container: {
        height: customHeight(150),
        width: "100%",
        padding: customWidth(5),
        marginTop: customHeight(30),
    },
    logo: {
        marginBottom: customHeight(13)
    },
    createAccountSugestionWords: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: customHeight(10)
    },
    loginWords: {
        color: colors.loyalGray,
        fontSize: customWidth(3.2)
    },
    createAccountPort: {
        color: colors.dominanteBlue,
        fontSize: customWidth(3.2),
        marginLeft: customWidth(1),
        textTransform: "capitalize"
    },
    fieldsContainer: {
        width: "100%",
        marginTop: customHeight(3)
    },
    minWideSpace: {
        height: customHeight(2)
    },
    loginBtn: {
        width: customWidth(30)
    },
    submitBtnContainer: {
        alignItems: "flex-end",
        marginTop: customHeight(10)
    }
})