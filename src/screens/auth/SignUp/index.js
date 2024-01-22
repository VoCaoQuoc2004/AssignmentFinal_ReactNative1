import React, { useState } from "react";
import { styles } from './styles'
import { Image, Pressable, Text, View } from "react-native";
import Button from "../../../components/Button";
import AuthHeader from "../../../components/AuthHeader"
import Input from "../../../components/input";
import Checkbox from "../../../components/Checkbox";
import Seperator from "../../../components/Seperator";
import GoogleLogin from "../../../components/GoogleLogin";

const SignUp = () => {
    const [checked, setChecked] =  useState(false);
    const onSignIn = () => {    
        console.log("User clicked Sign In");
    };
    return (
        <View style={styles.container}>
            <Input label="Name" placeholder="Example Jonh"/>
            <Input label="Email" placeholder="example@gmail.com"/>
            <Input isPassword label="Password" placeholder="******"/>
            <View style={styles.checkRow}>
                    <Checkbox checked={checked} onCheck={setChecked}></Checkbox>
                    <Text style={styles.checkText}>I agree with Terms & Privacy</Text>
            </View>
            <Button style={styles.button} title="Sign Up"></Button>
            <Seperator text="Or sign up with"></Seperator>
            <GoogleLogin></GoogleLogin>

            <Text style={styles.footerText}>
                Already have an account?
                <Text onPress={onSignIn} style={styles.footerLink}>
                    Sign In
                </Text>
            </Text>
        </View>
    );
};
export default SignUp;