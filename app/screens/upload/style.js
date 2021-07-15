import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';
import { customHeight, customWidth } from '../../helper/screen';

export default StyleSheet.create({
    mainUploadContainer: {
        justifyContent: "center",
        // alignItems: "center",
        paddingHorizontal: customWidth(5),
        paddingTop: customHeight(10)

    },
    uploadClickableRow: {
        width: "100%",
        height: customHeight(70),
        backgroundColor: colors.whiteGray,
        justifyContent: "center",
        borderRadius: customWidth(3),
        alignItems: "center",
        elevation: 10
    },
    selectImageIconIndicator: {
        color: colors.accentColor,
    },
    descriptionRow: {
        marginTop: customHeight(8)
    },
    descriptionTitle: {
        marginBottom: customHeight(1),
        marginLeft: customWidth(2)
    },
    descriptionField: {
        backgroundColor: colors.accentColor,
        height: customHeight(50),
        alignItems: "flex-start",
        justifyContent: "flex-start",
        flexWrap: "wrap",
        textAlignVertical: "top",
        elevation: 10,
        borderRadius: customWidth(2),
        paddingVertical: 14,
        paddingHorizontal: 10
    },
    submitButton: {
        width: customWidth(27),
        height: customHeight(13),
        backgroundColor: colors.secondaryColor,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: customWidth(1),
        elevation: 2,

    },
    submitionBtnSection: {
        marginTop: customHeight(13),
        justifyContent: "flex-end",
        alignItems: "flex-end"
    },
    submitButtonText: {
        color: colors.accentColor,
        letterSpacing: customWidth(0.4),
        fontSize: customWidth(4)
    }
})