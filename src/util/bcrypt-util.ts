
import bcrypt from 'bcrypt';

const hashPassword = async (password:string, saltRounds:number = 10) => {
    try {
        // Generate a salt
        const salt = await bcrypt.genSalt(saltRounds);

        // Hash password
        return await bcrypt.hash(password, salt);
    } catch (error) {
        console.log(error);
    }

    // Return null if error
    throw new Error("Error when trying to hash secret");
    
};

export {
    hashPassword
}