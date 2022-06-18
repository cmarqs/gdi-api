export const getAllActiveUsers =
    `
        SELECT id, name, email, secret, observations, role, profile_id, user_customer_id, isActive FROM UNITY_GDL.users
        WHERE isActive = true;
    `

export const getUserById =
    `SELECT id, name, email, secret, observations, role, profile_id, user_customer_id, isActive FROM UNITY_GDL.users
WHERE id = ?;`

export const getUserByCustomer =
    `SELECT id, name, email, secret, observations, profile_id, user_customer_id, isActive 
    FROM UNITY_GDL.users
    WHERE isActive = true AND user_customer_id = ?;`

export const insertUser =
    `INSERT INTO UNITY_GDL.users 
        (name, email, secret, observations, role, profile_id, user_customer_id, isActive) 
    VALUES(?, ?, ?, ?, ?, ?, ?, ?);`

export const updateUser =
    `UPDATE UNITY_GDL.users 
        SET name=?, 
        observations=?, 
        role=?,
        profile_id=?, 
        user_customer_id=?, 
        isActive=? 
    WHERE id=?;    `

export const disableUser = `UPDATE UNITY_GDL.users SET isActive=b'0' WHERE id=?;`

export const deleteUser = `DELETE FROM UNITY_GDL.users WHERE id=?;`