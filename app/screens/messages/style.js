import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';
import { customHeight, customWidth } from '../../helper/screen';

export default StyleSheet.create({
    messagesListTitle: {
        marginTop: customHeight(4),
        marginLeft: customWidth(4),
        fontSize: customWidth(4.5),
        color: colors.loyalGray
    },
    messagesChatList: {
        marginTop: customHeight(8),
        marginLeft: customWidth(5)
    },
    messagesListPersonalChat: {
        flexDirection: "row",
        marginTop: customHeight(4)
    },
    personalChatList: {
        width: customWidth(15),
        height: customHeight(15),
        borderRadius: customWidth(10),
        marginRight: customWidth(3.4)
    },
    personalChatIdentifier: {
        paddingTop: customHeight(2)
    },
    personalChatNames: {
        fontWeight: "bold",
        fontSize: customWidth(4.5),
        marginBottom: customHeight(1)
    },
    personalMessage: {
        fontSize: customWidth(3.5),
        color: colors.loyalGray,
        
    }
})