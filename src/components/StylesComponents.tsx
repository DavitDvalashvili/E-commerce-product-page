import styled from "styled-components";
import { styledDeaderType } from "./Types";

export const StyledHeader = styled.header<styledDeaderType>`
  padding: 19px 24px 25px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &::after {
    content: ${(props) => (props.hideNav ? "null" : `""`)};
    position: absolute;
    z-index: 7;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.75);
    width: 100%;
    height: 100%;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    .menu {
      margin-right: 16px;
      cursor: pointer;
    }
    .avatar {
      margin-left: 22.18px;
      width: 24px;
      height: 24px;
      cursor: pointer;
      border: solid 2px #fff;
      border-radius: 50%;
      transition: all 0.3s ease;
      &:hover {
        border-color: #ff7e1b;
      }
    }
    .notice {
      background-color: #ff7e1b;
      font-size: 10px;
      color: #fff;
      font-weight: 700;
      padding: 2.5px 6px 1.5px 6px;
      line-height: 8px;
      border-radius: 6.5px;
      position: absolute;
      top: 16px;
      right: 64px;
    }
  }
  @media (min-width: 1440px) {
    padding: 28px 76px 0px 0px;
    border-bottom: 1px solid #e4e9f2;
    .navBox {
      margin-top: 13px;
      display: flex;
      align-items: flex-start;
      gap: 56.5px;
    }
    .img-box {
      margin-top: -35px;
    }
    div {
      .avatar {
        margin-left: 26.18px;
        width: 50px;
        height: 50px;
      }
      .notice {
        top: 39px;
        right: 147px;
      }
    }
  }
`;

export const StyledNav = styled.nav`
  background-color: #fff;
  position: absolute;
  z-index: 10;
  top: 0px;
  left: 0px;
  padding: 24.78px 130px 0px 25px;
  height: 100%;
  font-size: 18px;
  line-height: 26px;
  font-weight: 700;
  li {
    list-style-type: none;
    cursor: pointer;
  }
  img {
    margin-bottom: 53.78px;
    cursor: pointer;
  }
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
  }
  @media (min-width: 1440px) {
    font-weight: 400;
    font-size: 15px;
    color: #69707d;
    padding: 0px;
    position: unset;
    height: unset;
    ul {
      flex-direction: row;
      align-items: flex-start;
      gap: 32px;
      li {
        padding-bottom: 41px;
        border-bottom: solid 4px #fff;
        transition: all 0.3s ease;
        &:hover {
          border-color: #ff7e1b;
        }
      }
    }
  }
`;

export const StyledProductContainer = styled.div`
  @media (min-width: 1400px) {
    margin: 90px 0px 132px 0px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 125px;
  }
`;

export const StyledImageBox = styled.div`
  .productSlider {
    height: 320px;
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }
    div {
      display: flex;
      width: 100%;
      justify-content: space-between;
      position: absolute;
      z-index: 5;
      padding: 140px 16px;
      top: 0;
      left: 0;
      img {
        cursor: pointer;
        width: 40px;
        height: 40px;
        &:hover div {
          background-color: unset;
        }
      }
    }
  }
  @media (min-width: 1440px) {
    .productSlider {
      width: 445px;
      height: 445px;
      border-radius: 15px;
      overflow: hidden;
      div {
        width: 445px;
        height: 445px;
        img {
          display: none;
        }
        &:hover {
          background-color: rgba(225, 225, 225, 0.75);
        }
      }
    }
    .productFlexBox {
      img {
        width: 88px;
        height: 88px;
        border-radius: 10px;
        position: relative;
        &::after {
          content: "";
          position: absolute;
          z-index: 9;
          top: 0;
          left: 0;
          background-color: rgba(0, 0, 0, 0.75);
          width: 100%;
          height: 100%;
        }
      }
      margin-top: 32px;
      display: flex;
      justify-content: space-between;
    }
  }
`;

export const StyledTextBox = styled.div`
  padding: 24px 24px 88px 24px;
  font-weight: 700;
  h2 {
    color: #ff7e1b;
    font-size: 12px;
    letter-spacing: 1.846px;
  }
  h1 {
    margin: 19px 0px 15px 0px;
    color: #1d2026;
    font-size: 28px;
    line-height: 32px;
  }
  p {
    color: #69707d;
    font-size: 15px;
    font-weight: 400;
    line-height: 25px;
    margin-bottom: 28px;
  }
  .priceBox {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 16px;
    }
    .discounted {
      color: #b6bcc8;
      font-size: 16px;
      line-height: 26px;
      text-decoration: line-through;
    }
    .price {
      color: #1d2026;
      font-size: 28px;
      text-decoration: unset;
    }
    .percentage {
      padding: 7px 8px 4px 8px;
      color: #ff7e1b;
      font-size: 16px;
      border-radius: 6px;
      background: #ffeee2;
    }
  }
  .amountBox {
    width: 100%;
    height: 56px;
    border-radius: 10px;
    background: #f6f8fd;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 24px;
    margin: 36px 0px 16px 0px;
  }
  button {
    width: 100%;
    height: 56px;
    border-radius: 10px;
    background: #ff7e1b;
    box-shadow: 0px 20px 50px -20px #ff7e1b;
    border: none;
    color: #ffffff;
    font-weight: 700;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15.54px;
  }
  @media (min-width: 1440px) {
    margin-top: 62px;
    padding: 0px;
    width: 445px;
    h2 {
      font-size: 13px;
      letter-spacing: 2px;
    }
    h1 {
      margin: 27px 0px 32px 0px;
      font-size: 44px;
      line-height: 48px;
    }
    p {
      font-size: 16px;
      line-height: 26px;
      margin-bottom: 24px;
    }
    .priceBox {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
    }
    .parentOfBtn {
      display: flex;
      gap: 16px;
      margin-top: 32px;
      .amountBox {
        width: 157px;
        padding: 0px 16px;
        margin: 0px;
      }
      button {
        width: 272px;
      }
    }
  }
`;

export const StyledCart = styled.div`
  font-weight: 700;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 20px 50px -20px rgba(29, 32, 38, 0.5);
  margin: 0px 8px;
  font-size: 16px;
  position: absolute;
  z-index: 7;
  top: 76px;
  left: 0px;
  width: 360px;
  h1 {
    padding: 24px 0px 27px 24px;
    color: #1d2026;
    border-bottom: 1px solid #e4e9f2;
    font-size: 16px;
  }
  .empty {
    color: #69707d;
    padding: 77px 109px 87px 109px;
  }
  > div {
    padding: 24px 24px 32px 24px;
    .productImg {
      width: 50px;
      height: 50px;
      border-radius: 4px;
    }
    .productBox {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      .textBox {
        color: #69707d;
        font-weight: 400;
        line-height: 26px;
        .expenditure {
          font-weight: 700;
          color: #1d2026;
        }
      }
    }
    button {
      margin-top: 24px;
      width: 100%;
      height: 56px;
      border-radius: 10px;
      background: #ff7e1b;
      color: #fff;
      font-weight: 700;
      border: none;
    }
  }
  @media (min-width: 1440px) {
    margin: 0px;
    left: unset;
    right: -76px;
    top: 94px;
  }
`;
