
import { UserNotFoundError } from '@shared/errors';

import { execute } from "../util/mysql-connector";
import { UserQueries } from '@repos/user';
import { IUser } from '@models/User';

const getAll = async () => {
    return execute<IUser[]>(UserQueries.GetUsers, []);
};

const getByCustomer = async (company: IUser['company']) => {
    return execute<IUser[]>(UserQueries.GetUserByCustomer, [company.id]);
}

const addOne = async (user: IUser) => {
    const result = await execute<{ affectedRows: number }>(UserQueries.AddUser, [
        user.name,
        user.email,
        user.secret,
        user.observations,
        user.role,
        user.profile?.id,
        user.company?.id,
        true,
    ]);
    return result.affectedRows > 0;
};

const updateOne =async (user:IUser) => {
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

const disableOne=async (id:IUser['id']) => {
    const result = await execute<{ afecctedRows: number }>(UserQueries.DisableUser, id);
    return result.afecctedRows > 0;
}

const phisicalRemove=async (id:IUser['id']) => {
    const result = await execute<{ afecctedRows: number }>(UserQueries.DeleteUser, id);
    return result.afecctedRows > 0;
}


// Export default
export default {
    getAll,
    getByCustomer,
    addOne,
    updateOne,
    delete: disableOne,
    exclude: phisicalRemove
} as const;
