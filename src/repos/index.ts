import { deleteCompany, disableCompany, getAllActiveCompanies, getCompanyById, getCompanyByUser, insertCompany, updateCompany } from "./company/Queries";
import { deleteUser, disableUser, getAllActiveUsers, getUserByCustomer, insertUser, updateUser, getUserById, getUserByEmail } from "./user/Queries";

const UserQueries = {
    GetUsers: getAllActiveUsers,
    GetUserByCustomer: getUserByCustomer,
    GetOneById: getUserById,
    GetOneByEmail: getUserByEmail,
    AddUser: insertUser,
    ChangeUser: updateUser,
    DisableUser: disableUser,
    DeleteUser: deleteUser,
}

const CompanyQueries = {
    GetCompanies: getAllActiveCompanies,
    GetCompanyByUser: getCompanyByUser,
    GetOneById:getCompanyById,
    AddCompany:insertCompany,
    ChangeCompany:updateCompany,
    DisableCompany:disableCompany,
    DeleteCompany:deleteCompany,
}

export {
    UserQueries, CompanyQueries
}