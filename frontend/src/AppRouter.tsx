import { Routes, Route } from "react-router-dom";

import { EmployeesList, EmployeeDetails } from "./pages";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<EmployeesList />} />
      <Route path="/employee/:id" element={<EmployeeDetails />} />
    </Routes>
  );
};

export default AppRouter;