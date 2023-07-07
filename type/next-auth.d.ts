import {DefaultSession} from "@node_modules/next-auth/core/types";


declare module 'next-auth' {
    export interface Session {
        user: {
            id: string;
        } & DefaultSession['user'];
    }
}
