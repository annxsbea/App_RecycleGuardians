import React from "react";
import { Image } from "react-native";

export default function ImageInitial() {
    return (
      <Image source={require('../../assets/ImagemInitial.png')} style={{opacity: 0.95  }} />
    );
}