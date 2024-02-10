import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateEmployeesTable1696300287073 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "employees",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        default: "uuid_generate_v4()",
                    },
                    {
                        name: "firstName",
                        type: "varchar",
                    },
                    {
                        name: "lastName",
                        type: "varchar",
                    },
                    {
                        name: "hireDate",
                        type: "date",
                    },
                    {
                        name: "departmentId",
                        type: "uuid",
                    },
                    {
                        name: "phone",
                        type: "varchar",
                    },
                    {
                        name: "address",
                        type: "varchar",
                    },
                    {
                        name: "status",
                        type: "boolean",
                        default: true,
                    },
                ],
                foreignKeys: [
                    {
                        columnNames: ["departmentId"],
                        referencedTableName: "departments",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE",
                    },
                ],
            })
        )
    }


    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("employees")
    }
}

