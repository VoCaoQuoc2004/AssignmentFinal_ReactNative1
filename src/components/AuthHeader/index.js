import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./styles";

const AuthHeader = ({title, onBackPress}) => {
    return (
        <View style={styles.container}>
            <Pressable onBackPress = {onBackPress}>
                <Image
                    style={styles.iconBack}
                    source={require('../../assest/images/eye.png')}/>
            </Pressable>
            <Text style={styles.title}>({title})</Text>
        </View>
    );
};

export default AuthHeader;