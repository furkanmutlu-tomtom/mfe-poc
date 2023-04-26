import React, { useEffect, useState } from 'react'

const Table = ({ data }) => {
  const { scheme, rows } = data;
  const [rowsData, setRowsData] = useState([]);

  useEffect(() => {
    fetch(rows.api.url)
      .then(res => res.json())
      .then(data => {
        data.forEach((obj) => {
          const newData = {};

          for (const key of Object.keys(scheme)) {
            newData[key] = obj[key];
          }

          setRowsData((prevData) => [...prevData, newData]);
        });
      });
  }, []);

  return (
    <>
      <br></br>
      <table className="table" style={{ margin: 28 }}>
        <thead>
            <tr>
              {Object.values(scheme).map((value, idx) => {
                return <th key={idx} scope='col'>{value}</th>
              })}
            </tr>
        </thead>
        <tbody>
            {rowsData.map((rowData, idx) => {
              return <tr key={idx}>
                {Object.keys(rowData).map((d, idx) => {
                  return <td key={idx}>{rowData[d]}</td>
                })}
              </tr>
            })}
            <tr>
              
            </tr>
        </tbody>
      </table>
    </>
  )
}

export default Table
