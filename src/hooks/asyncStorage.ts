import AsyncStorage from "@react-native-async-storage/async-storage";
import { userResponse } from "../@types/userResponse";




export const storeData = async (value:userResponse) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('user', jsonValue);
    } catch (e) {
    }

  };
  


  export const getData = async (): Promise<userResponse | null> => {  
    try {
      const jsonValue = await AsyncStorage.getItem('user')
      return jsonValue ? JSON.parse(jsonValue) : null;
    } catch(e) {
    }
  }