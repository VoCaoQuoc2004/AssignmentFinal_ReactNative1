import { ImageBackground, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles_bai2";

const Bai2_Lab5 = () => {
    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="rgba(0,0,0,0" />
            <ImageBackground
            source={require('../../assest/images/travel.jpg')}
            style={styles.image}>
                </ImageBackground>  
                <View style={styles.details}>
                    <Text style={styles.text}>
                        <Text style={styles.firstLine}>Discover {'\n'}</Text>
                        <Text style={styles.secondLine}>world with us</Text>
                    </Text>
                    <Text style={styles.textStyle}>Discover worldo with us</Text>
                </View>
                <View style={styles.footer}>
                <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Get Started </Text>
                    </TouchableOpacity>
                </View>
            
        </View>
    );
};
export default Bai2_Lab5;