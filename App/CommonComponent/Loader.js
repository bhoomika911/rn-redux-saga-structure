import {
    View, Text
} from 'react-native';
import commonStyle from "./../CommonStyle/CommonStyle";
import React, { Component } from 'react';

const Loader = () => {
    return (
        <View style={commonStyle.circles} >
            <Text>Loading...</Text>
        </View>
    )
}

export default Loader;