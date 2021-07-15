import { StyleSheet } from 'react-native';
import { customHeight, customWidth } from '../../helper/screen';
import colors from "../../constants/colors/index";

export default StyleSheet.create({
    modifyPostWidth: {
        paddingTop: customHeight(8),
    },
    isLiked: {
        color: colors.secondaryColor
    },
    moreDescriptionToogle: {
        paddingVertical: customHeight(2),
        color: colors.dominanteBlue,
        fontSize: customWidth(4)
    },
    postContainer: {
        paddingHorizontal: customWidth(2),
        position: "relative"
    },
    postIdentifierRow: {
        flexDirection: "row",
        zIndex: 20,
        marginBottom: customHeight(4),
        marginLeft: customWidth(2)
    },
    postIdentifierRowImg: {
        width: customWidth(12),
        height: customHeight(12),
        borderRadius: customWidth(10),
        
    },
    postIdentifierRowText: {
        marginLeft: customWidth(3),
        fontWeight: "bold",
        letterSpacing: customWidth(0.2),
        textTransform: "capitalize",
        marginTop: customHeight(2),
        color: colors.textColor
    },
    mainPostImage: {
        maxWidth: "100%",
        maxHeight: customHeight(70),
        borderRadius: customHeight(4),
    },
    postImageRow: {
        alignItems: "center",
        maxHeight: customHeight(70),
        shadowColor: '#000',
        shadowOffset: { width: 4, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 120
    },
    postDeclarationRow: {
        flexDirection: "row",
        flexWrap: "wrap",
        
    },
    postDescriptionAndReaction: {
        backgroundColor: colors.accentColor,
        paddingTop: customHeight(39),
        paddingHorizontal: customWidth(3),
        paddingVertical: customHeight(4),
        borderRadius: customHeight(4),
        top: - customHeight(30),
        elevation: 20
    },
    postReactionRow: {
        flexDirection: "row",
        paddingVertical: customHeight(4)
    },
    postedText: {
        fontSize: customWidth(3.7),
        lineHeight: customHeight(5.4),
        color: colors.textColor,
        fontSize: customWidth(4)
    },
    action: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginRight: customWidth(6)
    },
    actionIcon: {
        color: colors.loyalGray
    },
    actionComment: {
        color: colors.loyalGray,
        marginLeft: customWidth(2)
    }
})