import React from 'react'
import styled from "styled-components";

const AddStudentContainer = styled.div`
  flex: 6;
  margin-top: 80px;
`;

const ViewStudent = () => {
  return (
    <>
      <AddStudentContainer>
        <h1>View Student</h1>
      </AddStudentContainer>
    </>
  );
}

export default ViewStudent