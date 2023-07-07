declare module 'cookie' {
    export function parse(str: string | undefined): Record<string, string>;
}
