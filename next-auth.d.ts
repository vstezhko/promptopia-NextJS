// next-auth.d.ts
import {Profile} from "@node_modules/next-auth";

declare module "next-auth" {
    export interface Profile extends Profile {
        picture?: string
    }
}
