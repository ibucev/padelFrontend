import { Role } from "./role.model";

export class Player {
    accountLocked?: boolean;
    accountNonExpired?: boolean;
    accountNonLocked?: boolean;
    authorities?: Array<String>;
    birthDate?: string;
    creationDate?: string;
    credentialsNonExpired?: boolean;
    email?: string;
    enabled?: boolean;
    firstname?: string;
    fullName?: string;
    id: number;
    lastUpdate?: string;
    lastname?: string;
    name?: string;
    password?: string;
    roles?: Array<Role>;
    username?: string;
    position?: string
}
