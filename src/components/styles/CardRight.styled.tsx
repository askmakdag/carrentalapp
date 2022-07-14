import styled from 'styled-components'

export const StyledCardRight= styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 25%;
  padding: 12px;
  
  .title {
    text-underline-offset: 4px;
    text-decoration-line: underline;
    text-decoration-style: dashed;
  }

  img {
    height: 35px;
    width: 35px;
  }
  
  button {
    border-bottom: 4px solid #af1e65
  }

  .bottom__button_container {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid;
    height: 40px;
    border-radius: 4px;
    margin-top: 8px;
    cursor: not-allowed;
  }
`
