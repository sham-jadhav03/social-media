import * as authService from "../services/auth.service.js";

export const register = async(req: Request, res: Response) => {
 const data = await authService.register(req.body);

 res.status(201).json(data);
}

export const login = async (req: Request, res: Response) => {
    const data = await authService.login(req.body.email,
        req.body.password
    );

    res.json(data)  
}