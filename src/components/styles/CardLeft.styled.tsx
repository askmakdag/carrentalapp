import styled from 'styled-components'

export const StyledCardLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  padding: 12px;

  .card__header {}
  
  .card__body {
    display: flex;
    flex-direction: row;

    .info__left {
      display: flex;
      flex-direction: column;
      width: 50%;
    }

    .info__left--image {
      img {
        max-height: 120px;
        width: 180px;
      }
    }

    .info__left--properties {
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

    .info__right {
      display: flex;
      flex-direction: column;
      padding-top: 16px;

      .info__right--row {
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
  }
  
  .card__footer {
    display: flex;
    flex-direction: row;
    align-items: center;
    
    .info__bottom {
      width: 50%;

      ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
      }
      
      li {
        display: flex;
        flex-direction: row;
        align-items: center;
      }
    }

    .brand {
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
`
