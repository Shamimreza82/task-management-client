import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const useAuth = () => {
    const auth = useContext(AuthContext)
    return ;
};

export default useAuth;