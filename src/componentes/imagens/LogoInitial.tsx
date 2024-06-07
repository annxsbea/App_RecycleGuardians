import { Image } from "react-native";

export default function LogoInitial() {
  return (
    <Image source={require('../../assets/LogoInitial.png')} style={{ position: 'absolute', top: -95, zIndex: 1, left: 45 }} />
  );
}