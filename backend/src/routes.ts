import { Router } from "express";
import {
    GetAllDepartmentsController,
    GetByIdDepartmentController,
    CreateDepartmentController,
    UpdateDepartmentController,
    DeleteDepartmentController
} from "./controller/departments"
import {
    GetAllEmployeesController,
    GetByIdEmployeeController,
    CreateEmployeeController,
    UpdateEmployeeController,
    DeleteEmployeeController
} from "./controller/employees"

const routes = Router();

//Employess
routes.post("/employees", new CreateEmployeeController().handle)
routes.get("/employees", new GetAllEmployeesController().handle)
routes.get("/employees/:id", new GetByIdEmployeeController().handle)
routes.delete("/employees/:id", new DeleteEmployeeController().handle)
routes.put("/employees/:id", new UpdateEmployeeController().handle)

//Departments
routes.post("/departments", new CreateDepartmentController().handle)
routes.get("/departments", new GetAllDepartmentsController().handle)
routes.get("/departments/:id", new GetByIdDepartmentController().handle)
routes.delete("/departments/:id", new DeleteDepartmentController().handle)
routes.put("/departments/:id", new UpdateDepartmentController().handle)

export { routes };