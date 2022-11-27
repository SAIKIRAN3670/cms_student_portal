import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import BootstrapTable from "react-bootstrap-table-next";
import { useEffect } from "react";

const AddStudentContainer = styled.div`
  flex: 6;
  margin-top: 80px;
`;

const columns = [
  {
    dataField: "id",
    text: "Product ID",
    sort: true,
  },
  {
    dataField: "name",
    text: "Product Name",
    sort: true,
  },
  {
    dataField: "price",
    text: "Product Price",
  },
];
const ViewStudent = () => {
  const [studentData, setStudentData] = useState();
  useEffect(() => {
    getAllStudentData();
  }, []);

  const getAllStudentData = () => {
    axios
      .get("http://localhost/school_backend/ViewStudent.php")
      .then((response) => {
        // const allStudents = response;
        // setStudentData(allStudents);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <AddStudentContainer>
        <div>
          <div className="row">
            <div className="col-md-12 text-center">
              <h1>Student List</h1>
            </div>
          </div>
          <div>
            {/* {studentData.map((ele, index) => {
              return (
                <div key={index}>
                  <h1>{ele.id} </h1>
                </div>
              );
            })} */}
          </div>
        </div>
      </AddStudentContainer>
    </>
  );
};

export default ViewStudent;
