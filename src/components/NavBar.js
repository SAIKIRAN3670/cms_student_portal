import { Badge, IconButton } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components'
import NotificationsIcon from "@material-ui/icons/Notifications";


const NavBarContainer = styled.div`
  width: 100%;
  height: 8vh;
  background: #eff5f5;
  position: fixed;
  z-index: 1;
`;

const NavBarWrapper = styled.div`
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  

`;
const Left = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
const Logoheader = styled.span`
  font-weight: 500;
  font-size: 30px;
  margin-left: 10px;
  
`;
const Center  = styled.div``
const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Avtar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: 20px;
  cursor: pointer;
`
const Logo = styled.img`
  width: 50px;
  height: 50px;
`

const NavBar = () => {
  return (
    <>
      <NavBarContainer>
        <NavBarWrapper>
          <Left>
            <Logo src="/images/logo.png" alt="logo" />
            <Logoheader>B.M.U</Logoheader>
          </Left>
          <Center></Center>
          <Right>
            <IconButton>
              <Badge badgeContent={10} color="secondary">
                <NotificationsIcon style={{ color: "#7f8c8d" }} />
              </Badge>
            </IconButton>
            <Avtar src="images/proflie_pic.jpg" />
          </Right>
        </NavBarWrapper>
      </NavBarContainer>
    </>
  );
}

export default NavBar