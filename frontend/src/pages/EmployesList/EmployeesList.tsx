import { useCallback, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { AxiosResponse } from 'axios'
import { format } from 'date-fns'

import { calculateDatesDifference, api } from '../../utils'
import { Employee, ApiResponse } from '../../types.ts'

import "./employeesList.scss";

const EmployeesList = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const loadEmployees = useCallback(async () => {
    try {
      const response: AxiosResponse<ApiResponse<Employee[]>> = await api.get('employees/');
      const { data } = response

      //@ts-ignore
      setEmployees(data);
    } catch (error) {
      console.error(error);
    }
  }, [api]);

  useEffect(() => {
    loadEmployees();
  }, [loadEmployees]);

  return (
    <div className='employees-table'>
      {employees.map((employee) => (
        <div className='employees-content-table' key={employee.id}>
          <div className='avatar-user' />
          <div className="general-infos">
            <div className='employee-name'>
              {employee?.firstName} {' '} {employee?.lastName}
              {' ('}
              {employee?.department?.name}
              {')'}
            </div>

            <div className='hire-date-label'>
              Hire date
            </div>

            <div className='hire-date-info'>
              {employee?.hireDate &&
                format(new Date(employee?.hireDate), 'MMMM d, yyyy')
              }
              {' ('}
              {employee?.hireDate &&
                calculateDatesDifference(employee?.hireDate)
              }
              {') '}
            </div>
          </div>
          <div className='button-more-info'>
            <Link to={`/employee/${employee?.id}`}>
              View details
            </Link>
          </div >
        </div>
      ))}
    </div >
  )
}

export default EmployeesList