import styled from 'styled-components'

export const StyledCardLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 2;
  padding: 12px;

  .card__header {}
  
  .card__body {
    display: flex;
    flex-direction: row;

    .info__left {
      display: flex;
      flex-direction: column;
      flex: 1;
    }

    .info__left__image {
      img {
        max-height: 120px;
        width: 180px;
      }
    }

    .info__left__properties {
      ul {
        display: flex;
        padding: 0;
      }

      ul li {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0 12px;

        @media (max-width: 768px) {
          flex-direction: column;
        }
        
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
      flex: 1;
      flex-direction: column;
      padding-top: 16px;

      .info__right__row {
        display: flex;
        flex-direction: row;
        padding-bottom: 12px;
      }

      h5 {
        padding: 0;
        margin: 0;
      }

      img {
        height: 22px;
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
      flex: 1;

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
      flex: 1;
      justify-content: space-between;
      align-items: center;
      height: 40px;
      border: 1px solid #C7C7CD;
      padding: 0 4px;
      border-radius: 4px;

      img {
        height: 28px;
      }

      span {
        padding: 8px;
        font-size: 12px;
        font-weight: bold;
        border-radius: 4px;
        color: #FFF;
      }
    }
  }
`
