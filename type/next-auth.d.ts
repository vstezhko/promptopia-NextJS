import NextAuth from 'next-auth';
import {DefaultSession} from "@node_modules/next-auth/src/core/types";


declare module 'next-auth' {
    export interface Session {
        user: {
            id: string;
        } & DefaultSession['user'];
    }
}
