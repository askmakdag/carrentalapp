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
  background-color: pink;
  
  .left {
    display: flex;
    align-items: center;
  }
  
  .right {
    display: flex;
    align-items: center;
  }
  
  .dropdown {
    
  }
`
