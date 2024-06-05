import React from "react";
import { Image } from "react-native";


export default function Person() {
    return (
      <Image source={require('../../assets/Person.png')} style={{ width: 220, height: 200, }} />
   
    );
}