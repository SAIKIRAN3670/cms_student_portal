import React from 'react'
import styled from "styled-components";

const AddStudentContainer = styled.div`
  flex: 6;
  margin-top: 80px;
`;

const AddStudent = () => {
  return (
    <>
          <AddStudentContainer>
            <h1>Add Student</h1>
      </AddStudentContainer>
    </>
  );
}

export default AddStudent