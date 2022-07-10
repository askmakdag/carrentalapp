import styled from 'styled-components'

export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  margin: 4px 0;
  padding: 0 20px;

  img {
    height: 101.5px;
    width: 180px;
  }

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  
  li {
    display: flex;
    flex-direction: row;
    align-items: center
  }
  
  h6 {
    margin: 8px;
  }
  
  & > div {
    flex: 1;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`
