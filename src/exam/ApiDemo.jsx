import { useEffect, useState } from "react";
import axios from "axios";

export default function ApiDemo() {

  const [companies, setCompanies] = useState([]);
  const [error,setError] = useState()
  useEffect(() => {
    axios.get("https://dummy-json.mock.beeceptor.com/companies")
      .then((res) => {
        setCompanies(res.data);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  return (
   <div>
      <h2><u>Axios API Demo</u></h2>

      {
        error ? (
          <b>{error}</b>
        ) : companies.length === 0 ? (
          <b>Loading...</b>
        ) : (
          <table border={1} cellPadding={5} align="center" bgcolor="lightblue">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Location</th>
                <th>Industry</th>
              </tr>
            </thead>

            <tbody>
              {companies.map((company, index) => (
                <tr key={index}>
                  <td>{company.id}</td>
                  <td>{company.name}</td>
                  <td>{company.country}</td>
                  <td>{company.industry}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )
      }
    </div>
  );
}
