export interface Employee {
  id?: string,
  firstName?: string,
  lastName?: string,
  hireDate?: Date,
  department?: {
    name?: string,
    id?: string
  },
  phone?: number,
  address?: string,
  status?: boolean
}

export interface Department {
  id?: string,
  name?: string,
}

export interface ApiResponse<T> {
  data?: T;
  status?: number;
}

export interface DepartmentHistory {
  id?: string,
  date: string;
  department?: string
}

