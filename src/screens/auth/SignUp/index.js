import React from "react";
import { styles } from './styles'
import { Image, Pressable, Text, View } from "react-native";
import Button from "../../../components/Button";
import AuthHeader from "../../../components/AuthHeader"
import Input from "../../../components/input";

const SignUp = () => {
    return (
        <View style={styles.container}>
            <Input label="Name" placeholder="Example Jonh"/>
            <Input label="Email" placeholder="example@gmail.com"/>
            <Input isPassword label="Password" placeholder="******"/>
        </View>
    );
};
export default SignUp;