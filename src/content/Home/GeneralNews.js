import React, { Component } from "react";
import {
    View, Text, Image
} from "react-native";

export default class GeneralNews extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
            }}>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text>
                        Hello
                    </Text>
                </View>
            </View>
        )
    }
}