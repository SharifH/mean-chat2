import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "*": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "boxSizing": "border-box"
    },
    "body": {
        "font": "13px Helvetica, Arial"
    },
    "div": {
        "background": "#000",
        "paddingTop": 3,
        "paddingRight": 3,
        "paddingBottom": 3,
        "paddingLeft": 3,
        "position": "fixed",
        "bottom": 0,
        "width": "100%"
    },
    "div input": {
        "border": 0,
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "width": "90%",
        "marginRight": ".5%"
    },
    "div button": {
        "width": "9%",
        "background": "rgb(130, 224, 255)",
        "border": "none",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10
    },
    "messages": {
        "listStyleType": "none",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "messages li": {
        "paddingTop": 5,
        "paddingRight": 10,
        "paddingBottom": 5,
        "paddingLeft": 10
    },
    "messages li:nth-child(odd)": {
        "background": "#eee"
    }
});