import React from 'react';
import { View, Text, StyleSheet, StatusBar, ImageBackground, TouchableOpacity } from 'react-native';

const Bai3_Lab5 = ({ route }) => {
  // Giả định dữ liệu đang được chuyển từ màn hình trước
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
      <Text style={styles.giatien}>$100/ngay</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Get Started </Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};
export default Bai3_Lab5;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },

  footer: {
    height: 60,
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: 'blue',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  footerText: {
    fontSize: 16,
    color: '#888',
  },
  image: {
    flex: 7,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 15,
    color: 'white',
    paddingBottom: 50,
  },
  details: {
    flex: 3,
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  button: {
    marginLeft: 290,
    width: 100,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
  },
  giatien: {
    color: 'white',
    alignContent: "center",
  },
  text:{
        textAlign:'left',
        paddingBottom:20,
    },
});
