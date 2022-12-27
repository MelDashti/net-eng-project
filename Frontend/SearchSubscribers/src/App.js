import "./styles.css";
import React from "react";

export default function App() {
  const [query, setQuery] = React.useState("");

  const [tableData, setTableData] = React.useState([]);

  function handleChange(event) {
    const query = event.target.value;
    setQuery(query);
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch("https://dxtsmk.sse.codesandbox.io/search/" + query)
      .then((res) => res.json())
      .then((data) => {
        setTableData(data);
        console.log(data);
      });
    console.log(query);
    console.log(tableData);
  }

  return (
    <div className="App">
      <div className="form-container" onSubmit={handleSubmit}>
        <form>
          <input
            placeholder="Search Employee's First Name"
            className="form--input"
            onChange={handleChange}
            name="query"
            value={query}
          />
          <button className="form--submit">Submit</button>
        </form>
      </div>
      <div className="showdata">
        <table>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
          {tableData.map((employee, key) => {
            return (
              <tr key={key}>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}
