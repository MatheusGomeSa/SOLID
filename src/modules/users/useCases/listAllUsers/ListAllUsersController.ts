import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
    // eslint-disable-next-line prettier/prettier
    constructor(private listAllUsersUseCase: ListAllUsersUseCase) { }

    handle(request: Request, response: Response): Response {
        const { user_id } = request.headers;
        try {
            const userList = this.listAllUsersUseCase.execute({ user_id } as {
                user_id: string;
            });
            return response.json(userList);
        } catch (err) {
            return response.status(400).json({ error: err.message });
        }
        // Complete aqui
    }
}

export { ListAllUsersController };
