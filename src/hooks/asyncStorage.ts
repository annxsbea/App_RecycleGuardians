import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserResponse } from "../@types";




export const storeData = async (value:UserResponse) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('user', jsonValue);
    } catch (e) {
    }

  };
  
  export const getData = async (): Promise<UserResponse | null> => {  
    try {
      const jsonValue = await AsyncStorage.getItem('user')
      return jsonValue ? JSON.parse(jsonValue) : null;
    } catch(e) {
    }
  }