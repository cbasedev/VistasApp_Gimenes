import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

export default function CategoriesScreen({ navigation }) {

    return (

        <View style={ styles.container }>
            <Text>Categorias</Text>
            <Button title="Ir a Productos" onPress={ () => { navigation.navigate('Productos')}}/>
        </View>


    );


}

const styles = StyleSheet.create({

    container:{
        flex: 1
    },


})