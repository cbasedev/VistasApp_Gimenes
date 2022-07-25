import { Button, StyleSheet, Text, View } from "react-native";

import React from "react";

export default function CategoriesScreen({ navigation }) {

    return (

        <View style={ styles.container }>
            <Text>Mostrando todas las Categorias</Text>
            <Button title="Mostrar Categoria Bread: " onPress={ () => { navigation.navigate('Bread')}}/>
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