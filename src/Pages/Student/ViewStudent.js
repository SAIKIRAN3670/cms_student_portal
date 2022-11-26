import React from 'react'
import axios from 'axios';
import styled from "styled-components";

const AddStudentContainer = styled.div`
  flex: 6;
  margin-top: 80px;
`;

const ViewStudent = () => {
  return (
    <>
      <AddStudentContainer>
        <div>
          <div className="row">
<div className="col-md-12 text-center">
    <h1>Student List</h1>
</div>
</div>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-2">First Name</div>
          <div className="col-md-2">Last Name</div>
          <div className="col-md-2">Email</div>
          <div className="col-md-2">Update</div>
          <div className="col-md-2">Delete</div>
        </div>

         <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-2">First Name</div>
          <div className="col-md-2">Last Name</div>
          <div className="col-md-2">Email</div>
          <div className="col-md-2">Update</div>
          <div className="col-md-2">Delete</div>
        </div>

        </div>
        
      </AddStudentContainer>
    </>
  );
}

export default ViewStudent