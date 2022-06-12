import React from "react";

export default function Showdata() {
  let [employees, setEmployees] = React.useState([]);


  // fetch data from mongoDB database
  React.useEffect(() => {
    fetch("https://dxtsmk.sse.codesandbox.io/getdata")
      .then((res) => res.json())
      .then((data) => setEmployees(data));
  }, []);

  return (
    <div className="showdata">
      <table>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Password</th>
        </tr>
        {employees.map((employee, key) => {
          return (
            <tr key={key}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>{employee.password}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
