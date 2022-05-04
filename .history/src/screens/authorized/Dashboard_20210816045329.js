import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { COLORS } from '../../utilities/constants'

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
        backgroundColor: Colors.white,
    }
});

export default Dashboard;