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

export const login = async (email:string, password:string) => {
    const user = await repo.findByEmail(email);

    if(!user) 
        throw new Error("Invalid credentials");

    const valid = await comparePassword(
        password,
        user.password
    )

    if(!valid) 
        throw new Error("Invalid credentials");

    const token = generateToken(user.id);

    return {
        user,
        token
    }
    
}