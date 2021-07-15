import React, { useState } from 'react'
import { TouchableHighlight } from 'react-native';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";
import { customWidth } from '../../helper/screen';
import styles from "./styles";


const Profil = props => (
    <View style={styles.postIdentifierRow}>
        <Image style={styles.postIdentifierRowImg} source={require("../../assets/profil.jpg")} />
        <Text style={styles.postIdentifierRowText}>john deo</Text>
    </View>
);

const perfomLiking = (likeState, setLikeState) => {
    if (likeState) setLikeState(false);
    else setLikeState(true);
}

const performShowMore = (isShowMore, setIsShowMore) => {
    if (isShowMore) setIsShowMore(false);
    else setIsShowMore(true);
}

const ImageRow = props => (
    <View style={styles.postImageRow}>
        <Image style={styles.mainPostImage} source={require("../../assets/postimg.jpg")} />
    </View>
);

const ImageRender = props => {
    const hasImage = props.hasImage;
    if (hasImage) return (
        <View>
            <Profil />
            <ImageRow />
        </View>
    )
    else return <View />;
}


const PostComponent = (props) => {
    const [likeState, setLikeState] = useState(false);
    const [isShowMore, setShowDescription] = useState(false);
    const hasImage = true;
    const renderPictureArea = !hasImage ? styles.modifyPostWidth : {};
    const renderColorOfLiked = likeState ? styles.isLiked : {};
    return (
        <View style={styles.postContainer}>
            <ImageRender hasImage={hasImage} />
            <View style={{ ...styles.postDescriptionAndReaction, ...renderPictureArea }}>
                {!hasImage ? <Profil /> : <View />}
                <View style={styles.postDeclarationRow}>
                    <Text style={styles.postedText} numberOfLines={!isShowMore ? 3 : 0} >
                        Random Word Generator is the perfect tool
                        to help you do this. While this tool isn't a
                        word creator, it is a word generator
                        that will generate word creator, it is a word generator
                        that will generat.
                    </Text>
                    <TouchableOpacity onPress={_ => performShowMore(isShowMore, setShowDescription)}>
                        <Text style={styles.moreDescriptionToogle}>{isShowMore ? "Less" : "More"}</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.postReactionRow}>
                    <TouchableOpacity onPress={_ => perfomLiking(likeState, setLikeState)}>
                        <View style={styles.action}>
                            <Icon style={{ ...styles.actionIcon, ...renderColorOfLiked }} name="favorite" size={customWidth(7)} />
                            <Text style={styles.actionComment} >10 Like</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.action}>
                            <Icon style={styles.actionIcon} size={customWidth(7)} name="chat-bubble-outline" />
                            <Text style={styles.actionComment}>21 Comment</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default PostComponent;