export const getAllActiveCompanies =
    `
    select id, code, nickname, name
    from companies where isActive = true;
    `

export const getCompanyById =
    `
    select id, code, nickname, name
    from companies where isActive = true and id = ?;
    `

export const getCompanyByUser =
    `
    select id, code, nickname, name
    from companies
    where isActive = true and
        id in (
          select uc.company_id from users u
            inner join user_companies uc on u.id = uc.user_id
            where u.id = ?
        );
    `

export const insertCompany =
    `
    insert into companies (code, nickname, name, isActive)
    values (?, ?, ?, ?);
    `

export const updateCompany =
    `update companies
    set code = ?,
        nickname = ?,
        name = ?,
        isActive = ?
    where id = ?;`

export const disableCompany =
    `
    update companies
    set isActive = 0
    where id = ?;
    `

export const deleteCompany =
    `
    delete from companies
    where id = ?;
    `