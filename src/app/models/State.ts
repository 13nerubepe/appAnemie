import {AppUser} from '@probmis/utils';

export interface AuthState{
    user?: string;
    token?: AppUser;
    isloggedIn?: boolean;
}
