import React from 'react';

import {SessionProvider} from "next-auth/react"
import {SessionProviderProps} from "@node_modules/next-auth/src/react/types";

const Provider = ({ children, session}: SessionProviderProps) => {
    return (
        <SessionProvider session={session}>
            {children}
        </SessionProvider>
    );
};

export default Provider;
