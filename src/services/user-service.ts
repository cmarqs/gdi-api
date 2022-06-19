
import { RegistryNotFoundError } from '@shared/errors';

import { execute } from "../util/mysql-connector";
import { UserQueries } from '@repos/index';
import { IUser } from '@models/User';
import { hashPassword } from '@util/bcrypt-util';


const getAll = async () => {
    return execute<IUser[]>(UserQueries.GetUsers, []);
};

const getByCustomer = async (company: IUser['company']) => {
    return execute<IUser[]>(UserQueries.GetUserByCustomer, [company.id]);
}

const getOneById = async (id: IUser['id']) => {
    const result = await execute<IUser[]>(UserQueries.GetOneById, [id]);

    if (!result || result.length <= 0)
        throw new RegistryNotFoundError();
    
    const user: IUser = result[0];
    return user;
}

const getOneByEmail = async (email: IUser['email']) => {
    const result = await execute<any>(UserQueries.GetOneByEmail, [email]);

    if (!result || result.length <= 0)
        throw new RegistryNotFoundError();
    
    const user: IUser = result[0];
    return user;
}

const addOne = async (user: IUser) => {
    let password: string = await hashPassword(user.secret);
    const result = await execute<{ affectedRows: number }>(UserQueries.AddUser, [
        user.name,
        user.email,
        password,
        user.observations,
        user.role,
        user.profile?.id,
        user.company?.id,
        true,
    ]);
    return result.affectedRows > 0;
};

const updateOne = async (user: IUser) => {
    const result = await execute<{ affectedRows: number }>(UserQueries.ChangeUser, [
        user.name,
        user.observations,
        user.role,
        user.profile?.id,
        user.company?.id,
        user.isActive,
        user.id
    ]);
    return result.affectedRows > 0;
}

const disableOne = async (id: IUser['id']) => {
    const result = await execute<{ afecctedRows: number }>(UserQueries.DisableUser, id);
    return result.afecctedRows > 0;
}

const phisicalRemove = async (id: IUser['id']) => {
    const result = await execute<{ afecctedRows: number }>(UserQueries.DeleteUser, id);
    return result.afecctedRows > 0;
}


// Export default
export default {
    getAll,
    getByCustomer,
    getOneById,
    getOneByEmail,
    addOne,
    updateOne,
    delete: disableOne,
    exclude: phisicalRemove
} as const;

