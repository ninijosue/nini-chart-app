import React, { useEffect, useState } from 'react'
import { View, Image, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import getKeyboardHeight from '../../helper/generators/keyboardHeight.js';
import { customHeight } from '../../helper/screen/index.js';
import styles from "./style.js";

const getImage = async (setSelectedImageUri) => {
    try {
        const image = await ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: false
        });
        setSelectedImageUri(image.path)
    } catch (error) {
    }
    // setSelectedImageUri()
}

const performEffects = setKeyboardHeight => {
    getKeyboardHeight(setKeyboardHeight)
}

const UploadScreen = props => {
    useEffect(_ => performEffects(setKeyboardHeight));
    const [description, setDescription] = useState("");
    const [selectedImageUri, setSelectedImageUri] = useState(undefined);
    const [keyboardHeight, setKeyboardHeight] = useState(0);
    const imagePickerOptions = {
        mediaType: "photo",
        selectionLimit: 1
    }
    const  marginBottom = keyboardHeight !== 0 ? customHeight(100) : 0
    return (
        <ScrollView>
            <View style={{...styles.mainUploadContainer, marginBottom}}>
                <TouchableOpacity onPress={_ => getImage(setSelectedImageUri)}>
                    <View style={styles.uploadClickableRow}>
                        {
                            selectedImageUri
                                ? <Image style={{ width: 100, height: 100 }} source={{ uri: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D3_ldEVWlL18&psig=AOvVaw1jQiMbSOlgeVHEeTccvIHY&ust=1626251618211000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCNjhoczR3_ECFQAAAAAdAAAAABAD" }} />
                                : <Icon size={80} style={styles.selectImageIconIndicator} name="add-photo-alternate" />

                        }
                    </View>
                </TouchableOpacity>
                <View style={styles.descriptionRow} >
                    <Text style={styles.descriptionTitle}>Description</Text>
                    <TextInput value={description} onChangeText={text => setDescription(text)} style={styles.descriptionField}
                        placeholder="Publish something ..."
                        numberOfLines={4}
                        multiline={true}
                        editable
                    />
                </View>
                <View style={styles.submitionBtnSection}>
                    <TouchableOpacity onPress={_ => {}} activeOpacity={.8}>
                        <View style={styles.submitButton} >
                            <Text style={styles.submitButtonText}>Publish</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default UploadScreen;