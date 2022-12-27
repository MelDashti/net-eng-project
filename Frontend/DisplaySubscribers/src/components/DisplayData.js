import React from "react";
import "../table.scss";

export default function DisplayData() {
  let [employees, setEmployees] = React.useState([]);
  let [pageData, setPageData] = React.useState([]);

  const [page, setPage] = React.useState(0); // page state

  const nextPage = () =>
    page < employees.length / 5 - 1 && setPage((prev) => prev + 1); //next page
  const prevPage = () => page > 0 && setPage((prev) => prev - 1); //previous page

  // fetch data from mongoDB database
  React.useEffect(() => {
    console.log("UseEffect");
    fetch("https://dxtsmk.sse.codesandbox.io/getdata")
      .then((res) => res.json())
      .then((data) => {
        setEmployees(data);
        setPageData(data.slice(page * 6, page * 6 + 6));
      });
  }, []);

  React.useEffect(() => {
    console.log("use effect for page");
    setPageData(employees.slice(page * 6, page * 6 + 6));
  }, [page]);

  return (
    <div className="showdata">
      <table>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
        </tr>
        {pageData.map((employee, key) => {
          return (
            <tr key={key}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
            </tr>
          );
        })}
      </table>
      <div className="pagination--container">
        <button onClick={prevPage}>Previous</button>
        <button onClick={nextPage}>Next</button>
      </div>
    </div>
  );
}
