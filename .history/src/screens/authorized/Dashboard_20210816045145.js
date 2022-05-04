import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Dashboard = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Text>Dashboard</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    }
});

export default Dashboard;