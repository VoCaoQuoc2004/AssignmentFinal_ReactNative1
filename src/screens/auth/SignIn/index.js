import React, { useState } from "react";
import { styles } from './styles'
import { Image, Pressable, Text, View } from "react-native";
import Button from "../../../components/Button";
import AuthHeader from "../../../components/AuthHeader"
import Input from "../../../components/input";
import Checkbox from "../../../components/Checkbox";
import Seperator from "../../../components/Seperator";
import GoogleLogin from "../../../components/GoogleLogin";

const SignIn = ({navigation}) => {
    const onSignUp = () => {    
        navigation.navigate('SignUp');
    };

    return (
        <View style={styles.container}>
            <Input label="Email" placeholder="example@gmail.com"/>
            <Input isPassword label="Password" placeholder="******"/>
            <Button style={styles.button} title="Sign Up"></Button>
            <Seperator text="Or sign up with"></Seperator>
            <GoogleLogin></GoogleLogin>
            <Text style={styles.footerText}>
                Don't have an account?
                <Text onPress={onSignUp} style={styles.footerLink}>
                    {' '}
                    Sign Up
                </Text>
            </Text>
        </View>
    );
};
export default SignIn;