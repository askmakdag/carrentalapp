import styled, {css} from 'styled-components'
import React from "react";

interface Props {
    type: string
    children: React.ReactNode;
}

const getRelatedColors = (type: string) => {
    switch (type) {
        case 'success':
            return css`
                    color: #157F41;
                    background-color: #157f4105;
                    border: 1px solid #157f41;
                  `;
        case 'error':
            return css`
                    color: #FF3333;
                    background-color: #FF333305;
                    border: 1px solid #FF3333;
                  `;
    }
}

export const StyledAlert = styled.div<Props>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  ${props => getRelatedColors(props.type)}
  
  .text {
    margin-left: 12px;
  }
`
