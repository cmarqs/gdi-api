/**
 * @id Autonumber
 * @code National Code of Identification (CNPJ, NIPC, etc)
 * @nickname Short name
 * @name Company's business name
 */
export interface ICompany{
    id: number;
    code: string;
    nickname: string;
    name: string;
}

/**
 * Get a new Company object.
 */
function getNew(): ICompany{
    return { id: -1, code: '00.000.000/0000-00', nickname: '', name: '' };
}

export default {
    new: getNew,
}