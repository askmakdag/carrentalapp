import React from "react";
import styled from 'styled-components'

interface Props {
    children: React.ReactNode;
}

export const StyledPickupReturn = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.075);
  padding-bottom: 16px;
  
  .header {
    display: flex;
    align-items: center;
    padding: 8px 5%;
    margin-bottom: 8px;
    width: 100%;
    border-bottom: 1px solid #C7C7CD;
    background-color: #F8F8F8;
  }
  
  .body {
    width: 100%;
    
    .pickup {
      display: flex;
      padding-top: 16px;

      .pickup__image {
        display: flex;
        flex: 2; 
        justify-content: center;
      }
      
      .pickup__text {
        flex: 10; 
      }
    }
    
    .drop {
      display: flex;
      padding-top: 16px;

      .drop__image {
        display: flex;
        flex: 2;
        justify-content: center;
      }
      
      .drop__text {
        flex: 10;
      }
    }
  }
`
