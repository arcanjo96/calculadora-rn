import React, { Component } from 'react';
import { View, TouchableHighlight, StyleSheet, Text, Dimensions } from 'react-native';

export default class Button extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const stylesButton = [styles.button];
        if(this.props.double) stylesButton.push(styles.buttonDouble);
        if(this.props.triple) stylesButton.push(styles.buttonTriple);
        if(this.props.operation) stylesButton.push(styles.operationButton);
        return(
            <View>
                <TouchableHighlight onPress={() => this.props.onClick(this.props.label)}>
                    <Text style={stylesButton}>{this.props.label}</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        backgroundColor: '#f0f0f0',
        textAlign: "center",
        padding: 10,
        borderWidth: 1,
        borderColor: '#888'
    },
    operationButton: {
        color: "#fff",
        backgroundColor: "#fa8231"
    },
    buttonDouble: {
        width: (Dimensions.get('window').width / 4) * 2,
    },
    buttonTriple: {
        width: (Dimensions.get('window').width / 4) * 3,
    }
});