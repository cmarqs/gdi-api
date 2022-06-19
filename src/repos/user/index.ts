import { deleteUser, disableUser, getAllActiveUsers, getUserByCustomer, insertUser, updateUser, getUserById, getUserByEmail } from "./Queries";

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

export {
    UserQueries
}