import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Dimensions, View, TouchableOpacity } from 'react-native';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import { Feather } from '@expo/vector-icons';
import mapMarker from '../images/map-marker.png';
import { useFonts } from 'expo-font';
import { Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

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
        navigation.navigate('MainMenu');
    }
    
    function handleNavigateToCreateOrphanage() {
        navigation.navigate('SelectPosition');
    }

    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                initialRegion={{
                    latitude: -23.17944,
                    longitude: -45.88694,
                    latitudeDelta: 0.05,
                    longitudeDelta: 0.05,
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
            {/*<View style={styles.menuOptionsContainer}>
                <RectButton style={styles.menuOptionsButton} onPress={handleNavigateToMenuOptions}>
                    <Feather name="user" size={16} color="#4d3f92" />
                    <Text style={styles.menuText}>Menu</Text>
                </RectButton>
            </View>*/}

            {/* ------------------ FOOTER ------------------ */}
            <View style={styles.footerContainer}>
                <Text style={styles.footerText}>1 orfanato foi encontrado</Text>
                <RectButton style={styles.createOrphanageButton} onPress={handleNavigateToCreateOrphanage}>
                    <Feather name="plus" size={20} color="#217821" />
                </RectButton>
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
        width: 180,
        height: 40,
        paddingHorizontal: 0,
        backgroundColor: '#ffffffdd',
        borderRadius: 12,
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
        bottom: 64,
        backgroundColor: '#fff',
        borderRadius: 20,
        height: 64,
        paddingLeft: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        elevation: 10,
    },

    footerText: {
        fontFamily: 'Roboto_700Bold',
        color: '#4d3f92',
        fontSize: 18,
    },

    createOrphanageButton: {
        width: 64,
        height: 64,
        backgroundColor: '#5fd35f',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    menuOptionsContainer: {
        position: "absolute",
        right: 24,
        top: 56,
        borderRadius: 20,
        elevation: 5,
    },

    menuOptionsButton: {
        width: 56,
        height: 56,
        backgroundColor: '#fff',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    menuText: {
        fontFamily: 'Roboto_700Bold',
        color: '#4d3f92',
        fontSize: 12,
    }
});
