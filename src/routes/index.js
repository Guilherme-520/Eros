import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from "../pages/Welcome";
import SignIn from "../pages/Signin";
import SignUp from "../pages/SignUp";
import Home from '../pages/Home';
import Hair from '../pages/Questions/Hair';
import Skins from '../pages/Questions/Skins';

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name='Welcome'
            component={Welcome}
            options={{ headerShown: false }}
            />

            <Stack.Screen
            name='SignIn'
            component={SignIn}
            options={{ headerShown: false }}
            />

            <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{ headerShown: false}}
            />
            <Stack.Screen
            name="Hair"
            component={Hair}
            options={{ headerShown: false}}
            />
            <Stack.Screen
            name="Skins"
            component={Skins}
            options={{ headerShown: false}}
            />
            <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false}}
            />
        </Stack.Navigator>
    )
}