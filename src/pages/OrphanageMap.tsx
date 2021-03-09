import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Dimensions, View, TouchableOpacity } from 'react-native';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import { Feather } from '@expo/vector-icons';
import mapMarker from '../images/map-marker.png';
import { useFonts } from 'expo-font';
import { Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { useNavigation } from '@react-navigation/native';

export default function OrphanageMap() {
    const navigation = useNavigation();
    const [fontsLoaded] = useFonts({
        Roboto_400Regular,
        Roboto_500Medium,
        Roboto_700Bold
    });

    if (!fontsLoaded) {
        return null;
    }

    function handleNavigateToOrphanageDetails() {
        navigation.navigate('OrphanageDetails');
    }
    
    function handleNavigateToMenuOptions() {
        navigation.navigate('OrphanageDetails');
    }
    
    function handleNavigateToCreateOrphanage() {
        navigation.navigate('OrphanageDetails');
    }

    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                initialRegion={{
                    latitude: -23.17944,
                    longitude: -45.88694,
                    latitudeDelta: 0.008,
                    longitudeDelta: 0.008,
                }}>
                <Marker
                    icon={mapMarker}
                    calloutAnchor={{
                        x: 0.5,
                        y: -0.2,
                    }}
                    coordinate={{
                        latitude: -23.17944,
                        longitude: -45.88694,
                    }}
                >
                    <Callout tooltip onPress={handleNavigateToOrphanageDetails}>
                        <View style={styles.calloutContainer}>
                            <Text style={styles.calloutText}>Meu marker funciona</Text>
                        </View>
                    </Callout>
                </Marker>
            </MapView>

            {/* ------------------ Menu Opitions ------------------ */}
            <View style={styles.menuOptionsContainer}>
                <TouchableOpacity style={styles.menuOptionsButton} onPress={handleNavigateToMenuOptions}>
                    <Feather name="menu" size={16} color="#4d3f92" />
                </TouchableOpacity>
            </View>

            {/* ------------------ FOOTER ------------------ */}
            <View style={styles.footerContainer}>
                <Text style={styles.footerText}>1 orfanato foi encontrado</Text>
                <TouchableOpacity style={styles.createOrphanageButton} onPress={handleNavigateToCreateOrphanage}>
                    <Feather name="plus" size={20} color="#217821" />
                </TouchableOpacity>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },

    calloutContainer: {
        flex: 1,
        width: 160,
        height: 40,
        paddingHorizontal: 24,
        backgroundColor: '#ffc50099',
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },

    calloutText: {
        color: '#4d3f92',
        fontSize: 14,
        fontFamily: 'Roboto_700Bold',
    },

    footerContainer: {
        position: "absolute",
        left: 24,
        right: 24,
        bottom: 32,
        backgroundColor: 'rgba(255,255,255, 1)',
        borderRadius: 20,
        height: 56,
        paddingLeft: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        elevation: 5,
    },

    footerText: {
        fontFamily: 'Roboto_700Bold',
        color: '#5fd35f',
        fontSize: 18,
    },

    createOrphanageButton: {
        width: 56,
        height: 56,
        backgroundColor: '#5fd35f',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    menuOptionsContainer: {
        position: "absolute",
        left: 24,
        top: 56,
        borderRadius: 20,
        elevation: 3,
    },

    menuOptionsButton: {
        width: 32,
        height: 32,
        backgroundColor: '#fff',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
});