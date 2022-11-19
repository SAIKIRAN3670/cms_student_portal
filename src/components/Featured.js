import { IconButton } from '@material-ui/core'
import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { FeaturedData } from '../Data/DummyData'

const FeaturedContainer = styled.div`
    display: flex;
`
const FeaturedItem = styled.div`
  flex: 1;
  background: linear-gradient(
    120deg,
    rgba(176, 136, 249, 0.9),
    rgba(218, 159, 249, 1)
  );
  padding: 20px 10px;
  margin: 10px;
  color: #fff;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
const FeaturedTitle = styled.div`
    font-size: 23px;
    padding: 5px;
    font-weight: 600;

`
const FeaturedTotal = styled.div`
    font-size: 18px;
    font-weight: 500;
    padding: 5px;

`;
const FeaturedYear = styled.div`
  font-size: 18px;
  font-weight: 500;
  padding: 5px;
`;

const Icon = styled.img`
  position: absolute;
 
`;
const IconButtonStyled = styled.div`
    width: 80px;
    height: 80px;
    background: #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 2.5rem;
    right:2rem;
`

const FeatureItemWrapper = styled.div`

`
const Bubble = styled.div`
  height: 130px;
  width: 130px;
  background: #c47aff;
  border-radius: 50%;
  position: absolute;
  top: 0;
  right: -1rem;
  overflow: hidden;
`;
const BubbleSecond = styled.div`
  height: 200px;
  width: 200px;
  background: rgba(176, 136, 249, 0.9);
  border-radius: 50%;
  position: absolute;
  top: 3rem;
  right: -4rem;
  overflow: hidden;
`;
const Featured = () => {

  return (
    <>
      <FeaturedContainer>
        {FeaturedData &&
          FeaturedData.map((item, index) => (
            <FeaturedItem key={index}>
              <FeatureItemWrapper>
                <FeaturedTitle>{item.title} </FeaturedTitle>
                <FeaturedTotal>Total: {item.Total} </FeaturedTotal>
                <FeaturedYear>Year :{item.year} </FeaturedYear>
              </FeatureItemWrapper>

              <BubbleSecond />
              <Bubble />
              <IconButtonStyled>
                <Icon src={item.icon} alt="icons" />
              </IconButtonStyled>
            </FeaturedItem>
          ))}
      </FeaturedContainer>
    </>
  );
}

export default Featured