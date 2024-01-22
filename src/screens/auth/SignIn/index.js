import React, { useState } from "react";
import { styles } from './styles'
import { Image, Pressable, Text, View } from "react-native";
import Button from "../../../components/Button";
import AuthHeader from "../../../components/AuthHeader"
import Input from "../../../components/input";
import Checkbox from "../../../components/Checkbox";
import Seperator from "../../../components/Seperator";
import GoogleLogin from "../../../components/GoogleLogin";

const SignIn = () => {
    const onSignIn = () => {    
        console.log("Test Sign In");
    };
    return (
        <View style={styles.container}>
            <Input label="Email" placeholder="example@gmail.com"/>
            <Input isPassword label="Password" placeholder="******"/>
            <Button style={styles.button} title="Sign Up"></Button>
            <Seperator text="Or sign up with"></Seperator>
            <GoogleLogin></GoogleLogin>
            <Text style={styles.footerText}>
                Don't have an account? Sign Up
            </Text>
        </View>
    );
};
export default SignIn;