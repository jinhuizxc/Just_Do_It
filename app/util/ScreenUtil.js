import React, { Component } from 'react';
import {
    PixelRatio,
    Dimensions
} from 'react-native';

module.exports = {
    /*最小线宽*/
    pixel: 1 / PixelRatio.get(),
    /*屏幕尺寸*/
    size: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    px3dp:function (ElementPx) {
        return ElementPx /3
    },
};