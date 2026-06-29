import repo from "../repositories/auth.repository.js"
import hashPassword, comparePassword from "../utils/password.js"
import generateToken from "../utils/jwt.js"

export const register  = async (body: any) => {
    const userAlreadyExists = await repo.findByEmail(body.email);

    if(userAlreadyExists) {
        throw new Error("Email already exists");
    }

    const password = await hashPassword(body.password)

    const user = await repo.createUser({
        ...body,
        password,
    });

    const token = generateToken(user.id);

    return {
        user,
        token
    }
}