import React from "react";
import { styles } from './styles'
import { Text, TouchableOpacity } from "react-native";


const Button = ({title,onPress}) => {
    const handlePress = () => {
        console.log("Test even button blabla")
    };
    return(
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.textContent}>{title}</Text>
        </TouchableOpacity>
    );
}
export default Button;