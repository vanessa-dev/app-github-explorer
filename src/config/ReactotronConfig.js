import Reactotron from 'reactotron-react-native';
import { AsyncStorage } from 'react-native';
if (__DEV__){
  const tron = Reactotron.configure({host:'192.168.0.105'}).setAsyncStorageHandler(AsyncStorage)
  .connect();

  console.tron = tron;

  tron.clear();
}
