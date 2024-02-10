import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Department } from "./Department";
import { v4 as uuid } from "uuid";

@Entity("employees")
export class Employee {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    hireDate: string;

    @ManyToOne(() => Department, department => department.employees)
    department: Department;

    @Column()
    phone: string;

    @Column()
    address: string;

    @Column()
    status: boolean;

    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }
}