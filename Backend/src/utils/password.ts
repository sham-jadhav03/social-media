import bcrypt from 'bcrypt';

const hashPassword = async (password: string) =>{
    return bcrypt.hash(password, 12);
};

const comparePassword = async (password: string, hash: string) => {
    return bcrypt.compare(password, hash);
}

export default {
    hashPassword, comparePassword
}