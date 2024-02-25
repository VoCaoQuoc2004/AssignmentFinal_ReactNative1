import React from "react";
import { styles } from "./styles";
import { SafeAreaView, ScrollView, Text } from "react-native";

const Setting = () => {
    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <Text>Setting</Text>
            </ScrollView>
        </SafeAreaView>
    )
}
export default React.memo(Setting);