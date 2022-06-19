import bcrypt from 'bcrypt';

//import userRepo from '@repos/user-repo';
import jwtUtil from '@util/jwt-util';
import { UnauthorizedError } from '@shared/errors';
import userService from './user-service';



/**
 * Login()
 * 
 * @param email 
 * @param password 
 * @returns 
 */
async function login(email: string, password: string): Promise<string> {
    // Fetch user
    //const user = await userRepo.getOne(email);
    const user = await userService.getOneByEmail(email);
    if (!user) {
        throw new UnauthorizedError();
    }
    // Check password
    const pwdPassed = await bcrypt.compare(password, user.secret);
    if (!pwdPassed) {
        throw new UnauthorizedError();
    }
    // Setup Admin Cookie
    return jwtUtil.sign({
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
    });
}


// Export default
export default {
    login,
} as const;
