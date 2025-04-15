import React, { useEffect } from "react";
import { View, ActivityIndicator, Image, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        const timer = setTimeout(() =>{
            navigation.replace('Login');
        }, 4000);

        return () => clearTimeout(timer);
    }, [navigation]);
    
    return (
        <View style={StyleSheet.SplashContainer}>
            <Image source={{uri: ''}} style={StyleSheet.SplashImage} />
            <ActivityIndicator size='large' color='#0000ff' style={styles.loader} />
        </View>
    );
}

const styles = StyleSheet.create({
   SplashContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
   },
   SplashImage: {
        width: 150,
        height: 150,
        marginBottom: 20
   },
   loader: {
        marginTop: 20    
   }
});

export default SplashScreen;
