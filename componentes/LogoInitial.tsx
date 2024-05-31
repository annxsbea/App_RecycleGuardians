import React from "react";
import { Image } from "react-native";

export default function LogoInitial() {
    return (
      <Image source={require('../assets/LogoPrincipal.png')} style={{  position: 'absolute', top: -95, zIndex: 1, left: 45}} />
   
    );
}