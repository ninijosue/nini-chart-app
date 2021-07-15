import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';
import { customHeight, customWidth } from '../../helper/screen';

const chatFieldSize = customWidth(100) - customWidth(4) - customWidth(25);

export default StyleSheet.create({
    chatTitle: {
        marginLeft: customWidth(4),
        fontSize: customWidth(4.5),
        color: colors.loyalGray
    },
    chatRoomMessagesContainer: {
        margin: customWidth(5),
        marginTop: customHeight(5),


    },
    personalProfilIdentifier: {
        width: customWidth(12),
        height: customHeight(12),
        borderRadius: customWidth(10),
        marginRight: customWidth(2)
    },
    geoustRow: {
        flexDirection: "row",
        marginTop: customHeight(3)
    },
    geoustMessage: {
        backgroundColor: colors.accentColor,
        paddingVertical: customHeight(2),
        paddingHorizontal: customWidth(4),
        borderRadius: customWidth(2),
        justifyContent: "center",
        top: customHeight(3)
    },
    geoustMessageText: {
        color: colors.loyalBlack,
        fontSize: customWidth(4)
    },
    selfMessageContainer: {
        alignItems: "flex-end",
        marginTop: customHeight(2),
    },
    messageDisplayer: {
        width: customWidth(100),
        left: -customWidth(4),
        padding: customWidth(4),
        position: "absolute",
    }, 
    selfMessage: {
        backgroundColor: colors.secondaryColor,
        paddingVertical: customHeight(4),
        paddingHorizontal: customWidth(4),
        borderRadius: customWidth(2),
        justifyContent: "center",
    },
    selfMessageText: {
        color: colors.accentColor,
        fontSize: customWidth(4)
    },
    sendMessageRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        // bottom: customHeight(30)

    },
    messageField: {
        backgroundColor: colors.accentColor,
        width: chatFieldSize,
        height: customHeight(14),
        borderRadius: customWidth(2),
        elevation: 20,
        paddingHorizontal: customWidth(4)
    },
    submitButton: {
        width: customWidth(16),
        height: customHeight(16),
        backgroundColor: colors.secondaryColor,
        borderRadius: customWidth(10),
        justifyContent: "center",
        alignItems: "center",
        elevation: 20,
        marginLeft: customWidth(3)

    },
    sendIcon: {
        color: colors.accentColor
    }
})