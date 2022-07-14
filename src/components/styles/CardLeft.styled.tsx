import styled from 'styled-components'

export const StyledCardLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  .card__body {
    display: flex;
    flex-direction: row;
  }

  .card__info--left {
    display: flex;
    flex-direction: column;
    width: 50%;
  }

  .card__info--image {
    img {
      max-height: 120px;
      width: 180px;
    }
  }

  .card__info--properties {
    ul {
      display: flex;
      flex-direction: row;
      padding: 0;
    }

    ul li {
      display: flex;
      flex-direction: row;
      padding: 0 12px;

      img {
        height: 18px;
        width: 18px;
        margin-left: 4px;
      }
    }

    ul li:not(:last-child) {
      border-right: solid 1px gray;
    }
  }

  .card__info--right {
    display: flex;
    flex-direction: column;
    padding-top: 16px;

    .card__info--right__row {
      display: flex;
      flex-direction: row;
      padding-bottom: 12px;
    }

    h5 {
      padding: 0;
      margin: 0;
    }

    img {
      max-height: 22px;
      width: 22px;
      padding-right: 8px;
    }
  }
  
  .card__footer {
    display: flex;
    flex-direction: row;
    align-items: center;

    .card__info--bottom {
      width: 50%;

      ul {
        list-style-type: none;
        padding: 0 12px;
      }
      
      li {
        display: flex;
        flex-direction: row;
        align-items: center;
      }
    }

    .card__brand {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 50%;
      height: 40px;
      border: 1px solid #C7C7CD;
      padding: 0 4px;
      border-radius: 4px;

      img {
        height: 30px;
      }

      span {
        background-color: #ffd500;
        padding: 8px;
        font-size: 12px;
        border-radius: 4px;
        color: #000;
      }
    }
  }

    /*display: flex;
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

  @media (max-width: ${({theme}) => theme.mobile}) {
    flex-direction: column;
  }
  */
`
