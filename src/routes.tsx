import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';

// Pages
import OrphanageMap from './pages/OrphanageMap';
import OrphanageDetails from './pages/OrphanageDetails';
import OrphanageData from './pages/CreateOrphanate/OrphanageData';
import SelectPosition from './pages/CreateOrphanate/SelectMapPosition';

import MainMenu from './pages/MainMenu';
import Header from './components/Header';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {

    return (
        <NavigationContainer>
            <Navigator screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: '#f2f3f5'
                }
            }}>
                <Screen
                    name="OrphanageMap"
                    component={OrphanageMap}
                />
                <Screen
                    name="OrphanageDetails"
                    component={OrphanageDetails}
                    options={{
                        headerShown: true,
                        header: () => <Header 
                                        showCancel={false} 
                                        title='Detalhes do orfanato'/> // Mostrar o nome do orfanato
                    }}
                />
                <Screen
                    name="OrphanageData"
                    component={OrphanageData}
                    options={{
                        headerShown: true,
                        header: () => <Header title='Informe os dados'/>
                    }}
                />
                <Screen
                    name="SelectPosition"
                    component={SelectPosition}
                    options={{
                        headerShown: true,
                        header: () => <Header title='Selecione o orfanato'/>
                    }}
                />
                <Screen
                    name="MainMenu"
                    component={MainMenu}
                    options={{
                        headerShown: true,
                        header: () => <Header title='Opções'/>
                    }}
                />
            </Navigator>
        </NavigationContainer>
    );
}