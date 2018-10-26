import React, { Component } from "react";
import { AppRegistry, SafeAreaView, Text } from 'react-native';
// import InvisionApp from "./App";
import AppStack from "./src/index";

export default class NestedNavigation extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <AppStack {...this.props} />
            </SafeAreaView>

        )
    }
}
AppRegistry.registerComponent('NestedNavigation', () => NestedNavigation);
