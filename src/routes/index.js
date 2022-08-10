import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Wellcome from "../pages/Welcome"
import SignIn from "../pages/Signin"

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name='Wellcome'
            component={Wellcome}
            options={{ headerShown: false }}
            />

            <Stack.Screen
            name='SignIn'
            component={SignIn}
            options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}