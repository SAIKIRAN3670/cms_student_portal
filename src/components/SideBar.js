import React from 'react'
import styled, { css } from 'styled-components'
import Dashboard from '@material-ui/icons/Dashboard';
import HomeIcon from "@material-ui/icons/Home";
import { Link } from 'react-router-dom';

const SideBarContainer = styled.div`
  flex: 1;
  height: calc(100vh - 50px);
  background: #eff5f5;
  position: sticky;
  top: 50px;
`;
const SideBarWrapper = styled.div`
    padding: 20px;
    margin-top: 40px;
    color: #555;
`;
const SideBarMenu = styled.div`
    margin-bottom: 10px;
`;
const SideBarTitle = styled.h1`
    font-size: 13px;
    padding: 5px;
`;
const SidebarList = styled.ul`
    list-style: none;
    padding: 5px;
`;
const SidebarListItem = styled.li`
    padding: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    border-radius:10px;
    &:hover{
        background: #eee;
    }
`;

const SideBar = () => {
  return (
    <SideBarContainer>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarTitle>Dashboard</SideBarTitle>
          <SidebarList>
            <Link to="/" className="link">
              <SidebarListItem>
                <Dashboard />
                Home
              </SidebarListItem>
            </Link>
          </SidebarList>
        </SideBarMenu>
        <SideBarMenu>
          <SideBarTitle>Student</SideBarTitle>
          <SidebarList>
            <Link to="/AddStudent" className="link">
              <SidebarListItem>
                <HomeIcon />
                Add Student
              </SidebarListItem>
            </Link>
            <Link to="/ViewStudent" className="link">
              <SidebarListItem>
                <HomeIcon />
                View Student
              </SidebarListItem>
            </Link>
          </SidebarList>
        </SideBarMenu>
        <SideBarMenu>
          <SideBarTitle>Teacher</SideBarTitle>
          <SidebarList>
            <Link to="/AddTeacher" className="link">
              <SidebarListItem>
                <HomeIcon />
                Add Teacher
              </SidebarListItem>
            </Link>
            <Link to="/ViewTeacher" className="link">
              <SidebarListItem>
                <HomeIcon />
                View Teacher
              </SidebarListItem>
            </Link>
          </SidebarList>
        </SideBarMenu>
        <SideBarMenu>
          <SideBarTitle>Other</SideBarTitle>
          <SidebarList>
            <Link to="/Holiday" className="link">
              <SidebarListItem>
                <HomeIcon />
                Holiday
              </SidebarListItem>
            </Link>
            <Link to="/Logout" className="link">
              <SidebarListItem>
                <HomeIcon />
                Logout
              </SidebarListItem>
            </Link>
          </SidebarList>
        </SideBarMenu>
      </SideBarWrapper>
    </SideBarContainer>
  );
}

export default SideBar