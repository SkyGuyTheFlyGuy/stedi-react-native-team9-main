import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function Login(props) {
    const [message, setMessage] = useState("");

    return (
        <View style={styles.login}>
            <Text>This is the Login Screen</Text>
            <Button title="Log In" onPress={() => setMessage("Hello Angelica")} />
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
        height: '12%',
        alignItems: 'flex-start',
        padding: 10,
    },
});
