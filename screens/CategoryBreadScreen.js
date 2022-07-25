import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

export default function CategoryBreadScreen({ navigation }) {

    return (

        <View style={ styles.container }>
            <Text>Categoria - El objetivo es mostrar los productos</Text>
            <Button title="Ir a Productos" onPress={ () => { navigation.navigate('Productos')}}/>
        </View>


    );


}

const styles = StyleSheet.create({

    container:{
        flex: 1
    },


})