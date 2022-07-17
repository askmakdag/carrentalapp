import React from "react";
import styled from 'styled-components'

interface Props {
    children: React.ReactNode;
}

export const StyledSortBy = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 8px;
  
  .left {
    display: flex;
    align-items: center;
  }
  
  .right {
    display: flex;
    align-items: center;
  }
  
  .dropdown {
    margin-left: 8px;
    color: #FFFFFF;
    background-color: #E6356F;
    border: 1px Solid #E6356F;
    padding: 4px 16px;
    border-radius: 4px;
  }
`
