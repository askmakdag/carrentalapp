import styled from 'styled-components'
import React from "react";

interface Props {
    onClick: Function;
    children: React.ReactNode;
}

export const StyledHeader = styled.div<Props>`
  display: flex;
  align-items: center;
  padding: 16px 0;
  
  img {
    height: 40px; 
    width: 40px; 
    border-radius: 4px;
    margin-right: 8px;
    cursor: pointer;
  }
`
