import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function Layout () {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer />
        </GestureHandlerRootView>
    )
}

/*

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer;

export default function Layout () {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer />
        </GestureHandlerRootView>
    )
}

*/