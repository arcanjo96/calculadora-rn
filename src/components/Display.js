import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Display extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={styles.display}>
                <Text 
                    style={styles.displayValue}
                    numberOfLines={1}
                >
                    {this.props.value}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    display: {
        flex: 1,
        padding: 20,
        justifyContent: "center",
        backgroundColor: 'rgba(0,0,0,0.6)',
        alignItems: 'flex-end'
    },
    displayValue: {
        fontSize: 60,
        color: '#ffff'
    }
});