import { Employee, Department } from "./src/entities";
import { AppDataSource } from "./src/data-source";
import { Seeder } from "typeorm-extension";

export class MainSeeder implements Seeder {
    async run(): Promise<void> {
        const departmentRepository = AppDataSource.getRepository(Department)
        const employeeRepository = AppDataSource.getRepository(Employee)

        const departmentsData = [
            {
                "id": "2472b653-88ce-4d76-93e1-6c5a5bdd1a89",
                "name": 'HR',
            },
            {
                "id": "ad1b45dd-6fae-4e49-b1ec-cdf868c4df6d",
                "name": 'Engineering',
            },
            {
                "id": "24b95a47-c37f-4418-a192-fe622a15cb59",
                "name": 'Sales',
            }
        ]

        const employeesData = [
            {
                "id": "9a732a7f-3554-4e32-966e-b02360262580",
                "firstName": "John",
                "lastName": "Doe",
                "hireDate": "2023-09-05",
                "phone": "5678943221",
                "address": "174 Main St",
                "status": true,
                "departmentId": "2472b653-88ce-4d76-93e1-6c5a5bdd1a89"
            },
            {
                "id": "ec3ebc24-f3eb-4a8d-910f-c546d1e4ffaf",
                "firstName": "Jane",
                "lastName": "Smith",
                "hireDate": "2023-02-01",
                "phone": "5678943221",
                "address": "170 Main St",
                "status": false,
                "departmentId": "ad1b45dd-6fae-4e49-b1ec-cdf868c4df6d"
            },
            {
                "id": "0273ea2f-f16a-442c-996b-38029d9b3bfd",
                "firstName": "Bob",
                "lastName": "Johnson",
                "hireDate": "2022-07-01",
                "phone": "123456789",
                "address": "167 Main St",
                "status": true,
                "departmentId": "24b95a47-c37f-4418-a192-fe622a15cb59"
            }
        ]

        const existingEmployeeIds = await departmentRepository.find({ select: ["id"] });
        const existingDepartmentIds = await employeeRepository.find({ select: ["id"] });

        for (const departmentData of departmentsData) {
            const departmentExists = existingDepartmentIds.some((existingDepartment) =>
                existingDepartment.id === departmentData.id
            );

            if (!departmentExists) {
                const department = new Department()

                Object.assign(department, departmentData);

                await departmentRepository.save(department);
            }
        }

        for (const employeeData of employeesData) {
            const employeeExists = existingEmployeeIds.some((existingEmployee) =>
                existingEmployee.id === employeeData.id
            );

            if (!employeeExists) {
                const employee = new Employee();
                Object.assign(employee, employeeData);

                const department = departmentsData.find((department) =>
                    department.id === employeeData.departmentId
                );

                //@ts-ignore
                employee.department = department;
                await employeeRepository.save(employee);
            }
        }
    }
}

