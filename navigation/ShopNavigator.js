import BreadDetailScreen from "../screens/BreadDetailScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryBreadScreen from "../screens/CategoryBreadScreen";
import { NavigationContainer } from "@react-navigation/native";
import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const ShopNavigator = () => (

    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={CategoriesScreen} />
            <Stack.Screen 
                name="Bread" 
                component={CategoryBreadScreen}
                options={{title: 'Categoria - Bread'}}
            />
            <Stack.Screen 
                name="Detail" 
                component={BreadDetailScreen}
                options={{ title: 'Detalle del Producto'}}
            />
        </Stack.Navigator>
    </NavigationContainer>

);

export default ShopNavigator;