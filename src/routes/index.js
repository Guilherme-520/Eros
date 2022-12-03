import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from "../pages/Welcome";
import SignIn from "../pages/Signin";
import SignUp from "../pages/SignUp";
import Home from '../pages/Home';
import Hair from '../pages/Questions/Hair';
import Skins from '../pages/Questions/Skins';
import Liso from '../pages/Questions/liso';
import Cacheado from '../pages/Questions/cacheado';
import Ondulado from '../pages/Questions/ondulado';
import Crespo from '../pages/Questions/crespo';
import ProblemHair from '../pages/Questions/problemHair';
import ProblemSkin from '../pages/Questions/problemSkin';
import Hidratacao from '../pages/tratamentos/hidratacao';
import Reconstrucao from '../pages/tratamentos/reconstrucao';
import Nutricao from '../pages/tratamentos/nutricao';
import HidratacaoLiso from '../pages/tratamentos/hidratacaoLiso';
import HidratacaoCacheado from '../pages/tratamentos/hidratacaoCacheado';
import HidratacaoOndulado from '../pages/tratamentos/hidratacaoOndulado';
import HidratacaoCrespo from '../pages/tratamentos/hidratacaoCrespo';
import CalendarSkin from '../pages/Home/calendarSkin';
import Profile from '../pages/Profile';


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
            <Stack.Screen
            name="Liso"
            component={Liso}
            options={{ headerShown: false}}
            />
            <Stack.Screen
            name="Ondulado"
            component={Ondulado}
            options={{ headerShown: false}}
            />
            <Stack.Screen
            name="Cacheado"
            component={Cacheado}
            options={{ headerShown: false}}
            />
            <Stack.Screen
            name="Crespo"
            component={Crespo}
            options={{ headerShown: false}}
            />
            <Stack.Screen
            name="ProblemHair"
            component={ProblemHair}
            options={{ headerShown: false}}
            />
            <Stack.Screen
            name="ProblemSkin"
            component={ProblemSkin}
            options={{ headerShown: false}}
            />
            <Stack.Screen
            name="Hidratacao"
            component={Hidratacao}
            options={{ headerShown: false}}
            />
            <Stack.Screen
            name="Reconstrucao"
            component={Reconstrucao}
            options={{ headerShown: false}}
            />
            <Stack.Screen
            name="Nutricao"
            component={Nutricao}
            options={{ headerShown: false}}
            />
            <Stack.Screen
            name="HidratacaoLiso"
            component={HidratacaoLiso}
            options={{ headerShown: false}}
            />
            <Stack.Screen
            name="HidratacaoOndulado"
            component={HidratacaoOndulado}
            options={{ headerShown: false}}
            />
            <Stack.Screen
            name="HidratacaoCacheado"
            component={HidratacaoCacheado}
            options={{ headerShown: false}}
            />
            <Stack.Screen
            name="HidratacaoCrespo"
            component={HidratacaoCrespo}
            options={{ headerShown: false}}
            />
            <Stack.Screen
            name="CalendarSkin"
            component={CalendarSkin}
            options={{ headerShown: false}}
            />
            <Stack.Screen
            name="Profile"
            component={Profile}
            options={{ headerShown: false}}
            />
            
        </Stack.Navigator>
    )
}