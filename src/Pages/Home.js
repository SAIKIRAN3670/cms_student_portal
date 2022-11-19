import React from 'react'
import styled from 'styled-components'
import Featured from '../components/Featured'

const HomeContainer = styled.div`
  flex: 6;
    margin-top: 80px;
`;

const Home = () => {
  return (
    <>
      <HomeContainer>
        <Featured />
       
      </HomeContainer>
    </>
  );
}

export default Home