import { Text, StyleSheet, TouchableOpacity} from 'react-native';
interface StockButtonProps {
    name: string;
    code: string;
    onPress: () => void;
}
export const StockButton = ({name, code, onPress}: StockButtonProps) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text>{name}</Text>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    button: {
        margin: 10, height: 50, width: 100,
        borderWidth: 1, borderRadius: 10,
        alignItems: 'center', justifyContent: 'center',
        backgroundColor: 'lightgray'
    }
});
