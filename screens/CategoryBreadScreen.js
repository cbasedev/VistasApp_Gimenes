import { Button, StyleSheet, Text, View } from "react-native";

import React from "react";

export default function CategoryBreadScreen({ navigation }) {

    return (

        <View style={ styles.container }>
            <Text>Categoria - El objetivo es mostrar los productos</Text>
            <Button title="Ir a Producto: " onPress={ () => { navigation.navigate('Detail')}}/>
        </View>


    );


}

const styles = StyleSheet.create({

    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },


})