import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function Login(props) {
    const [message, setMessage] = useState("");

    const handleButtonPress = (name) => {
        setMessage(`Hello ${name}`);
    };

    return (
        <View style={styles.login}>
            <Text>This is the Login Screen</Text>
            <Button title="Log In" onPress={() => handleButtonPress("Angelica")} />
            <Button title="Log In" onPress={() => handleButtonPress("John")} />
            <Button title="Log In" onPress={() => handleButtonPress("Emily")} />
            <Button title="Log In" onPress={() => handleButtonPress("Michael")} />
            <Button title="Log In" onPress={() => handleButtonPress("Sophia")} />
            {message !== "" && <Text>{message}</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    login: {
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'space-between',
        backgroundColor: 'green',
        height: '100%',
        alignItems: 'center',
        padding: 10,
    },
});


