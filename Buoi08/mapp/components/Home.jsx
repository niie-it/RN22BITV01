import { View, Text, Button, StyleSheet } from 'react-native';
import { auth } from '../firebase';

export const HomeScreen = () => {
    return (
    <View style={styles.container}>
        <Text style={styles.title}>Welcome, {auth.currentUser?.email}!</Text>
        <Button title="Sign Out" />
    </View>
    )
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 20 },
    title: { fontSize: 20, marginBottom: 20, textAlign: 'center' },
});
