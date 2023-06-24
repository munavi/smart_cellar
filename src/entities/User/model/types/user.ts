export interface User {
    id: string;
    username: string;
}

export interface UserSchema {
    authData?: User;

    _inited: boolean; // can't change this flag
}
