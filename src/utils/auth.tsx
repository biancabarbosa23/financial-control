import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key: string, value: string) => {
    try {
      await AsyncStorage.setItem(key, value);
      return true;
    } catch (e) {
      console.log('Error accessing AsyncStorage');
      return false;
    }
}

export const storeDataObject = async (key: string, value: object) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) {
      console.log('Error accessing AsyncStorage');
      return false;
    }
}

export const getData = async (key: string) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if(value === null) {
        return false;
      }

      return value;
    } catch(e) {
        console.log('Error accessing AsyncStorage');
        return false;
    }
}

export const getDataObject = async (key: string) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if(value === null) {
        return false;
      }

      return JSON.parse(value);
    } catch(e) {
        console.log('Error accessing AsyncStorage');
        return false;
    }
}

export const compareAccessData = async (pass: string) => {
    try {
      const access = await AsyncStorage.getItem("@access");

      if(access === null) {
        await AsyncStorage.setItem("@access", pass);
        return true;
      } else if(access === pass) {
        return true;
      }
      
      return false
    } catch(e) {
        console.log('Error accessing AsyncStorage');
        return false;
    }
}