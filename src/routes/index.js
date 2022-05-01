import React, {useContext} from 'react';

// Routes
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

// Context
import {AuthContext} from '../contexts/auth';

export default function Routes() {
  const {signed} = useContext(AuthContext);

  return signed ? <AppRoutes /> : <AuthRoutes />;
}
