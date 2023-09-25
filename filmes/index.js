import React, { Component } from "react";
import { View, Text, Image } from "react-native";

export class Filmes extends Component {
    render() {
        return (
            <View>
                <Image source={{uri: this.props.data.foto}} style={{width: 300, height: 200}}/>
                <Text>{this.props.data.nome}</Text>
            </View>
        )
    }
}