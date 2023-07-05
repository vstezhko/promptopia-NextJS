import React from 'react';

import {SessionProvider} from "next-auth/react"
import {SessionProviderProps} from "@node_modules/next-auth/src/react/types";
import {DefaultSession, ISODateString} from "@node_modules/next-auth/src/core/types";

export interface Session {
    user: {
        id: string;
    } & DefaultSession['user'];
  expires: ISODateString
}

interface CustomSessionProviderProps extends SessionProviderProps {
    session?: Session | null
}

const Provider = ({children, session}: CustomSessionProviderProps) => {
    return (
        <SessionProvider session={session}>
            {children}
        </SessionProvider>
    );
};

export default Provider;
