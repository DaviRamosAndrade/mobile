import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';

interface HeaderProps {
    title: string;
    showCancel?: boolean
}

export default function Header({ title, showCancel = true }: HeaderProps) {

    const navigation = useNavigation();

    function handleGoHome() {
        navigation.navigate('OrphanageMap');
    }

    return (
        <View style={styles.container}>
            <BorderlessButton onPress={navigation.goBack}>
                <Feather name='arrow-left' size={24} color="#4d3f92" />
            </BorderlessButton>

            <Text style={styles.title}>{title}</Text>

            {
                showCancel ? (
                    <BorderlessButton onPress={handleGoHome}>
                        <Feather name='x' size={24} color="#4d3f92" />
                    </BorderlessButton>
                ) : (
                    <View/>
                )
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        backgroundColor: '#f9fafc',
        borderBottomWidth: 1,
        borderColor: '#dde3f0',
        paddingTop: 44,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    title: {
        fontFamily: 'Roboto_700Bold',
        color: '#4d3f92',
        fontSize: 16,
    }
});