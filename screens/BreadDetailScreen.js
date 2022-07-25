import { Button, StyleSheet, Text, View } from "react-native";

import React from "react";

export default function BreadDetailScreen({ navigation }) {

    return (

        <View style={ styles.container }>
            <Text>Detalle del Producto</Text>
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