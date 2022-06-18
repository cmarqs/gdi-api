import { deleteUser, disableUser, getAllActiveUsers, getUserByCustomer, insertUser, updateUser } from "./Queries";

const UserQueries = {
    GetUsers: getAllActiveUsers,
    GetUserByCustomer: getUserByCustomer,
    AddUser: insertUser,
    ChangeUser: updateUser,
    DisableUser: disableUser,
    DeleteUser: deleteUser,
}

export {
    UserQueries
}