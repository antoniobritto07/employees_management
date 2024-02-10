import { useCallback, useEffect, useState, ChangeEvent } from 'react';
import { ToastContainer } from "react-toastify"
import { useParams } from 'react-router-dom'
import { format } from 'date-fns'
import { AxiosResponse } from 'axios';

import { api, calculateDatesDifference, isObjectEmpty } from '../../utils'
import { ApiResponse, Employee, Department, DepartmentHistory } from '../../types'
import { showToastMessage } from '../../utils';
import { Loading } from '../../components';

import "./employeeDetails.scss"
import 'react-toastify/dist/ReactToastify.css';

const EmployeeDetails = () => {
  const { id } = useParams();

  const [employee, setEmployee] = useState<Employee>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedDepartment, setSelectedDepartment] = useState<Department>({});
  const [departmentOptions, setDepartmentOptions] = useState<Array<Department>>([]);
  const [departmentHistory, setDepartmentHistory] = useState<Array<DepartmentHistory>>([]);

  const loadEmployeeByIdAndDepartmentsAvailable = useCallback(async (id: string | undefined) => {
    try {
      const responseEmployee: AxiosResponse<ApiResponse<Employee>> = await api.get(`employees/${id}`);
      const responseDepartments: AxiosResponse<ApiResponse<Department[]>> = await api.get('departments/');
      //@ts-ignore
      setEmployee(responseEmployee.data);
      //@ts-ignore
      const departmentsAvailable = responseDepartments.data.filter(departmentAvailable => departmentAvailable.id !== responseEmployee.data?.department?.id);
      setDepartmentOptions(departmentsAvailable);
    } catch (error) {
      console.error(error);
    }
  }, [api]);

  const changeEmployeeStatus = useCallback(async () => {
    try {
      setIsLoading(true)
      await api.put(`employees/${id}`, {
        "status": !employee?.status
      })
      await loadEmployeeByIdAndDepartmentsAvailable(id);
      setIsLoading(false)
      showToastMessage(`Employee status has been updated successfully`, 'success');
    } catch (error) {
      showToastMessage('Some error happened when trying to update the employee status', 'error')
    }

  }, [api, loadEmployeeByIdAndDepartmentsAvailable, showToastMessage, employee])

  const handleSelectChangeDepartment = useCallback(async (e: ChangeEvent<HTMLSelectElement>) => {
    try {
      let nameDepartmentSelected: string = e.target.value
      //@ts-ignore
      setSelectedDepartment(nameDepartmentSelected);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const updateDepartment = useCallback(async () => {
    const departmentToBeSet = departmentOptions.find((department) => department.name === selectedDepartment)

    try {
      setIsLoading(true)
      await api.put(`employees/${id}`, {
        "department": departmentToBeSet
      })
      setSelectedDepartment({});
      setDepartmentHistory([...departmentHistory, {
        id: departmentToBeSet?.id,
        date: format(Date.now(), 'MMMM d, yyyy'),
        department: departmentToBeSet?.name
      }])
      await loadEmployeeByIdAndDepartmentsAvailable(id);
      setIsLoading(false)
      showToastMessage(`Department has been updated successfully`, 'success');
    } catch (error) {
      showToastMessage('Some error happened when trying to update employee department', 'error')
    }
  }, [api, showToastMessage, loadEmployeeByIdAndDepartmentsAvailable, departmentHistory, selectedDepartment])

  useEffect(() => {
    loadEmployeeByIdAndDepartmentsAvailable(id);
  }, []);

  if (isLoading) {
    <Loading />
  }

  return (
    <div className="page-content">
      <div className='employee-personal-info-table'>
        <div>
          <div className='avatar-user-bigger' />
          {!employee?.status && (
            <div className="inactive-button">Inactive</div>
          )}
        </div>
        <div className="general-more-infos">
          <div className='employee-name-detailed'>
            {employee?.firstName} {' '} {employee?.lastName}
          </div>

          <div className='employee-id'>
            Employee ID: {' '} {employee?.id} {' '}
          </div>

          <div className='employee-department'>
            Department: {' '} {employee?.department?.name} {' '}
          </div>

          <div className='employee-telephone'>
            Telephone: {' '} {employee?.phone} {' '}
          </div>

          <div className='employee-address'>
            Address: {' '} {employee?.address} {' '}
          </div>

          <label className="update-department-label" htmlFor="dropdown">Update Department</label>

          <div>
            <select
              id="dropdown"
              value={selectedDepartment.name}
              onChange={(e) => handleSelectChangeDepartment(e)}
            >
              <option value="">{employee?.department?.name}</option>
              {departmentOptions.map((department) => (
                <option key={department.id} value={department.name}>{department.name}</option>
              ))}
            </select>
            <button
              className="button-update-department"
              disabled={isObjectEmpty(selectedDepartment)}
              style={{ "backgroundColor": isObjectEmpty(selectedDepartment) ? undefined : "#00FF00" }}
              onClick={() => updateDepartment()}>
              Update
            </button>

          </div>
        </div>
        <div className="general-dates-infos">
          <div className='hire-date-label'>
            Hire date
          </div>

          <div>
            {employee?.hireDate &&
              format(new Date(employee?.hireDate), 'MMMM d, yyyy')
            }
          </div>

          <div>
            {employee?.hireDate &&
              calculateDatesDifference(employee?.hireDate)
            }
          </div>
          <div
            style={{ backgroundColor: employee?.status ? "red" : "#00FF00" }}
            onClick={() => changeEmployeeStatus()}
            className="inactive-second-button"
          >
            {employee?.status ? "Deactivate" : "Activate"}
          </div>
        </div>
      </div>

      <h2 className='department-history-label'>Department History</h2>

      <div className="container-headers-table">
        <label className="headers-table">Date</label>
        <label className="headers-table">Department</label>
      </div>
      <table>
        <tbody>
          {departmentHistory.map((eachDeparmentHistory: DepartmentHistory) => (
            <tr key={eachDeparmentHistory.id}>
              <td>{eachDeparmentHistory?.date}</td>
              <td>{eachDeparmentHistory?.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ToastContainer />
    </div>
  )
}

export default EmployeeDetails