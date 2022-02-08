import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from '../pages/SignIn/Index';
import SignUp from '../pages/SignUp/Index';

declare global {
    namespace ReactNavigation {
        interface RootParamList {
            SignUp: undefined;
            SignIn: undefined;
        }
    }
}

const Auth = createNativeStackNavigator();
const AuthRoutes: React.FC = () => (
    <Auth.Navigator
        initialRouteName="SignIn"
        screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: '#312e38' },
        }}
    >
        <Auth.Screen name="SignUp" component={SignUp} />

        <Auth.Screen name="SignIn" component={SignIn} />
    </Auth.Navigator>
);

export default AuthRoutes;
