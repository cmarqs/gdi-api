import Company, { ICompany } from "./Company";
import Profile, { IProfile } from "./Profile";

export enum UserRoles {
    Admin,
    Standard,
}

export interface IUser {
    id: number;
    name: string;
    email: string;
    secret: string;
    observations: string;
    isActive: boolean;
    role: UserRoles;
    profile: IProfile;
    company: ICompany;
}


/**
 * Get a new User object.
 * 
 * @param name 
 * @param email 
 * @param role 
 * @param secret 
 * @returns 
 */
function getNew(
    name: string,
    email: string,
    profile:IProfile,
    company?: ICompany,
    isActive?: boolean,
    observations?: string,
    role?: UserRoles,
    secret?: string,
): IUser {
    return {
        id: -1,
        email,
        name,
        isActive: isActive ?? false,
        observations: observations ?? '',
        company: company ?? Company.new(),
        role: role ?? UserRoles.Standard,
        secret: secret ?? '',
        profile: profile ?? Profile.new(),
    };
}


/**
 * Copy a user object.
 * 
 * @param user 
 * @returns 
 */
function copy(user: IUser): IUser {
    return {
        id: user.id,
        email: user.email,
        name: user.name,
        observations: user.observations,
        role: user.role,
        secret: user.secret,
        company: user.company,
        profile: user.profile,
        isActive: user.isActive,
    }
}


// Export default
export default {
    new: getNew,
    copy,
}
