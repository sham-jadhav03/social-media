import bcrypt from 'bcrypt';

export const hashPassword = async (password: string) =>{
    const hash = bcrypt.hash(password, 12);
    return hash;
};

export const comparePassword = async (password: string, hash: string) => {
    const compare = bcrypt.compare(password, hash);
    return compare;
}
