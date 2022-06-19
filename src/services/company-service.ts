
import { RegistryNotFoundError } from '@shared/errors';

import { execute } from "../util/mysql-connector";
import { CompanyQueries } from '@repos/index';
import { ICompany } from '@models/Company';
import { IUser } from '@models/User';
import { hashPassword } from '@util/bcrypt-util';



const getAll = async () => {
    return execute<ICompany[]>(CompanyQueries.GetCompanies, []);
};

const getByUser = async (user_id: IUser['id']) => {
    return execute<ICompany[]>(CompanyQueries.GetCompanyByUser, [user_id]);
}

const getOneById = async (id: ICompany['id']) => {
    const result = await execute<ICompany[]>(CompanyQueries.GetOneById, [id]);

    if (!result || result.length <= 0)
        throw new RegistryNotFoundError();
    
    const company: ICompany = result[0];
    return company;
}

const addOne = async (company: ICompany) => {
    const result = await execute<{ affectedRows: number }>(CompanyQueries.AddCompany, [
        company.code,
        company.nickname,
        company.name,
        true,
    ]);
    return result.affectedRows > 0;
};

const updateOne = async (company: ICompany) => {
    const result = await execute<{ affectedRows: number }>(CompanyQueries.ChangeCompany, [
        company.code,
        company.nickname,
        company.name,
        company.isActive,
        company.id
    ]);
    return result.affectedRows > 0;
}

const disableOne = async (id: ICompany['id']) => {
    const result = await execute<{ afecctedRows: number }>(CompanyQueries.DisableCompany, id);
    return result.afecctedRows > 0;
}

const phisicalRemove = async (id: ICompany['id']) => {
    const result = await execute<{ afecctedRows: number }>(CompanyQueries.DeleteCompany, id);
    return result.afecctedRows > 0;
}


// Export default
export default {
    getAll,
    getByUser,
    getOneById,
    addOne,
    updateOne,
    delete: disableOne,
    exclude: phisicalRemove
} as const;

