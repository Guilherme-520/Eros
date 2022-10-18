import React,{ useState, useEffect } from 'react';
import { StatusBar, ActivityIndicator} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/pages/Home'
import Routes from './src/routes';
import auth, { FirebaseAuthTypes } from 'firebase/auth'
import { View } from 'react-native-animatable';


export default function App() {


  const [user, setUser] = useState(null)
 /* const [initializing, setInitializing] = useState(true)

  useEffect(()=>{

    const unsubscribe = auth().onAuthStateChanged(_user => {
      setUser(_user);
      if(initializing){
        setInitializing(false)
      }
    })

    return unsubscribe
  }, [])

  if(initializing){
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={'large'} color={"#5142ab"} />
      </View>
    )
  }*/
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#3a2f78" barStyle="light-content"/>
      {user ? <Home/> : <Routes/> }
    </NavigationContainer>
  );
}

