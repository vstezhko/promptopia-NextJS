export type Creator = {
    email: string,
    username: string,
    _id: string,
    __v: number,
    image?: string
}


export type Post = {
    prompt: string | ReadonlyArray<string> | number | undefined;
    tag: string | ReadonlyArray<string> | number | undefined;
    creator: Creator | null,
    _id: number | null
};

export interface ParamsQuery {
    params: {
        id: string;
        name: string;
    }
}
