import { StyleSheet, Text, View } from "react-native";
import { fontPopins } from "../../assest/fonts/fonts";
const Bai1_Lab5 = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>iloveyou</Text>
        </View>
    )
};
export default Bai1_Lab5;

const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
    textStyle: {
        fontFamily: fontPopins.italic,
        fontSize: 30,
    },
});
