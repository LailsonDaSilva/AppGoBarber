import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthRoutes from './stack.routes';

const Routes: React.FC = () => (
    <NavigationContainer>
        <AuthRoutes />
    </NavigationContainer>
);
export default Routes;
