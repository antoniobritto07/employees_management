import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Employee } from './Employee';
import { v4 as uuid } from "uuid"

@Entity("departments")
export class Department {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @OneToMany(() => Employee, employee => employee.department)
    employees: Employee[];

    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }
}

