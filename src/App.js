import React from 'react'
import { 
    Text, 
    View, 
    SafeAreaView, 
    TouchableOpacity, 
    StyleSheet,
} from 'react-native'

const App = () => {
    return (
            <SafeAreaView style={style.container}>
                <Text>
                    0
                </Text>
                <TouchableOpacity>
                    <Text>Generate Random Number</Text>
                </TouchableOpacity>
            </SafeAreaView>
    )
};

const style = StyleSheet.create({
    container: {
        backgroundColor: '#FF0000',
        flex: 1,
        justifyContent: 'center', // center vertically
        alignItems: 'center', // center horizontally
    }
});

export default App;