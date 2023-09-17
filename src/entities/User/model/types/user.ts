export interface User {
    id: string;
    email: string;
}

export interface UserSchema {
    authData?: User;

    _inited: boolean; // can't change this flag
}
