import styled from 'styled-components'

export const StyledCardMiddle= styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 12px;
  width: 25%;

  .title {
    text-align: center;
    background-color: #157F410D;
    color: #157F41;
    border-radius: 4px;
    padding: 4px;
    width: 90%;
  }
  
  .body {
    display: flex; 
    flex-direction: column;
    padding-top: 16px;
    padding-left: 8px;
  }
  
  .body__title {
    color: #157F41;
  }

  .body__body {
    display: flex;
    flex-direction: column;
    padding-top: 4px; 
  }
  
  .body__body--attribute {
    color: #157F41;
    padding: 1px 4px;
  }
  
  .bottom {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 200px;
    border: 1px Solid;
    border-radius: 4px;
    cursor: not-allowed;
  }
`
