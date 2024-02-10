import { Request, Response } from "express";
import { GetAllDepartmentsService } from "../../services/departments";

export class GetAllDepartmentsController {
    async handle(request: Request, response: Response) {
        const service = new GetAllDepartmentsService();

        const departments = await service.execute();

        return response.json(departments);
    }
}